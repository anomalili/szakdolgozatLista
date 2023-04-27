import Aszinkron from "../aszinkron.js"
import ModositViewk from "../view/modositView.js";
import ModositView from "../view/modositView.js";

class ModositController {

    constructor() {

        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);

        $('body').on('click', '.modositGomb', (event) => {
            const button = $(event.target);
            const mgid = button.attr("data-mg"); 
            let vegpont = 'szakdogak';
            $("#ujSzakdolgozat").html("");
            aszinkron.adatBe(vegpont, this.megjelenitModositForm);
        });

    }
    megjelenitModositForm(adat) {
        new ModositViewk(adat, $("#ujSzakdolgozat"));
    }
}

export default ModositController;