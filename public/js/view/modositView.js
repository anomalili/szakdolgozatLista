class ModositView {
    #elem;

    constructor(elem, szuloElem) {
        
        szuloElem.append(`       

        <form  method="PUT" action="/szakdogak/${elem.id}">


        <input type="hidden" name="_token" value="${document.querySelector('meta[name="csrf-token"]').getAttribute('content')}">

        <div class="form-group">
        <label>Szakdolgozat címe</label>
        <br>
        <input type="text" name="szakdoga_nev" placeholder="${elem.szakdoga_nev}">
        </div>
        <div class="form-group">
        <label>Készítők neve</label>
        <br>
        <input type="text" name="githublink" placeholder="${elem.githublink}">
        </div>
        <div class="form-group">
        <label>Oldal elérhetősége</label>
        <br>
        <input type="text" name="oldallink" placeholder="${elem.oldallink}">
        </div>
        <div class="form-group">
        <label>Github elérhetőség</label>
        <br>
        <input type="text" name="tagokneve" placeholder="${elem.tagokneve}">
        </div>

              <input type="submit" name="send" value="Módosít" class="btn btn-dark btn-block">
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
<div class="modositDiv"></div>   
            `
            );
    
    
    
            const szuloElemem = $(".modositDiv");
            if (Array.isArray(elem)) {
                this.#elem.forEach(elemem => {
                    new ModositView(elemem, szuloElemem);
                });
            }
        }
}




export default ModositViewk;