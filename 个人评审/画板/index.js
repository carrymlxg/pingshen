/*
* @Author: 梁飞
* @Date:   2017-10-10 11:38:02
* @Last Modified by:   梁飞
* @Last Modified time: 2017-10-12 14:33:12
*/
window.onload=function(){
	let line=document.querySelector('#line')
	let qianbi=document.querySelector('#qianbi')
	let juxing=document.querySelector('#juxing')
	let chexiao=document.querySelector('#chexiao')
	let yuan=document.querySelector('#yuan')
	let duobianxing=document.querySelector('#duobianxing')
	let duojiaoxing=document.querySelector('#duojiaoxing')
	let xiangpi=document.querySelector('#xiangpi')
	let tianchong=document.querySelector('#tianchong')
	let miaobian=document.querySelector('#miaobian')
	let cf=document.querySelector('#tianchongse>input')
	let cs=document.querySelector('#miaobianse>input')
	let wenzi=document.querySelector('#wenzi')
	let jieqie=document.querySelector('#caiqie')
	let save=document.querySelector('.save')
	let clearAll=document.querySelector('.clearAll')
	let dipian=document.querySelector('.dipian')
	let jieqieobj=document.querySelector('.caiqie')
	let canvas=document.querySelector('canvas')
	let ctx=canvas.getContext("2d");
	let opacity=document.querySelector('.opacity')

	let pal =new Palette(canvas,ctx,opacity);
	// pal.line();//默认调用一次
	
	tianchong.onclick=function(){
		pal.style="fill";
	}
	miaobian.onclick=function(){
		pal.style="stroke";
	}
	
	cf.onclick=function(){
			cf.onblur=function(){
				pal.fillStyle=cf.value;
			}
		}
	cs.onclick=function(){
			cs.onblur=function(){
				pal.strokeStyle=cs.value;
			}
		}
	line.onclick=function(){	
		pal.line();
	};
	qianbi.onclick=function(){	
		pal.qianbi();
	};
	juxing.onclick=function(){
		pal.juxing();
	};
	chexiao.onclick=function(){
		pal.chexiao();
	};
	yuan.onclick=function(){
		pal.yuan();
	}
	duobianxing.onclick=function(){
		let num=prompt('请输入',5)
		pal.duobianxing(num);
	}
	duojiaoxing.onclick=function(){
		let num=prompt('请输入',5)
		pal.duojiaoxing(num);
	}
	xiangpi.onclick=function(){	
		pal.xiangpi();
	};
	wenzi.onclick=function(){
		pal.wenzi();
	}
	jieqie.onclick=function(){
		pal.caijie(jieqieobj);
	}
	// line.onclick();//默认调用一次
	save.onclick=function(){
	let data=canvas.toDataURL('images/jpg')
	save.href=data
	save.download='tu.jpg'}
	clearAll.onclick=function(){
		pal.clearAll()
	}
	dipian.onclick=function(){
		pal.dipian();
	}
}