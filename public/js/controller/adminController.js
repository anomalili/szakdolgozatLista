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
        $("#userGomb").on("click", () => {
            $("#szakdolgozatok").html("");
            $("#ujSzakdolgozat").html("");
            let vegpont = "szakdogak";
            aszinkron.adatBe(vegpont, this.megjelenitSzakdogak);
        });
    }


    megjelenitSzakdogak(adat) {

        if (adat.length > 0) {
            new SzakdogakView(adat, $("#szakdolgozatok"));
        } else {
            $("#szakdolgozatok").html("<p>Nincs megjeleníthető szakdolgozat</p>");
        }
    }


    megjelenitUjSzakdoga(adat) {
        new UjSzakdogaView(adat, $("#ujSzakdolgozat"));
    }
}



export default AdminController;
