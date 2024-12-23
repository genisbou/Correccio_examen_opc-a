
//  Opció A

// Problema
// A partir d’aquest formulari, l'usuari ha d'indicar un text i un caràcter. Al premer el botó es
// cercaran totes aquelles paraules que tinguin el caràcter indicat per l'usuari. Se suposa que les
// paraules estan separades entre elles per espais en blanc.
// Cal mostrar les paraules en una llista ordenada <ul>, on s'indicarà cada paraula
// trobat el caràcter dins cada paraula.
// A més a més, es vol mostrar la paraula amb la lletra trobada en negreta. Cal validar que el text
// tingui com a mínim 2 paraules i que s'indiqui un caràcter, no numèric, ni símbol. Mostrar avís
// en cas que no es compleixin els requisits o que no s'hagi trobat cap paraula que contingui el
// caràcter indicat.


document.getElementById("iniciar").addEventListener("click", () => {
    console.log("Iniciant programa");

    // Validar que el text tingui com a mínim 2 paraules i que s'indiqui un caràcter
    let text = document.getElementById("text").value;
    let car = document.getElementById("char").value;
    let simbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?", "/"];
    let text_splitat = text.split(" ");

    // Validar que el text tingui com a mínim 2 paraules
    if (text_splitat.length < 2){
        alert("El text ha de tenir com a mínim 2 paraules");
        return;
    }

    // Validar que s'indiqui un sol caràcter i que no sigui numèric ni símbol
    if (car.length != 1){
        alert("Indica un sol caràcter");
        return;
    }
    if (car.match(/[0-9]/))  {
        alert("No pots introduir números");
        return;
    }
    if (simbols.includes(car)){
        alert("No pots introduir símbols");
        return;
    }

    // Cercar les paraules que continguin el caràcter indicat
    let paraules_trobat = [];
    let html_ul = "<ul>";

    for (let i = 0; i < text_splitat.length; i++){
        if (text_splitat[i].includes(car)){
            paraules_trobat.push(text_splitat[i]);

            let html_li = "<li>";

            for (let lletra of text_splitat[i]){
                if (lletra === car){
                    html_li += "<strong>" + lletra + "</strong>";
                } else {
                    html_li += lletra;
                }
            }

            html_li += "</li>";
            html_ul += html_li;
        }
    }

    if (paraules_trobat.length === 0){
        alert("No s'ha trobat cap paraula que contingui el caràcter indicat");
    }

    html_ul += "</ul>";
    document.getElementById("resultat").innerHTML = html_ul;
});