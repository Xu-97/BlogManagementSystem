import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import './App.less';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/login" component={Login}></Route>

					<Route path="/" component={Admin}></Route>
					<Redirect to="/login" />
				</Switch>
			</HashRouter>
		);
	}
}

export default App;
