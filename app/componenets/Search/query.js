import React from "react";
class Query extends React.Component{
	
constructor(props){

	super(props);
	this.state = {
		search:"",
		start:"",
		end:""
	}
}
handleSubmit (event){

	event.preventDefault();
	console.log("submit is clicked");
	// this.setState({
	// 	search:search,
	// 	start:start,
	// 	end: end

	// })
	const {search, start, end} = this.state
	
newState[event.target.id] = event.target.value;
this.setState(newState);
	this.props.setQuery(this.state.seach, this.state.start, this.state.end)
}
}








	render(){
	return( 
		<div>
		<h1>is Query</h1>
		</div>
		)
	}
}
export default Query;