class UjSzakdogaView {
    #elem;

    constructor(elem, szuloElem) {
        
        szuloElem.append(`       
        
        <form  method="post" action="/szakdogak">

        <input type="hidden" name="_token" value="${document.querySelector('meta[name="csrf-token"]').getAttribute('content')}">

        <div class="mb-3 mt-3">
        <div class="szoveg">
        <label class="form-label">Szakdolgozat címe</label>
        </div>
        <div class="input">
        <input type="text" name="szakdoga_nev" placeholder="cím" class="form-control">
        </div>
        </div>
        <br>
        <div class="mb-3 mt-3">
        <div class="szoveg">
        <label class="form-label">Készítők neve</label>
        </div>
        <div class="input">
        <input type="text" name="githublink" placeholder="github" class="form-control">
        </div>
        </div>
        <br>
        <div class="mb-3 mt-3">
        <div class="szoveg">
        <label class="form-label">Oldal elérhetősége</label>
        </div>
        <div class="input">
        <input type="text" name="oldallink" placeholder="oldal" class="form-control">
        </div>
        </div>
        <br>
        <div class="mb-3 mt-3">
        <div class="szoveg">
        <label class="form-label">Tagok</label>
        </div>
        <div class="input">
        <input type="text" name="tagokneve" placeholder="tagok" class="form-control">
        </div>
        </div>

              <input type="submit" name="send" value="Új" class="btn btn-danger">
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