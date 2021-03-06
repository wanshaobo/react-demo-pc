import React, { Component } from 'react';
import '../common.css';

/*
写default props有两种方法
...
static defaultProps = {
    name:　...
}

//2 在组件外部

Hello.defaultProps = {
    name: ...
}
*/

class WaterFullInfinite extends Component {

	constructor(props) {
		super(props);

		this.imgIndex = 2;

		this.state = {
			imgUrl: [
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542695347241&di=653012830f7ff3b998efbdede7fa6eb9&imgtype=0&src=http%3A%2F%2Fpic.nipic.com%2F2008-03-31%2F2008331112054439_2.jpg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542695347241&di=a1b76df17dbdae45396944e98f4074d0&imgtype=0&src=http%3A%2F%2Fwww.xa.gov.cn%2Fattached%2Fimage%2F20140710%2F20140710172030_618_-1.jpg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542708896174&di=33dc4e7538ae629706ca469cda33a5fd&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150417%2F0008020978852309_b.jpg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542695347239&di=c8887b9810e7daa56036fe68bf0318b8&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150602%2F0008118267054085_b.jpg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542708896174&di=46f1f015fb8194cac5907e6d6953b87d&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150617%2F1155117463997694_b.jpg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542708896174&di=c06e041a1a25c1b2f10adf2d0aef99cb&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150610%2F0006019059922828_b.jpg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542708896174&di=69a699c512c8df159fa85add8a5bb9f8&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F131120%2F3-131120221U4.jpg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542708896174&di=8c36644d17a16489e6dc95b37e1bc83e&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1712%2F151-1G22P94207.jpg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542708896173&di=9387acb8d8809c13549c55971dbf15a5&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1712%2F151-1G206105F2.jpg",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542708896173&di=ca93f89ae570683108ed135953493a35&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F92%2F42%2F15924270-28f6f19b44af63d96531a2a15866f93c-0.jpg"
			]
		}
	}

	componentWillMount(){

		// document.addEventListener("wheel", this.onwheel.bind(this), false);//监听滚轮事件
		window.addEventListener("scroll", this.onscroll.bind(this), false);//监听滚动条事件
	}

	componentDidMount(){
		let imgArr = document.getElementsByTagName('img');
		for(var i=0,len=imgArr.length;i<len;i++){
			imgArr[i].addEventListener("load", this.handleImageLoaded.bind(this), false);
			imgArr[i].addEventListener("error", this.handleImageErrored.bind(this), false);
		}
	}

	componentWillUnmount(){
		window.onscroll = null
		// console.log(3);
		// document.removeEventListener("wheel", this.onwheel.bind(this), false);//销毁事件
		window.removeEventListener("scroll", this.onscroll, false);//销毁事件
	}

	// onwheel(e){
	// 	console.log(e.deltaY);
	// }

	onscroll(){
		// console.log(2);
		let scrollTop = 0;//纵向滚动条的位置
		if(document.documentElement && document.documentElement.scrollTop) {
			scrollTop = document.documentElement.scrollTop;//chrome
		} else if(document.body) {
			scrollTop = document.body.scrollTop;
		}
		let documentH = document.body.clientHeight;//页面总高度
		let availHeight = document.documentElement.clientHeight;//视口高度
		if(availHeight + scrollTop >= documentH){
			//to bottom
			this.imgIndex++
			if(this.imgIndex >= 10){
				this.imgIndex = 0
			}
			let img = document.createElement('img');
			img.src = this.state.imgUrl[this.imgIndex]
			img.onload = this.handleImageLoaded.bind(this)
			let li = document.createElement('li')
			li.className = 'wf-img';
			li.appendChild(img);
			if(document.getElementById('img-box')){//点击浏览器返回键，页面滚动1px，导致拿不到dom
				document.getElementById('img-box').appendChild(li);
			}
		}
	}

	handleImageLoaded(e){
		// console.log(e.target.height);
	}

	handleImageErrored(){
		throw Error('img load error')
	}

	render() {
		return (
			<div>
				<ul id='img-box' style={{fontSize:0}}>
					<li className={'wf-img'}><img src={this.state.imgUrl[0]} alt=""/></li>
					<li className={'wf-img'}><img src={this.state.imgUrl[1]} alt=""/></li>
					<li className={'wf-img'}><img src={this.state.imgUrl[2]} alt=""/></li>
				</ul>
			</div>
		);
	}
}

export default WaterFullInfinite;
