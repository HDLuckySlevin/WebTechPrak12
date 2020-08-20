function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
}

const text = "Die Viewport-Breite beträgt:";
const wert = getViewportWidth();
const text2 = "Pixel.";

console.log(`${text} ${wert} ${text2}`);

/* 
    Alternativ:
    const ausgabe = `${text} ${wert} ${text2}`;
    console.log(ausgabe);
*/


/*
    Prak 9
*/

function Seminar(titel, seminarLeiter, ort, startzeit, endzeit, freiePlaetze, insgesamtVerfuegbarePlaetze, tutoren){
    this.titel = titel;
    this.seminarLeiter = seminarLeiter;
    this.ort = ort;
    this.startzeit = startzeit;
    this.endzeit = endzeit;
    this.freiePlaetze = freiePlaetze;
    this.insgesamtVerfuegbarePlaetze = insgesamtVerfuegbarePlaetze;
    this.tutoren = tutoren;
}

//Funktion via prototype eingepflegt, damit man diese direkt für alle Seminar-Instanzen hat
Seminar.prototype.belegtePlaetze = function(){
    return this.insgesamtVerfuegbarePlaetze - this.freiePlaetze;
};

//Seminare erzeugen 
let seminar1 = new Seminar("Kooperatirve Systeme", "Prof. Harrer", "WebEx VL", new Date("December 17, 2020 03:00:00"), new Date("December 29, 2020 03:00:00"), 14, 22, [ "anke1" , "tim2" ] );
let seminar2 = new Seminar("WebTech", "Prof. Joerges", "Selbststudium", new Date("December 10, 2020 03:00:00"), new Date("December 29, 2020 03:00:00"), 18, 30, [ "anke4","tim1" ] );
let seminar3 = new Seminar("MAE", "Prof. Vollmer", "WebEx VL", new Date("December 13, 2020 03:00:00"), new Date("December 30, 2020 03:00:00"), 7, 24, [ "anke2" , "tim2" ] );
let seminar4 = new Seminar("Irgendwas mit Medizin", "Prof. Haas", "Im Ilias", new Date("July 22, 2020 03:00:00"), new Date("December 29, 2020 03:00:00"), 14, 22, [ "anke1" , "tim2" ] );

let seminare = [ seminar1, seminar2, seminar3, seminar4 ];
/* hier könnte man auch jedes seminar mittels "seminare.push(x)" einfügen */

seminare.sort(function(a, b) {
    return a.startzeit - b.startzeit;  
});


seminare.forEach(function(elem){
    let titel = elem.titel;
    let start = elem.startzeit.toLocaleDateString();
    let plaetze = elem.insgesamtVerfuegbarePlaetze;
    let belegt = elem.belegtePlaetze();

    console.log(`${titel} (${start}, ${belegt} von ${plaetze} Plätzen belegt)`);
});

//console.log(Seminar)


/* Prak 10 - Aufgabe 1 */
/*
seminare.forEach(function(elem){
    //benötigte "HTML-Elemente erzeugen"
    let tr = document.createElement("tr");
    let tdTitel = document.createElement("td");
    let tdDatum = document.createElement("td");
    let tdOrt = document.createElement("td");

    //TextNodes erzeugen, aus den einzelnen Elementen der Seminare
    let titel = (document.createTextNode(elem.titel));
    let datum = document.createTextNode(elem.startzeit.toLocaleDateString());
    let ort = document.createTextNode(elem.ort);

    //anchor erzeugen - Titel anhängen - href einbinden - an das td anhängen
    let anchor = document.createElement("a");
    anchor.appendChild(titel);
    anchor.href = "WebTech.html";  
    tdTitel.append(anchor);

    //Datum und Ort (TextNodes) den entsprechenden td's anhängen
    tdDatum.append(datum);
    tdOrt.append(ort);

    //alle td-Elemente an das tr-Element anhängen
    tr.append(tdTitel);
    tr.append(tdDatum);
    tr.append(tdOrt);

    //das tr-Element and die tabelle hängen 
    document.querySelector("table tbody").append(tr);
});

*/

