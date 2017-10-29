/*
* @Author: 梁飞
* @Date:   2017-10-16 10:33:29
* @Last Modified by:   梁飞
* @Last Modified time: 2017-10-19 22:05:43
*/
$(function(){
	let lis=$('.imglist>li');
	let w=lis.width()
	let now=next=0;
	let t=setInterval(move, 3000);
	let flag=true;
	let b = $('.btnlist>li')
function move(){
	flag=false;
		next++;
		if (next==lis.length) {
			next=0;
		}
	lis.eq(next).css({left:w});
		b.eq(next).css({background:'red'})
		b.eq(now).css({background:'#fff'})
		lis.eq(next).animate({left:0})
		lis.eq(now).animate({left:-w},function(){
			flag=true;
		})
		now=next;
	}
function moveL(){
		flag=false;
		next--;
		if (next<0) {
			next=lis.length-1;
		}
		lis.eq(next).css({left:-w});
		b.eq(next).css({background:'red'})
		b.eq(now).css({background:'#fff'})
		lis.eq(next).animate({left:0})
		lis.eq(now).animate({left:w},function(){
			flag=true;
		})
		now=next;
	}
	$('.zuo').click(function(){
		if(flag==false){return}
		moveL()
	});
	$('.you').click(function(){
		if(flag==false){return}
		move()
	})
	$('.banner').mouseover(function(event) {
		clearInterval(t)
	});
	$('.banner').mouseout(function(event) {
		t=setInterval(move, 3000)
	});
	$('.icon-mianbaoxiedaohangxiaoxian').click(function(){
		$('.caidan').slideDown();
		$('.guanbi').css({display:'block'})
	})
	$('.icon-guanbi').click(function(){
		$('.caidan').slideUp();
		$('.guanbi').css({display:'none'})
	})	
for (let i = 0 ;i<b.length;i++){	
		b[i].onclick =function(){	
			if(now ==i){return}
			b[now].style.background='#fff'			
			b[i].style.background='red';
			if(i>now){
				lis.eq(i).css({left:w});
				lis.eq(i).animate({left:0});
				lis.eq(now).animate({left:-w})
				b[now].style.background='#fff'
				now=next=i;
			}
			else if(i<now){
				lis.eq(i).css({left:-w});
				lis.eq(i).animate({left:0});
				lis.eq(now).animate({left:w})
				b[now].style.background='#fff'
				now=next=i;
			}
			}
		}
})