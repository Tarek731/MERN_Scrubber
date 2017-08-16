// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// // Require Click schema
// var Click = require("./models/click");

// Create a new express app
var app = express();

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

app.get("/", function(req,res){
	// if (err){ res.send(err);
	res.sendFile(__dirname + "/public/index.html");
});




app.listen(PORT,function(){
	console.log("listening on ",PORT)
});