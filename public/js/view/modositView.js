class ModositView {
    #elem;

    constructor(elem, szuloElem) {

        szuloElem.append(`       

        <form  method="post" action="/szakdogak/${elem.id}">
        <input type="hidden" name="_token" value="${document.querySelector('meta[name="csrf-token"]').getAttribute('content')}">
        <input name="_method" type="hidden" value="PUT">

        <div class="form-group">
        <div class="szoveg">
        <label>Szakdolgozat címe</label>
        </div>
        <div class="input">
        <input type="text" name="szakdoga_nev" placeholder="${elem.szakdoga_nev}">
        </div>
        </div>
        <br>
        <div class="form-group">
        <div class="szoveg">
        <label>Készítők neve</label>
        </div>
        <div class="input">
        <input type="text" name="githublink" placeholder="${elem.githublink}">
        </div>
        </div>
        <br>
        <div class="form-group">
        <div class="szoveg">
        <label>Oldal elérhetősége</label>
        </div>
        <div class="input">
        <input type="text" name="oldallink" placeholder="${elem.oldallink}">
        </div>
        </div>
        <br>
        <div class="form-group">
        <div class="szoveg">
        <label>Tagok</label>
        </div>
        <div class="input">
        <input type="text" name="tagokneve" placeholder="${elem.tagokneve}">
        </div>
        </div>

              <input type="submit" name="send" value="Módosít" class="class="btn btn-danger">
            </div>
        </form>           
    `);

    }
}
class ModositViewk {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        this.divElem = szuloElem.children("div");

        szuloElem.append(`
  
            `
        );



        
        if (Array.isArray(elem)) {
            this.#elem.forEach(elemem => {
                new ModositView(elemem, szuloElem);
            });
        }
    }
}




export default ModositViewk;