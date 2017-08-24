import React from "react";
import {Link} from "react-router";








// var React = require("react");
// var Link = require("react-router").Link;



export default class Main extends React.Component {
  render() {
    return ( 
    	<div>
    <h1>Hello World</h1>
	<Link to = "/saved">Click here for saved Articles</Link>
	<Link to = "/search">Click here for searched Articles</Link> 
	<div>
		{this.props.children}
	</div>
	</div>
  )
  }
}

export default Main;
// create html with search and save component will be accesed in the main when click search you will access displayy components same with save 
// <!-- make seperate components for search results and dispaly 5 files in total including main-->
// create link tags for the components using link to chidd and a div to pick the child.
// \you need to use helper functions to get info and pass to backend history
