import {Hilite} from "./src/index.js";

const HL = new Hilite("#area");

const EL_search = document.querySelector("#search");
const EL_criteria = document.querySelector("#criteria");

// Do on search "input"
EL_search.addEventListener("input", () => HL.value = EL_search.value);

// Change word-match criteria
EL_criteria.addEventListener("input", () => HL.criteria = EL_criteria.value);

// Do on app init
HL.value = "text";
