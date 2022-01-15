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
            criteria: "any", // "any", "start", "end", "full"
        }, options, {
            target: EL(selector),
        });
    }

    dom_highlight(node) {
        if (!node) node = this.target;
        if (node.children?.length) [...node.children].forEach((node) => this.dom_highlight(node));
        if (node.hasChildNodes()) {
            [...node.childNodes].reverse().forEach((node) => {
                if (node.nodeType === 3 && node.nodeValue.trim()) this.dom_highlight(node);
            });
        }
        if (node.nodeType !== 3) return;
        const matches = [];
        let match;
        while ((match = this._reg.exec(node.nodeValue)) !== null) matches.push(match);
        matches.reverse().forEach(mtc => {
            const TN_after = node.splitText(mtc.index);
            const EL_mark = ELNew(this.tag, {
                textContent: mtc[0],
                className: this.className,
                tabIndex: 0
            });
            TN_after.nodeValue = TN_after.nodeValue.substring(mtc[0].length);
            node.parentNode.insertBefore(EL_mark, TN_after);
        });
    }

    dom_unhighlight() {
        const EL_mark = ELS(this.tag, this.target);
        EL_mark.forEach(el => {
            const EL_par = el.parentElement;
            el.replaceWith(el.firstChild);
            EL_par.normalize();
        });
    }

    highlight() {
        this.dom_unhighlight();

        if (!this._value) return;

        const val_escaped = regEscape(this._value);
        const val_criteria = {
            any: val_escaped,
            start: `(?<=^| )${val_escaped}`,
            end: `${val_escaped}(?=$| )`,
            full: `(?<=^| )${val_escaped}(?=$| )`,
        }[this._criteria];

        this._reg = new RegExp(val_criteria, this.sensitive ? "g" : "ig");

        this.dom_highlight();
    }

    get criteria() {
        return this._criteria;
    }

    set criteria(cri) {
        this._criteria = cri;
        this.highlight();
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val.trim();
        this.highlight();
    }

    get sensitive() {
        return this._sensitive;
    }

    set sensitive(bool) {
        this._sensitive = bool;
        this.highlight();
    }
}

export { Hilite }
