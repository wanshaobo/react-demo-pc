import React, { Component } from 'react';
import '../common.css';
// import asyncComponent from "../static/AsyncComponent";
//
// const AsyncBigDom = asyncComponent(() => import("./BigDom"));

class DynamicImports extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}//如果你想使用babel时使用import，你需要使用syntax-dynamic-import插件

	insert(){
		//这个方案失败
		// import(/* webpackMode: "BigDom" */'./BigDom').then(component  => {
		// 	document.getElementById('box').appendChild(component.default);
		// }).catch(function(err) {
		// 	console.log('Failed to load moment', err);
		// });
	}

	render() {
		return (
			<div id='box'>
				<div>点击下面这个按钮，动态插入较大的DOM</div>
				<span className='btn' onClick={()=>{this.insert()}}>click</span>
				{/*<AsyncBigDom/>*/}
			</div>
		);
	}
}

export default DynamicImports;
