// UTILITY FUNCTIONS
const EL = (sel, PAR) => (PAR || document).querySelector(sel);
const ELS = (sel, PAR) => (PAR || document).querySelectorAll(sel);
const ELNew = (tag, prop) => Object.assign(document.createElement(tag), prop);
const regEscape = (str) => str.replace(/[\.*+?^${}()|[\]\\]/g, "\\$&");

export default class Highlight {
    constructor(selector, options) {
        Object.assign(this, {
            tag: "mark",
            className: "highlight",
        }, options, {
            target: EL(selector),
        });
    }

    highlight(node) {
        if (!node) node = this.target;
        if (node.children?.length) [...node.children].forEach((node) => this.highlight(node));
        if (node.hasChildNodes()) node.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) this.highlight(node);
        });
        if (node.nodeType !== Node.TEXT_NODE || !node.nodeValue.trim()) return;

        const match = node.nodeValue.match(this._reg);
        if (!match) return;
        const TN_after = node.splitText(match.index);
        const EL_mark = ELNew(this.tag, { textContent: match[0], className: this.className });

        TN_after.nodeValue = TN_after.nodeValue.substring(match[0].length);
        node.parentNode.insertBefore(EL_mark, TN_after);

    }

    unhighlight() {
        const EL_mark = ELS("mark", this.target);
        EL_mark.forEach(el => {
            const EL_par = el.parentElement;
            el.replaceWith(el.firstChild);
            EL_par.normalize();
        });
    }

    get value() {
        return this._value;
    }

    set value(v) {
        this.unhighlight();
        this._value = v.trim();
        if (!this._value) return;
        this._reg = new RegExp(regEscape(this._value), "i");
        this.highlight();
    }
}
