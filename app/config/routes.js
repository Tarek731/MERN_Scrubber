// use child and pic
var React = require("react");
var router = require("react-router");
var Route = router.Route;
var Router = router.Router;
var IndexRoute = router.IndexRoute;
var browserHistory = router.browserHistory;
import Main from "../components/Main";

import Search from "../components/Search";

import Saved from "../components/Saved";

// var Main = require("../components/Main");
// var Search = require("../components/Search");
// var Search = require("../components/Saved");

module.exports = (
	<Router history ={browserHistory}>
		<Route path="/" component{Main}>
		<Route path="Search" component={Search} />
		<Route path= "Saved" component= {Saved} />
		<IndexRoute component={Search} />
		</Route>
	</Router>

	)