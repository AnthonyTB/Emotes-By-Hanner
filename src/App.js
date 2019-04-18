import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './pages/Home';
import Store from './pages/Store';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Store" component={Store} />
				</Switch>
			</Router>
		);
	}
}

export default App;
