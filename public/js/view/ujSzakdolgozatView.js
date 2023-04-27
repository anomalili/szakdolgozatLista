class UjSzakdogaView {
    #elem;

    constructor(elem, szuloElem) {
        
        szuloElem.append(`       
        
        <form  method="post" action="/szakdogak">

        <input type="hidden" name="_token" value="${document.querySelector('meta[name="csrf-token"]').getAttribute('content')}">

        <div class="form-group">
        <label>Szakdolgozat címe</label>
        <br>
        <input type="text" name="szakdoga_nev">
        </div>
        <div class="form-group">
        <label>Készítők neve</label>
        <br>
        <input type="text" name="githublink">
        </div>
        <div class="form-group">
        <label>Oldal elérhetősége</label>
        <br>
        <input type="text" name="oldallink">
        </div>
        <div class="form-group">
        <label>Github elérhetőség</label>
        <br>
        <input type="text" name="tagokneve">
        </div>

              <input type="submit" name="send" value="Új" class="btn btn-dark btn-block">
            </div>
        </form>           
    `);
        

    }
}
class UjSzakdogakView {
    #elem;
    constructor(elem, szuloElem) {
         this.#elem = elem;
        szuloElem.append(`
        <div class="form"></div>
        
        `);

        const szuloElemem = $('.form')
        if (Array.isArray(elem)) {
            this.#elem.forEach(elemem => {
                new UjSzakdogaView(elemem, szuloElemem);
            });
        } 
    }
}



export default UjSzakdogaView;