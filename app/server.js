var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var app = express();
var PORT = 8000;

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api + json"}));

// Give our server a series of routes for our files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Create server and begin listening on specified port

app.get("/survey", function(req, res){
    fs.readFile("survey.html", "utf-8", function(error, data){
        res.send(data);
        res.redirect("/");
    });
});

app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});