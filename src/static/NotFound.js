import React, { Component } from 'react';
import '../common.css';

class NotFound extends Component {

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
			<div style={Style.text}>404</div>
		);
	}
}

const Style = {
	text:{
		color:'#ff6700',
		fontSize: '200px',
		position:'absolute',
		width:'100%',
		height:'100%',
		textAlign:'center'
	}
}

export default NotFound;
