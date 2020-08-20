const express = require("express");
const seminars = require("../models/seminars")
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));


router.get("/seminarliste", function(req, res,){
    res.render("listeSeminare.ejs", { seminare: seminars.seminare } );
});

router.get("/seminardetail", function(req, res,){
    res.render("WebTech.ejs");
});

router.get("/seminarleiter", function(req, res,){
    res.render("joerges.ejs");
});

router.get("/seminarneu", function(req, res,){
    res.render("seminarAnlegen.ejs");
});

router.post("/seminarneu", function(req, res,){
    let tutor = req.body.semtutors.split(",");
    let ort = req.body.semort;
    if(ort === ""){ort = "tbh"}

    /* Natürlich kann und sollte man hier noch auf mögliche falscheingaben achte. Bsp das Date und die Zeit. */
    /* auch kann die semlead abfangen und vernünfitg darstellen 
    etc etc etc*/
    let seminar = new seminars.seminar(req.body.semtitle, req.body.semlead, ort, new Date(req.body.semdate+"T"+req.body.semstart), new Date(req.body.semdate+"T"+req.body.semend), 10, req.body.semseats, tutor );
    console.log(seminar);
    seminars.seminare.push(seminar);
    seminars.seminare.sort(function(a, b) {
        return a.startzeit - b.startzeit;  
    });
    res.redirect("/seminarliste");
});

router.get("/", function(req, res,) {
    res.render("dashboard.ejs");
});

router.use(function(req, res){
    //wirft den 404 code und lädt die Fehlerseite (sehr spartanisch)
    res.status(404).render("fehlerseite.ejs");
});

module.exports = router;