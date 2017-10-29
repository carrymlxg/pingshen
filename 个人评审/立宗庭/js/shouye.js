/*
* @Author: 梁飞
* @Date:   2017-10-06 17:22:01
* @Last Modified by:   梁飞
* @Last Modified time: 2017-10-11 11:47:07
*/
window.onload=function(){
	let banner=document.querySelector('.banner')
	let imgli=document.querySelectorAll('.banner>.imglist>li');
	let imglist= document.querySelector('.banner>.imglist');
	let b = document.querySelectorAll('.btnlist>li')
	let next =0;
	let now = 0;
	let flag=true;
	let zuo =document.querySelector('.bashou .icon-zuo');
	let you =document.querySelector('.bashou .icon-you');
	let caidan=document.querySelector('.icon-mianbaoxiedaohangxiaoxian')
	let yincang=document.querySelector('.caidan')
	let guanbibox=document.querySelector('.guanbi')
	let guanbi=document.querySelector('.icon-guanbi')
	//轮播图自动轮播效果
	let t = setInterval(move, 5000);
		function move (){
		next++;
		if (next==imgli.length) {
			next=0;
		}	
		let imgw = parseInt(getComputedStyle(imglist,null).width);
		imgli[next].style.left= imgw+'px'
		animate(imgli[now],{left:-imgw})
		b[now].style.background='#fff'
		animate(imgli[next],{left:0},function(){
			flag=true;
		})
		b[next].style.background='red'	
		now=next;
	}
	function moveL(){
		next--;
		if (next<0) {
			next=imgli.length-1;
		}
		let imgw = parseInt(getComputedStyle(imglist,null).width);
		imgli[next].style.left= -imgw+'px'
		animate(imgli[now],{left:imgw})
		b[now].style.background='#fff'
		animate(imgli[next],{left:0},function(){
			flag=true;
		})
		b[next].style.background='red'	
		now=next;
	}
	you.onclick =function(){
		if(!flag ){
			return;
		}
		flag = false;
		move()		
	}
	zuo.onclick =function(){
		if(!flag ){
			return;
		}
		flag = false;
		moveL()		
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t =setInterval(move,5000);
	}
	for (let i = 0 ;i<b.length;i++){	
		b[i].onclick =function(){	
			if(now ==i){return}
			b[now].style.background='#fff'			
			b[i].style.background='red';
			if(i>now){
					let imgw = parseInt(getComputedStyle(imglist,null).width);
					imgli[i].style.left= imgw+'px'
					animate(imgli[now],{left:-imgw})
					b[now].style.background='#fff'
					animate(imgli[i],{left:0})
					now= next=i;
			}
			else if(i<now){
				let imgw = parseInt(getComputedStyle(imglist,null).width);
			imgli[i].style.left= -imgw+'px'
			animate(imgli[now],{left:imgw})
			b[now].style.background='#fff'
			animate(imgli[i],{left:0})
			now= next=i;}
			}
		}
	caidan.onclick=function(){
		yincang.style.display='block';
		guanbibox.style.display='block';
	}
	guanbi.onclick=function(){
		yincang.style.display='none';
		guanbibox.style.display='none';
	}
}