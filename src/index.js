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
import DynamicImports from "./view/DynamicImports";
import NotFound from "./static/NotFound";

//三层路由示例
import LevelTwo from "./view/Mutil-Route/LevelTwo";
import LevelThree from "./view/Mutil-Route/LevelThree";


import * as serviceWorker from './serviceWorker';
console.log('index.js');
ReactDOM.render(
	<HashRouter>
		<Switch>
			{/*顶层路由入口，必须设置exact属性，才能保证只捕获根URL，如果不设置exact，则任何URL都会命中根URL*/}
			<Route exact path='/' component={ App }></Route>
			<Route path='/scroll-orientation' component={ ScrollOrientation }></Route>
			<Route path='/scroll-orientation-float' component={ ScrollOrientationFloat }></Route>
			<Route path='/dynamic-load-img' component={ DynamicLoadImg }></Route>
			<Route path='/water-full' component={ WaterFall }></Route>
			<Route path='/water-full-infinite' component={ WaterFallInfinite }></Route>
			<Route path='/dynamic-imports' component={ DynamicImports }></Route>

			{/*必须设置exact属性，才能保证命中下一级路由*/}
			<Route exact path='/level-two' component={ LevelTwo }></Route>
			<Route path='/level-two/level-three' component={ LevelThree }></Route>

			<Route component={NotFound} />
		</Switch>
	</HashRouter>,
	document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
