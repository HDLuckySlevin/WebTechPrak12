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

Seminar.prototype.belegtePlaetze = function(){
    return this.insgesamtVerfuegbarePlaetze - this.freiePlaetze;
};

//Seminare erzeugen 
let seminar1 = new Seminar("Kooperatirve Systeme", "Prof. Harrer", "WebEx VL", new Date("December 17, 2020 03:00:00"), new Date("December 29, 2020 03:00:00"), 14, 22, [ "anke1" , "tim2" ] );
let seminar2 = new Seminar("WebTech", "Prof. Joerges", "Selbststudium", new Date("December 10, 2020 03:00:00"), new Date("December 29, 2020 03:00:00"), 18, 30, [ "anke4","tim1" ] );
let seminar3 = new Seminar("MAE", "Prof. Vollmer", "WebEx VL", new Date("December 13, 2020 03:00:00"), new Date("December 30, 2020 03:00:00"), 7, 24, [ "anke2" , "tim2" ] );
let seminar4 = new Seminar("Irgendwas mit Medizin", "Prof. Haas", "Im Ilias", new Date("July 22, 2020 03:00:00"), new Date("December 29, 2020 03:00:00"), 14, 22, [ "anke1" , "tim2" ] );

let seminare = [ seminar1, seminar2, seminar3, seminar4 ];

seminare.sort(function(a, b) {
    return a.startzeit - b.startzeit;  
});

//module.exports.seminars = seminare;
module.exports = {
    seminare: seminare.sort(function(a, b) {
        return a.startzeit - b.startzeit;  
    }),
    seminar: Seminar, 
};
