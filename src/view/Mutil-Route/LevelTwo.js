import React, { Component } from 'react';
import '../../common.css';
import { Link } from 'react-router-dom';

class LevelTwo extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentWillMount(){

	}

	componentDidMount(){

	}

	componentWillUnmount(){

	}

	render() {
		return (
			<div>
				<div>这是一个二级页面，点击下面这个按钮进入三级页面</div>
				<Link className='btn' to="/level-two/level-three">进入三级页面</Link>
			</div>
		);
	}
}

export default LevelTwo;
