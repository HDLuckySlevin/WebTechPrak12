const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer(function(request, response) {
    //query abfangen
    const queryObject = url.parse(request.url, true).query;
    //console.log(queryObject.semtitle);

    //json parsen und asynchron weitermachen
    fs.readFile("fakeData.json", { encoding: "utf-8"}, function(err, name){
      let json = parseJson(name);
      let ergebnis = filterSeminare(json, queryObject.semtitle);

      //console.log(ergebnis.length);
      let htmloutput = "";
      for (let i = 0; i <= ergebnis.length-1 ; i++) {
        htmloutput += "<tr><td>"+(i+1)+"</td><td>"+ergebnis[i].titel+"</td><td>"+ergebnis[i].leiter+"</td></tr>"; 
      }

      if(ergebnis.length === 0){
        send(response, noHits(queryObject));
      }else if(ergebnis.length > 0){
        send(response, someHits(queryObject, htmloutput));
      } 
    });
}).listen(8020, function() {
  console.log("Lauschangriff auf 8020! Köpfe einziehen oder zurück feuern!");
});

//-------- Hilfsfunktionen --------//

// Ermittelt aus dem gegebenen Array von Seminaren diejenigen, 
// deren Titel den gegebenen Suchbegriff enthaelt. Die 
// ermittelten Seminare werden als Array zurueckgegeben.
let filterSeminare = function (seminare, suchbegriff) {
  return seminare.data.filter(function (seminar) {
    return seminar.titel.includes(suchbegriff);
  });
};

// Wandelt den gegebenen JSON-String in ein
// entsprechendes JavaScript-Objekt um
let parseJson = function (jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.error(err);
  }
};

//send-funktion -- kriegt response + aufrufbody und sendet diese durch .end
function send(response, body){
  response.writeHead(200, {"content-type" : "text/html; charset=utf-8"} );
  response.end(body);
}

// ausgelagerte HTML-Strings (mit inhlalt) queryObj. mitgegeben für sichtbarkeit
function someHits(queryObject, htmloutput) {
  return `<!DOCTYPE html>
                      <html>
                      <head>
                        <title>Seminar-App</title>
                      </head>
                      <body>
                        <h1>Seminar-App</h1>
                        <h2>Ergebnisse der Suche nach "${queryObject.semtitle}"</h2>
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Titel</th>
                              <th>LeiterIn</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${htmloutput} 
                          </tbod>
                        </table>
                      </body>
                      
                      </html>`;
}

function noHits(queryObject) {
  return `<!DOCTYPE html>
                      <html>
                      <head>
                        <title>Seminar-App</title>
                      </head>
                      <body>
                        <h1>Seminar-App</h1>
                        <h2>Ergebnisse der Suche nach "${queryObject.semtitle}"</h2>
                        <table>
                          <p>Keine Seminare gefunden!</p>
                        </table>
                      </body>
                      
                      </html>`;
}

