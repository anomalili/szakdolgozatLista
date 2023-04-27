import SzakdogakView from "../view/szakdolgozatokView.js";
import UjSzakdogaView from "../view/ujSzakdolgozatView.js";
import Aszinkron from "../aszinkron.js"

class AdminController {

    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);
        $("#adminGomb").on("click", () => {
            $("#szakdolgozatok").html("");
            $("#ujSzakdolgozat").html("");
            let vegpont = "szakdogak";
            aszinkron.adatBe(vegpont, this.megjelenitSzakdogak);          
            aszinkron.adatBe(vegpont, this.megjelenitUjSzakdoga);       
        });
    }


    megjelenitSzakdogak(adat) {
        new SzakdogakView(adat, $("#szakdolgozatok"));
    }
    megjelenitUjSzakdoga(adat) {
        new UjSzakdogaView(adat, $("#ujSzakdolgozat"));
    }
}


export default AdminController;
