let klicker = document.getElementById("flexbox5");

klicker.addEventListener("click", function(){
    event.preventDefault();
    let titelMsg = prompt("TITEL");
    let urlMsg = prompt("URL");
    
    let titel = (document.createTextNode(titelMsg));
    let anchor = document.createElement("a");
    anchor.href = urlMsg;

    let div = document.createElement("div");
    div.appendChild(titel);
    div.className = "flexboxdash";
    anchor.appendChild(div);


    document.getElementById("flexbox5").parentNode.before(anchor);
    /*
        Das hat mir echt ein paar graue Haare bescherrt! 
        ohne das "event.preventDefault" konnte ich nichts machen. jedesmal wurde, nach dem
        "click", die Seite neu geladen, wodurch alle codes minimal angezeigt wurden
        und dann direkt durch ein "reload" gelöscht wurden.
    */
});




//tictac
let stringer = "";
for (let index = 1; index <= 100; index++) {
    
    if((index%3 === 0) && index%5 === 0) {stringer += "TicTac"}
    else if(index%3 === 0) {stringer += "Tic"}
    else if(index%5 === 0) {stringer += "Tac"}
    else {stringer += index}
    stringer += " ";
}

console.log(stringer);

//NaN Tic 4 Tac  Tic 78 Tic  Tac 11 Tic 1314 TicTac 1617 Tic 19 Tac  Tic 2223 Tic  Tac 26 Tic 2829 TicTac 3132 Tic 34 Tac  Tic 3738 Tic  Tac 41 Tic 4344 TicTac 4647 Tic 49 Tac  Tic 5253 Tic  Tac 56 Tic 5859 TicTac 6162 Tic 64 Tac  Tic 6768 Tic  Tac 71 Tic 7374 TicTac 7677 Tic 79 Tac  Tic 8283 Tic  Tac 86 Tic 8889 TicTac 9192 Tic 94 Tac  Tic 9798 Tic  Tac 