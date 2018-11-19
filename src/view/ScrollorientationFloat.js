import React, { Component } from 'react';
import '../common.css';

//2个全局变量
let scrollX = 0;//水平方向滚动的实时距离
let pageW = 0;//水平方向可以滚动的最大距离

class ScrollOrientationFloat extends Component {

	componentWillMount(){
		document.addEventListener("wheel", this.onwheel.bind(this), false);//监听滚轮事件
	}

	componentDidMount(){
		let clientWidth = document.body.clientWidth;
		let availHeight = document.documentElement.clientHeight;
		//todo 设置页面横向宽度 这个5000需要动态获取
		document.getElementById('outerEle').style.width = 5000 + 'px';
		//设置浮动元素宽高
		document.getElementById('fixedEle').style.width = clientWidth + 'px';
		document.getElementById('fixedEle').style.height = availHeight - 15 + 'px';
		//水平方向可以滚动的最大距离
		pageW = 5000 - clientWidth;
		//子元素高度，可以不用设置
		for(var i=0,len=document.getElementById('scrollParent').getElementsByTagName("li").length; i<len; i++){
			document.getElementById('outerEle').getElementsByTagName("li")[i].style.height = availHeight - 15 + 'px';//设置子元素高度 15为横向滚动条高度
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
			<div id="outerEle" style={{position:'relative',zIndex:0}}>
				{/*定位，不随页面滚动的底元素*/}
				<div id='fixedEle' style={{background: '#00bfff',position:'fixed',top:'0',left:'0',zIndex:1,width:'500px',fontSize:'20px'}}><br/><br/><br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/></div>
				{/*顶层可以滚动的区域*/}
				<ul id='scrollParent' style={{position:'relative',zIndex:2}}>
					<li style={{display:'inline-block',width:'1000px',fontSize:'30px',color:'#ffffff'}}>这是第一个元素这是第一个元素</li>
					<li style={{display:'inline-block',width:'1000px',fontSize:'30px',color:'#ffffff'}}>这是第二个元素这是第二个元素</li>
					<li style={{display:'inline-block',width:'1000px',fontSize:'30px',color:'#ffffff'}}>这是第三个元素这是第三个元素</li>
					<li style={{display:'inline-block',width:'1000px',fontSize:'30px',color:'#ffffff'}}>这是第四个元素这是第四个元素</li>
					<li style={{display:'inline-block',width:'1000px',fontSize:'30px',color:'#ffffff'}}>这是第五个元素这是第五个元素</li>
				</ul>
			</div>
		);
	}
}

export default ScrollOrientationFloat;
