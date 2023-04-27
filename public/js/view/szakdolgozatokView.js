class SzakdogaView {
    #elem;

    constructor(elem, szuloElem) {
        this.#elem = elem;
        console.log(elem);
        szuloElem.append(`
<tr>
        <td>${elem.szakdoga_nev}</td>
        <td>${elem.githublink}</td>
        <td>${elem.oldallink}</td>
        <td>${elem.tagokneve}</td>
        <td><button class="modositGomb" data-mg=${elem.id}>✍️</button></td>
        <td><button class="torolGomb" data-Torol=${elem.id}>❌</button></td>
</tr>
                        `);
    }
}

class SzakdogakView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        this.divElem = szuloElem.children("div");

        szuloElem.append(`
        <table id="tabla">
        <th>Szakdolgozat cím</th>
        <th>GitHub link</th>
        <th>Oldal linkje</th>
        <th>Tagok</th>
        <th></th>
        <th></th>
        
        </table>       
        `
        );



        const szuloElemem = $("#tabla");
        if (Array.isArray(elem)) {
            this.#elem.forEach(elemem => {
                new SzakdogaView(elemem, szuloElemem);
            });
        }
    }
}



export default SzakdogakView;