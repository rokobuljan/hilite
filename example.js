import {Hilite} from "./src/index.js";

const HL = new Hilite("#area");

const EL_search = document.querySelector("#search");

// Do on search "input"
EL_search.addEventListener("input", () => HL.value = EL_search.value);

// Do on app init
HL.value = "text";
