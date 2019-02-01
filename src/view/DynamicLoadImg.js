import React, { Component } from 'react';
import '../common.css';

//2个全局变量
let scrollX = 0;//水平方向滚动的实时距离
let pageW = 0;//水平方向可以滚动的最大距离
let imgW = 0;//水平方向可以滚动的最大距离

class DynamicLoadImg extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hasAdd: false
		}
	}

	componentWillMount(){
		document.addEventListener("wheel", this.onwheel.bind(this), false);//监听滚轮事件
	}

	componentDidMount(){
		let imgArr = document.getElementsByTagName('img');
		for(var i=0,len=imgArr.length;i<len;i++){
			imgArr[i].addEventListener("load", this.handleImageLoaded.bind(this), false);
			imgArr[i].addEventListener("error", this.handleImageErrored.bind(this), false);
		}
		let clientWidth = document.body.clientWidth;
		let availHeight = document.documentElement.clientHeight;
		//设置浮动元素宽高
		document.getElementById('fixedEle').style.width = clientWidth + 'px';
		document.getElementById('fixedEle').style.height = availHeight + 'px';
		//子元素高度，可以不用设置
		for(var j=0,liLen=document.getElementById('scrollParent').getElementsByTagName("li").length; j<liLen; j++){
			document.getElementById('outerEle').getElementsByTagName("li")[j].style.height = availHeight + 'px';
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

	handleImageLoaded(e){
		let clientWidth = document.body.clientWidth;
		imgW += e.target.width
		//todo 设置页面横向宽度 这个5000需要动态获取
		document.getElementById('outerEle').style.width = 1001 + imgW + 'px';//多了1px作为修订值
		//水平方向可以滚动的最大距离
		pageW = 1001 + imgW - clientWidth;
		// console.log(e.target.width);
	}

	handleImageErrored(){

	}

	render() {
		return (
			<div id="outerEle" style={{position:'relative',zIndex:0}}>
				{/*定位，不随页面滚动的底元素*/}
				<div id='fixedEle' style={{background: '#00bfff',position:'fixed',top:'0',left:'0',zIndex:1,fontSize:'20px'}}><br/><br/><br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/>底元素不随页面滚动<br/></div>
				{/*顶层可以滚动的区域*/}
				<ul id='scrollParent' style={{position:'relative',zIndex:2,fontSize:0}}>
					<li style={{background:'transparent',display:'inline-block',width:'1000px',fontSize:'30px',color:'#ffffff',verticalAlign:'top'}}>第一个元素背景透明</li>
					<li className={'dli-img'}>
						<img
							// onLoad={this.handleImageLoaded.bind(this)}
							// onError={this.handleImageErrored.bind(this)}
							src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542695347241&di=653012830f7ff3b998efbdede7fa6eb9&imgtype=0&src=http%3A%2F%2Fpic.nipic.com%2F2008-03-31%2F2008331112054439_2.jpg" alt=""/>
					</li>
					<li className={'dli-img'}>
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542695347241&di=a1b76df17dbdae45396944e98f4074d0&imgtype=0&src=http%3A%2F%2Fwww.xa.gov.cn%2Fattached%2Fimage%2F20140710%2F20140710172030_618_-1.jpg" alt=""/>
					</li>
					<li className={'dli-img'}>
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542708896174&di=33dc4e7538ae629706ca469cda33a5fd&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150417%2F0008020978852309_b.jpg" alt=""/>
					</li>
					<li className={'dli-img'}>
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542695347239&di=c8887b9810e7daa56036fe68bf0318b8&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150602%2F0008118267054085_b.jpg" alt=""/>
					</li>
				</ul>
			</div>
		);
	}
}

export default DynamicLoadImg;
