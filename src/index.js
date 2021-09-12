// UTILITY FUNCTIONS
const EL = (sel, PAR) => (PAR || document).querySelector(sel);
const ELS = (sel, PAR) => (PAR || document).querySelectorAll(sel);
const ELNew = (tag, prop) => Object.assign(document.createElement(tag), prop);
const regEscape = (str) => str.replace(/[\.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Hilite
 * Highlight words in HTML
 */
class Hilite {
    constructor(selector, options) {
        Object.assign(this, {
            tag: "mark",
            className: "Hilite",
            sensitive: false,
        }, options, {
            target: EL(selector),
        });
    }

    highlight(node) {
        if (!node) node = this.target;
        if (node.children?.length) [...node.children].forEach((node) => this.highlight(node));
        if (node.hasChildNodes()) {
            [...node.childNodes].reverse().forEach((node) => {
                if (node.nodeType === 3 && node.nodeValue.trim()) this.highlight(node);
            });
        }
        if (node.nodeType !== 3) return;
        const matches = [];
        let match;
        while ((match = this._reg.exec(node.nodeValue)) !== null) matches.push(match);
        matches.reverse().forEach(mtc => {
            const TN_after = node.splitText(mtc.index);
            const EL_mark = ELNew(this.tag, { textContent: mtc[0], className: this.className });
            TN_after.nodeValue = TN_after.nodeValue.substring(mtc[0].length);
            node.parentNode.insertBefore(EL_mark, TN_after);
        });
    }

    unhighlight() {
        const EL_mark = ELS(this.tag, this.target);
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
        this._reg = new RegExp(regEscape(this._value), this.sensitive ? "g" : "ig");
        this.highlight();
    }
}

export { Hilite }
