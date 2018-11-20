import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import ScrollOrientation from './view/ScrollOrientation';
import ScrollOrientationFloat from "./view/ScrollorientationFloat";
import DynamicLoadImg from "./view/DynamicLoadImg";
import WaterFall from "./view/WaterFall";
import WaterFallInfinite from "./view/WaterFallInfinite";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route path='/scroll-orientation' component={ ScrollOrientation }></Route>
			<Route path='/scroll-orientation-float' component={ ScrollOrientationFloat }></Route>
			<Route path='/dynamic-load-img' component={ DynamicLoadImg }></Route>
			<Route path='/water-full' component={ WaterFall }></Route>
			<Route path='/water-full-infinite' component={ WaterFallInfinite }></Route>

			<Route path='/' component={ App }></Route>
		</Switch>
	</HashRouter>,
	document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
