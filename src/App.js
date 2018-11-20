import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './common.css';

class App extends Component {

	componentWillMount(){

	}

	componentDidMount(){

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
			</ul>
		);
	}
}

export default App;
