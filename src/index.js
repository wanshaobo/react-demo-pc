import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import ScrollOrientation from './view/ScrollOrientation';
import * as serviceWorker from './serviceWorker';
import ScrollOrientationFloat from "./view/ScrollorientationFloat";

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route path='/Scroll-orientation' component={ ScrollOrientation }></Route>
			<Route path='/Scroll-orientation-float' component={ ScrollOrientationFloat }></Route>
			<Route path='/' component={ App }></Route>
		</Switch>
	</HashRouter>,
	document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
