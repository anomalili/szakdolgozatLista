import AdminController from "./controller/adminController.js";
import ModositController from "./controller/modositController.js";
import TorolController from "./controller/torolController.js";


class App{
    constructor(){
        new AdminController();
        new TorolController();
        new ModositController();

    }
}



$(function () {
    new App();
});
