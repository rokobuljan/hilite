import Highlight from "./src/index.js";

const HL = new Highlight("#target");

const EL_search = document.querySelector("#search");
EL_search.addEventListener("input", () => HL.value = EL_search.value);
HL.value = EL_search.value;