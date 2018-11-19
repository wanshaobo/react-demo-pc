import React, { Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import './common.css';

//2个全局变量
let scrollX = 0;//水平方向滚动的实时距离
let pageW = 0;//水平方向可以滚动的最大距离

class App extends Component {

	componentWillMount(){

	}

	componentDidMount(){

	}

	componentWillUnmount(){

	}

	render() {
		return (
			<div>
				<ul className='item'>
					<li><Link to="Scroll-orientation">横向滚动</Link></li>
					<li><Link to="Scroll-orientation-float">横向浮动滚动</Link></li>
				</ul>
			</div>
		);
	}
}

export default App;
