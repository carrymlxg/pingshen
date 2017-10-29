/*
* @Author: 梁飞
* @Date:   2017-09-29 15:34:17
* @Last Modified by:   梁飞
* @Last Modified time: 2017-10-22 18:42:50
*/
//属性
//蛇的长度可以写成数组，把对应数组的单元格改变颜色，
//长度，宽度，速度，方向，实物，边界，初始出现位置，
//方法：移动
//加头，去尾：
//心头的坐标等于旧头（x,y）+方向
function Snake(){
	this.snake=['0_0','0_1','0_2'];//坐标,初始粗线的位置
	this.sance =document.querySelector('.sance');//背景
	this.direction=39;//定义初始运动方向
	this.flag={'0_0':true,'0_1':true,'0_2':true};//食物不能掉到蛇身上
 	this.food='';
}
Snake.prototype={
	start:function(){
		this.drawline();//定义背景，即坐标系
		this.drawsnake();
		this.move();
		this.key();
		this.dropFood();
	},
//画线
drawline:function(){
	for(let i=0;i<20;i++){
		for(let j=0;j<20;j++){
			this.sance.innerHTML+=`<li class="block" id="${i}_${j}"></li>`
		}
	}
},
//画蛇
drawsnake:function(){
	this.snake.forEach(element=>{
		document.getElementById(element).classList.add('hot')
		// console.log(document.getElementById(element))
	})
},
//让蛇自己移动
move:function(){
    	/*加头    去尾*/
    	let that=this;
    	let  t=setInterval(function(){
    	let oldt=that.snake[that.snake.length-1];//3//
    	let arr=oldt.split('_');//'0_3'  '03'
    	let newt='';
    	 if(that.direction==37){//左移
              newt=`${arr[0]*1}_${arr[1]*1-1}`
        }else if(that.direction==38){//上
              newt=`${arr[0]*1-1}_${arr[1]*1}`
        }else if(that.direction==39){//右
        	  newt=`${arr[0]*1}_${arr[1]*1+1}`
        }else if(that.direction==40){//下
        	 //左移
              newt=`${arr[0]*1+1}_${arr[1]*1}`
        }
        else{
              return;
        }
        	//判断边界
         let newta=newt.split('_');//因为newt为字符串，需要转化为数组
        if(newta[0]<0 || newta[0]>19||newta[1]<0 || newta[1]>19){
         	clearInterval(t);
         	alert('game over')
                return;   
         }
        //移动
    	that.snake.push(newt);//['0_4']
    	that.flag[newt]=true;
    	let weiba=that.snake.shift();
        //如果喷到尾巴，游戏结束
        if(newt==weiba){
            clearInterval(t);
            alert('game over')
                return;   
        }
        delete that.flag[weiba];
        //吃到食物
         if(newt==that.food){
    		that.snake.unshift(newt)
            that.flag[newt]=true;
    		// 让食物的颜色变回背景色 
            document.getElementById(that.food).style.background='#fff' 
    		// that.draw4
            // snake();
    		that.dropFood();
    	}
    	document.getElementById(weiba).classList.remove('hot')
    	that.drawsnake();
    	}, 300)
    },
//控制方向
key:function(){
    document.onkeydown=function(e){
    let keycode=e.keyCode;
    	if(Math.abs(keycode-this.direction)==2){
    		return;
    	}
    	this.direction=keycode;
    }.bind(this)
},
//投食
dropFood:function(){
    let x=Math.floor(Math.random()*20);
    let y=Math.floor(Math.random()*20);//在坐标内随机选择一个点
    do{
        x=Math.floor(Math.random()*20);//先投一次
    	y=Math.floor(Math.random()*20);
    	}
    while(this.flag[`${x}_${y}`]);//如果投在蛇身上在来一次
    	this.food=`${x}_${y}`;
   
    document.getElementById(this.food).style.background='red';
},
}
// e.wheelDeta 下-120 上 120
// sessionStro
// 必须json格式，加双引号，必须是一个字符串
// Object.keys()返回一个数组，
// element.classList.add/remove/toggle
// bind 改变this的指向，调用时
// call 定义时改变this的指向