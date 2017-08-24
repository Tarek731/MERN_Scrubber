var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Article schema = new Schema({
	title:{
		type: String,
		required: true
	},
	link:{
		type: String,
		required: true
	},
	date:{
		type: date
	}
		
})
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;