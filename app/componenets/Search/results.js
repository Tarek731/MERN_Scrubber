import React from "react";

const Results = (props)=>{

	return(
<div>
{ props.results &&
	props.results.docs.map( (result, index)=>{
return(
<h3 key={index}>{result.headline.main}</h3>
)
})


		
	}
</div>
)

}

// class Results extends React.Component {
// 	render(){


// 	}
// }
export default Results;