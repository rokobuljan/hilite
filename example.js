import {Hilite} from "./src/index.js";

const HL = new Hilite("#area");

const EL_search = document.querySelector("#search");
const EL_criteria = document.querySelector("#criteria");
const EL_sensitive = document.querySelector("#sensitive");

// Do on search "input"
EL_search.addEventListener("input", () => HL.value = EL_search.value);
// Change word-match criteria
EL_criteria.addEventListener("input", () => HL.criteria = EL_criteria.value);
// Change case
EL_sensitive.addEventListener("input", () => HL.sensitive = EL_sensitive.checked);

// Highlight!
HL.value = EL_search.value;
