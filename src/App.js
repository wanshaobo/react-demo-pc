import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './common.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentWillMount(){

	}

	componentDidMount(){
		console.log('APP.js');
	}

	componentWillUnmount(){

	}

	render() {
		return (
			<ul className='home-item'>
				<li><Link to="scroll-orientation">横向滚动</Link></li>
				<li><Link to="scroll-orientation-float">横向浮动滚动</Link></li>
				<li><Link to="dynamic-load-img">动态加载图片</Link></li>
				<li><Link to="water-full">瀑布流</Link></li>
				<li><Link to="water-full-infinite">无限瀑布流</Link></li>
				<li><Link to="dynamic-imports">代码分离-动态导入</Link></li>
				<li><Link to="level-two">3层路由示例</Link></li>
				<li><Link to="xyz">404</Link></li>
			</ul>
		);
	}
}

export default App;
