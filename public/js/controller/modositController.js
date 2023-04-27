import Aszinkron from "../aszinkron.js"
import ModositViewk from "../view/modositView.js";
import ModositView from "../view/modositView.js";

class ModositController {

    constructor() {

        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);
        $("#adminGomb").on("click", () => {

            let vegpont = "szakdogak";
            aszinkron.adatBe(vegpont, this.megjelenitModositForm);
        });

    }
    megjelenitModositForm(adat) {
        new ModositViewk(adat, $("#modositSzakdolgozat"));

    }




}



export default ModositController;