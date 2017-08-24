// look at exercises 19 and 21 
import axios from "axios";

const APIKey = "9b3adf57854f4a19b7b5782cdd6e4"

const helpers = {
	runQuery: (topic, start, end) => {

		const formatedTopic = topic.trim();
		const formatedStart = start.trim();
		const formatedEnd = end.trim();

		return axios.get("https://api.ntimes.com/svc/search/v2/articlesearch.json",){

			params:{
				"api-key": ,
				"q": formattedTopic,
				"begin_Date": formatedStart,
				"end_Date":formatedEnd
			}
		})
	
	.then(function)

	}
}