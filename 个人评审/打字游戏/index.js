/*
* @Author: Administrator
* @Date:   2017-09-28 14:30:12
* @Last Modified by:   梁飞
* @Last Modified time: 2017-10-27 13:43:41
*/
<!-- //属性：哪些字母、个数、速度、位置、生命、分数
     //方法：产生字符、下落、消除、重新开始、下一关 去重 （重复 重叠） -->
 
function Game(){
  //创建26个字母的数组，然后在数组里随机的选5个；
	this.charArr=[
    ['Q','img/q.gif'],
    ['W','img/w.gif'],
    ['E','img/e.gif'],
    ['R','img/r.gif'],
    ['T','img/t.gif'],
    ['Y','img/y.gif'],
    ['U','img/u.gif'],
    ['I','img/i.gif'],
    ['O','img/o.gif'],
    ['P','img/p.gif'],
    ['A','img/a.gif'],
    ['S','img/s.gif'],
    ['D','img/d.gif'],
    ['F','img/f.gif'],
    ['G','img/g.gif'],
    ['H','img/h.gif'],
    ['J','img/j.gif'],
    ['K','img/k.gif'],
    ['L','img/l.gif'],
    ['Z','img/z.gif'],
    ['X','img/x.gif'],
    ['C','img/c.gif'],
    ['V','img/v.gif'],
    ['B','img/b.gif'],
    ['N','img/n.gif'],
    ['M','img/m.gif']
  ];
    this.current=[];//页面元素
    this.number=5;//初始生成元素个数
    this.speed=10;//定义初始速度
    this.leftArr=[];//这个素组用来储存生成的元素的位置，或者说左坐标
    this.gk=1;
    this.score=0;
    this.words=[];//这个数组用来储存生成的文字，用于下面的查重
    this.life=document.querySelector('.life>span').innerText;
}
Game.prototype={
	start:function(){
     this.getchars();
     this.drop();
     this.key();
     this.life=5;
		let live=document.querySelector('.life>span');//获取生命值；
        live.innerText=this.life;
	},
  //每次产生一个字母，
	getchars:function(){
		for(let i=0;i<this.number;i++){
			this.getchar();
		}
	},
  //检查位置是否重叠
	checkleft:function(lefts){
		let flag=this.leftArr.some(function(value){
      //some是数组的一个方法
			return Math.abs(lefts-value)<80;
		})
		return flag;
	},
  //检查文字是否重复
	checkrepeat:function(word){
        let flag=this.words.some(function(value){
			return value==word;
		})
		return flag;
	},

	getchar:function(){
		let num=Math.floor(Math.random()*this.charArr.length);
		let divs=document.createElement('div');
		let word;
		do{
			 num=Math.floor(Math.random()*this.charArr.length);
			 word=this.charArr[num][0];

		}while(this.checkrepeat(word))

		divs.innerText=word;
        divs.classList.add('char');
        let tops=Math.random()*100+100;
        let lefts=(innerWidth-400)*Math.random()+200;
        while(this.checkleft(lefts)){
             lefts=(innerWidth-400)*Math.random()+200;
        }
        // divs.style.top=tops+'px';
        // divs.style.left=lefts+'px';
        divs.style.cssText=`
        top:${tops}px;left:${lefts}px;
        background-image:url(${this.charArr[num][1]});`;
        document.body.appendChild(divs);
        this.current.push(divs);
        this.leftArr.push(lefts);
        this.words.push(word);
        },
//让文字下落
	drop:function(){
		let that=this;
        this.t=setInterval(function(){
           for(let i=0;i<that.current.length;i++){
           	let tops=that.current[i].offsetTop+that.speed;
           	that.current[i].style.top=tops+'px';
           	if(tops>=innerHeight-56){
           		document.body.removeChild(that.current[i]);
           		that.current.splice(i,1);
           		that.leftArr.splice(i,1);
           		that.words.splice(i,1);
           		that.life--;
           		let live=document.querySelector('.life>span');
           		live.innerText=that.life;
           		if(that.life==0){
           			alert('游戏结束');
           			let confirm=window.confirm('重新开始吗？');
           			if(confirm){
           				that.restart();
           				return;
           			}else{
           				that.end();
           				return;
           			}
           		}
           		that.getchar();
           	}
           }
        },300)
	},
//判断是否输入，输入正确则消除，并新生成一个
	key:function(){
		let that=this;
      document.onkeydown=function(e){
      	for(let i=0;i<that.current.length;i++){
      	// if(e.keyCode==divs.innerText.charCodeAt())
      	if(String.fromCharCode(e.keyCode)==that.current[i].innerText){
      		that.score+=1;
      		document.body.removeChild(that.current[i]);
           		that.current.splice(i,1);
           		that.leftArr.splice(i,1);
           		that.words.splice(i,1);
           		that.getchar();
	            let fen=document.querySelector('.fen>span');
    	        fen.innerHTML=that.score;
           		if(that.score==10){
                console.log(that.score);
           			// alert('恭喜您，进入下一关！！')
           			that.next();
           		}
      	}

      	}
      }
	},
//下一关
	next:function(){
		clearInterval(this.t);
		for(let i=0;i<this.current.length;i++){
			document.body.removeChild(this.current[i]);
		}
    //下一关需要重新加载，所以要先清空
		this.current.length=0;
		this.leftArr.length=0;
		this.words.length=0;
		if(this.number>=8){
           this.speed+=5;
		}else{
			this.number++;
		}
		this.score=0;
		this.gk+=1;
		this.start();
		this.life=5;
		let live=document.querySelector('.life>span');
        live.innerText=this.life;
	 let guan=document.querySelector('.guan>span');
	 let fen=document.querySelector('.fen>span');
		guan.innerHTML=this.gk;
    	fen.innerHTML=this.score;
	},
//重新开始
	restart:function(){
		clearInterval(this.t);
		for(let i=0;i<this.current.length;i++){
			document.body.removeChild(this.current[i]);
		}
    this.speed=10;
		this.current.length=0;
		this.leftArr.length=0;
		this.words.length=0;
		this.number=5;
		this.score=0;
		this.gk=1;
		this.life=5;
		let live=document.querySelector('.life>span');
           		live.innerText=this.life;
		this.start();
			let guan=document.querySelector('.guan>span');
	let fen=document.querySelector('.fen>span');
	    guan.innerHTML=this.gk;
    	fen.innerHTML=this.score;
	},
//结束
	end:function(){
     clearInterval(this.t);
		for(let i=0;i<this.current.length;i++){
			document.body.removeChild(this.current[i]);
		}
		this.current.length=0;
		this.leftArr.length=0;
		this.words.length=0;
		this.score=0;
		this.number=5;
		this.gk=1;
		let live=document.querySelector('.life>span');
        live.innerText=this.life;
		let guan=document.querySelector('.guan>span');
	    let fen=document.querySelector('.fen>span');
		guan.innerHTML=this.gk;
    	fen.innerHTML=this.score;
	}
}


