import Aszinkron from "../aszinkron.js"

class TorolController {

    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);

        $('body').on('click', '.torolGomb', (event) => {
            const button = $(event.target);
            const tgid = button.attr("data-Torol"); 
            let vegpont = `/szakdogak/${tgid}`;
            aszinkron.adatTorol(vegpont);               
        });
    }

}


export default TorolController;
