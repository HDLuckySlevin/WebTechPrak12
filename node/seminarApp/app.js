const express = require("express");
const app = express();

const router = require('./routes/routes.js');
//const seminars = require("./models/seminars")
//seminars.seminare für das array

//console.log(seminars.seminare);
//console.log(seminars.seminare[0].startzeit.toLocaleDateString());

app.set("view engine", "ejs");
app.set("views", "views");

//Daten in "public" werden frei zugänglich gemacht! 
app.use(express.static("public"));

app.use(router);

app.listen(8040, function(){
    console.log("Server lauscht auf http://localhost:8040");
});

//const test = ["a", "b", "c"];
/*
app.use(function(request, response, next){
    //gerendert auf test.ejs mit den Daten "test"
    response.render("test.ejs", { test: test } );
});
*/