window.onload=function(){
  let game=new Game();
	let kaishi=document.querySelector('.kaishi');
	let jieshu=document.querySelector('.jieshu');
	let chongxin=document.querySelector('.chongxin');
	let guan=document.querySelector('.guan>span');
	let fen=document.querySelector('.fen>span');
  let flag1={};
    kaishi.onclick=function(){
        game.end();
        game.start();
        //此时点击相当于重新开始
    }
    jieshu.onclick=function(){
    	game.end();
    	// guan.innerHTML=game.gk;
    	// fen.innerHTML=game.score;
    }
    chongxin.onclick=function(){
    	game.restart();
    }
    
}






// class Game{
// 	constructor(){
// 		this.charArr=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
//         this.current=[];//页面元素
//         this.number=5;//个数
//         this.current=[];
//         this.speed=10;
// 	}
// 	start(){
// 		this.getchars();
// 		this.drop();
// 		this.key();
// 	}
// 	getchars(){
// 		for(let i=0;i<this.number;i++){
// 			this.getchar();
// 		}
// 	}
// 	getchar(){
// 		let divs=document.createElement('div');
// 		divs.classList.add('char');
// 		let num=Math.floor(Math.random()*this.charArr.length);
// 		divs.innerText=this.charArr[num];
// 		let tops=Math.random()*100;
// 		let lefts=(innerWidth-400)*Math.random()+200;
// 		divs.style.top=tops+'px';
// 		divs.style.left=lefts+'px';
// 		document.body.appendChild(divs);
// 		this.current.push(divs);
// 	}
// 	drop(){
// 		let that=this;
// 		setInterval(function(){
//          for(let i=0;i<that.current.length;i++){
//          	let tops=that.current[i].offsetTop+that.speed;
//          	that.current[i].style.top=tops+'px';
//              if(tops>innerHeight){
//              	document.body.removeChild(that.current[i]);
//              	that.current.splice(i,1);
//              	that.getchar();
//              }
//          }
// 		},300)
// 	}
// 	key(){
// 		let that=this;
// 		document.onkeydown=function(e){
// 			for(let i=0;i<that.current.length;i++){
// 				console.log(e.keyCode);
// 				if(e.keyCode==that.current[i].innerText.charCodeAt()){
// 				document.body.removeChild(that.current[i]);
//              	that.current.splice(i,1);
//              	that.getchar();
// 				}
// 			}
// 		}
// 	}
// }



