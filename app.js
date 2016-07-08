var express = require ("express");
var router = require ("./routes/routes.js");
var bodyParser = require ("body-parser");
var app = express();


//configuration
app.set ("port", process.env.port || 3000);


//middlewares
app.use (express.static('public'));  
app.use (bodyParser());


//routes
app.get ("/", function (req, res) {

	res.sendFile("public/index.html");

});

app.use ("/devices", router);


//error handling middleware
app.use(function (err, req, res, next) {

	console.log (err);

	res.status(500).send (err);

});


app.listen (app.get("port"), function () {
 
	console.log ("started listening on port no 3000");

});