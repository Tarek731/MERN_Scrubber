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



// bring in model
var Article = require("./models/click")

// coonect to mongo db database using
mongoose.connect("");
var db = mongoose.connection;
db.on("error" function(err){
	console.log("Mongoose Error", err);
});

db.once("open" function(){
	console.log("Mongoose connection Succedful");
});





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

// put the routes use pic and gomwork get post
app.get("/api/saved", function(req, res){

	Article.find({}, function (err, doc){

		if (err){
			console.log(err);
		} else{
			res.send(doc)
		}
		

	});

});

app.post("/api.post", function (req, res){
	var newArticle = new Article(req.body);

	newArticle.save(function(err, doc){
		
		if (err){
					console.log(err);
				} else{
					res.send(doc)
				}

	});
});
app.get("*", function(req, res){
	res.sendFile
})
app.delete("/api/delete", function(req, res){
	var newArticle = new Article(req.body);
	newArticle.save(function(err, doc){
			if (err){
					console.log(err);
				} else{
					res.send(doc)
				}

	});
});
app.listen(PORT,function(){
	console.log("listening on ",PORT)
});