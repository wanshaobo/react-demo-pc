import React, { Component } from 'react';
import '../common.css';
import App from "../App";
// import $ from 'jquery';

//2个全局变量
let scrollX = 0;//水平方向滚动的实时距离
let pageW = 0;//水平方向可以滚动的最大距离

class ScrollOrientation extends Component {

	// static defaultProps = {
		//option: null//read only
	// }

	componentWillMount(){
		console.log('ScrollOrientation.js');
		document.addEventListener("wheel", this.onwheel.bind(this), false);//监听滚轮事件
	}

	componentDidMount(){
		let clientWidth = document.body.clientWidth;//可视区域宽度 不包括纵向滚动条的宽度
		let availHeight = document.documentElement.clientHeight;//window.innerHeight 可视区域高度 不包括纵向滚动条的宽度
		let childLength = document.getElementById('parent').childNodes.length;//子元素个数
		pageW = clientWidth * (childLength - 1);
		document.getElementById('parent').style.width = (clientWidth * childLength) + 'px';//设置父元素宽度
		for(var i=0,len=document.getElementById('parent').getElementsByTagName("li").length;i<len;i++){//document.getElementById('parent').childNodes
			document.getElementById('parent').getElementsByTagName("li")[i].style.width = clientWidth + 'px';//设置子元素宽度
			document.getElementById('parent').getElementsByTagName("li")[i].style.height = availHeight - 15 + 'px';//设置子元素高度 15为横向滚动条高度
		}
	}

	componentWillUnmount(){
		document.removeEventListener("wheel", this.onwheel.bind(this));//销毁监听事件
	}

	onwheel(e){
		e.preventDefault();//阻止默认事件 页面纵向滚动
		scrollX += e.deltaY;//管轮每次滚动的距离
		if(scrollX <= 0){
			scrollX = 0;//滚到页面最左边了
		}
		if(scrollX >= pageW){
			scrollX = pageW;//滚到页面最右边了
		}
		window.scrollTo(scrollX, 0);//js控制页面滚动效果
	}

	render() {
		return (
			<div className="App" style={{textAlign:'center'}}>
				<ul id="parent" className="App-header" style={{listStyle:'none',color:'#ffffff',fontSize:'200px'}}>
					<li className='child' style={{background: '#ff8000', display:'inline-block'}}>1</li>
					<li className='child' style={{background: '#ffbf00', display:'inline-block'}}>2</li>
					<li className='child' style={{background: '#80ff00', display:'inline-block'}}>3</li>
					<li className='child' style={{background: '#00bfff', display:'inline-block'}}>4</li>
					<li className='child' style={{background: '#ff00bf', display:'inline-block'}}>5</li>
				</ul>
			</div>
		);
	}
}

ScrollOrientation.defaultProps = {
	//option: null//read only
}

export default ScrollOrientation;
