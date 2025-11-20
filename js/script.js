// importe le memory
import {initialisation} from "./Memory.js";

// importe pour les formulaires
import { init } from "./formulaireInscription.js";


document.addEventListener("DOMContentLoaded", () => {
    // memory
    initialisation();

    // formulaires
    init();
});