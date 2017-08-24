import React from "react";
import helpers from "../utils/helpers";
import Query from "../Search/Query";
import  from Results"../Search/Results";

class Search extends React.Component{
constructor(props){

	super(props);
	this.state = {
		results: []
	}
}



setQuery:(newQuery, newStart, newEnd) => {
	helpers.runQuery(newQuery, newStart, newEnd).then(function(data){
	this.setState({ results: {docs: data.docs}})
}.bind(this));

	}



render() {
	return(
		<div className ="main-container">
		<Query setQuery={this.setQuery} />
		<Results results={this.state.resuts} />
		</div>
		)
	}

}
export default Search;