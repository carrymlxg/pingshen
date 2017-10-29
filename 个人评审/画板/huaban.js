/*
* @Author: 梁飞
* @Date:   2017-10-10 10:54:17
* @Last Modified by:   梁飞
* @Last Modified time: 2017-10-27 11:09:53
*/
//方法
	//画线 圆 矩形 多边形 多角形 铅笔 文字 
	//橡皮
	//撤销
	//清空
	//裁切
	//新建
	//保存
//属性
	//粗细，颜色，端点，填充，描边 边数
class Palette{
	constructor(canvas,ctx,opacity){
		this.canvas=canvas;
		this.ctx=ctx;
		this.opacity=opacity;
		this.arr=[];
		this.px=this.canvas.width;
		this.py=this.canvas.height;
		this.lineWidth=2;

		this.lineCap='butt';//线帽
		this.temp=null;
		//填充、描边
		this.style='stroke';
		this.fillStyle='#000'
		this.strokeStyle='#000'
	}
	line(){
		this.opacity.onmousedown=function(e){
			let cx=e.offsetX,cy=e.offsetY;
			this.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
					this.ctx.clearRect(0, 0,this.px,this.py);
					if(this.arr.length){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0)}
					this.ctx.beginPath();
					this.ctx.moveTo(cx, cy);
					// this.ctx.setLineDash([3,6])
					this.ctx.lineTo(ox, oy);
					this.ctx.stroke();
					this.ctx.fillStyle=this.fillStyle;
					this.ctx.strokeStyle=this.strokeStyle;
			}.bind(this)
			this.opacity.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.px,this.py))
				this.opacity.onmousemove=null;
				this.opacity.onmouseup=null;
			}.bind(this)
		}.bind(this)
	};
	juxing(){
		this.opacity.onmousedown=function(e){
			let cx=e.offsetX,cy=e.offsetY;
			this.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				this.ctx.clearRect(0, 0,this.px,this.py);
					if(this.arr.length){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0)}
					this.ctx.beginPath();
					this.ctx.moveTo(cx, cy)
					this.ctx.lineTo(ox, cy)
					this.ctx.lineTo(ox,oy)
					this.ctx.lineTo(cx, oy)
					this.ctx.lineTo(cx, cy)
					
					// this.ctx.fillRect(cx, cy, ox-cx, oy-cy)
					this.ctx.fillStyle=this.fillStyle;
					this.ctx.strokeStyle=this.strokeStyle;
					this.ctx[this.style]();
			}.bind(this)
			// 
			this.opacity.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.px,this.py))
				this.opacity.onmousemove=null;
				this.opacity.onmouseup=null;
			}.bind(this)
		}.bind(this)
	};
	yuan(){
		this.opacity.onmousedown=function(e){
			let cx=e.offsetX,cy=e.offsetY;
			this.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				let r=Math.sqrt(Math.pow((ox-cx),2)+Math.pow((oy-cy),2));
				this.ctx.clearRect(0, 0,this.px,this.py);
					if(this.arr.length){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0)}
					this.ctx.beginPath();
					this.ctx.arc(cx, cy, r, 0, Math.PI*2)
					this.ctx.closePath();
					this.ctx[this.style]();
					this.ctx.fillStyle=this.fillStyle;
					this.ctx.strokeStyle=this.strokeStyle;
			}.bind(this)
			// 
			this.opacity.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.px,this.py))
				this.opacity.onmousemove=null;
				this.opacity.onmouseup=null;
			}.bind(this)
		}.bind(this)
	};
	duobianxing(n){
		this.opacity.onmousedown=function(e){
			let cx=e.offsetX,cy=e.offsetY;
			this.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				let r=Math.sqrt(Math.pow((ox-cx),2)+Math.pow((oy-cy),2));
				this.ctx.clearRect(0, 0,this.px,this.py);
					if(this.arr.length){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0)}
					this.ctx.beginPath();
					for(let i=0;i<=n;i++){
						let x= cx+r*Math.cos(Math.PI*2/n*i),
							y=cy+r*Math.sin(Math.PI*2/n*i)
								this.ctx.lineTo(x, y);
								}
					this.ctx.closePath();
					this.ctx[this.style]();
					this.ctx.fillStyle=this.fillStyle;
					this.ctx.strokeStyle=this.strokeStyle;
			}.bind(this)
			// 
			this.opacity.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.px,this.py))
				this.opacity.onmousemove=null;
				this.opacity.onmouseup=null;
			}.bind(this)
		}.bind(this)
	};
	duojiaoxing(n){
		this.opacity.onmousedown=function(e){
			let cx=e.offsetX,cy=e.offsetY;
			this.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				let r=Math.sqrt(Math.pow((ox-cx),2)+Math.pow((oy-cy),2));
				this.ctx.clearRect(0, 0,this.px,this.py);
					if(this.arr.length){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0)}
					this.ctx.beginPath();
					let rad= Math.PI/n;
			for(let i=0;i<=2*n;i++){
			let r1;
				r1=i%2==0?r:r/2
			let x=cx+r1*Math.cos(rad*i),
				y=cy+r1*Math.sin(rad*i)
				this.ctx.lineTo(x, y);}
					this.ctx.closePath();
					this.ctx[this.style]();
					this.ctx.fillStyle=this.fillStyle;
					this.ctx.strokeStyle=this.strokeStyle;
			}.bind(this)
			// 
			this.opacity.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.px,this.py))
				this.opacity.onmousemove=null;
				this.opacity.onmouseup=null;
			}.bind(this)
		}.bind(this)
	};
	qianbi(){
			this.opacity.onmousedown=function(e){
			let cx=e.offsetX,cy=e.offsetY;
			this.ctx.beginPath();
					this.ctx.moveTo(cx, cy);
			this.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
					if(this.arr.length){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0)}
					this.ctx.lineTo(ox, oy);
					this.ctx.stroke();
					this.ctx.strokeStyle=this.strokeStyle;
					}.bind(this)
			this.opacity.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.px,this.py))
				this.opacity.onmousemove=null;
				this.opacity.onmouseup=null;
			}.bind(this)
		}.bind(this)
	};
	xiangpi(){
			this.opacity.onmousedown=function(e){
				e.preventDefault();
			let xiangpi=document.querySelector('.xiangpi')
			let fw= parseInt(getComputedStyle(xiangpi,null).width),
				fh= parseInt(getComputedStyle(xiangpi,null).height),
				sw= parseInt(getComputedStyle(this.opacity,null).width),
				sh= parseInt(getComputedStyle(this.opacity,null).height)
			xiangpi.style.display='block';
			this.opacity.onmousemove=function(e){
				let  ow = e.offsetX-fw/2, oh =e.offsetY-fh/2;
				if(ow>sw-fw){
					ow=sw-fw
					}
				 	if(ow<=0){
				 		ow=0;
				 	}
				 	if(oh>sh-fh){
				 		oh=sh-fh
				 	}
				 	if(oh<=0){
				 		oh=0;
				 	}
	 	 		xiangpi.style.top=`${oh}px`
	 			xiangpi.style.left=`${ow}px`
	 			this.ctx.clearRect(ow, oh, fw, fh)}.bind(this)
	 			this.opacity.onmouseup=function(){
	 			this.arr.push(this.ctx.getImageData(0,0,this.px,this.py))
	 			xiangpi.style.display='none';
	 			this.opacity.onmousemove=null;
	 		}.bind(this)
	 	}.bind(this)
	};
	wenzi(){
		let that = this;
		let lefts;
		let tops;
		this.opacity.onmousedown = function(e){
			that.opacity.onmousedown = null;
				let ox = e.offsetX, oy = e.offsetY;
				let divs = document.createElement('div');
				divs.contentEditable = true;
				divs.style.cssText = `
				    min-width:100px;
				    max-width:200px;
				    min-height:50px;
				    line-height:50px;
				    font-size:36px;
				    border:1px dashed #bababa;
				    position:absolute;
				    left:${ox}px;
				    top:${oy}px;
				    cursor:move;
				    outline:none;
				`
				this.appendChild(divs);
				
				divs.onmousedown = function(e){
					let left = divs.offsetLeft;
					let top = divs.offsetTop;
					let cx = e.clientX,cy = e.clientY;
					that.opacity.onmousemove = function(e){
						let ox = e.clientX, oy = e.clientY;
						lefts = left+ox-cx , tops = top+oy-cy;
						divs.style.left = lefts+'px';
						divs.style.top = tops+'px';
					}
					divs.onmouseup = function(){
						that.opacity.onmousemove = null;
						this.onmouseup = null;
						
					}
				}
				
				divs.onblur = function(){
					let value = this.innerText;
					that.opacity.removeChild(divs);
					that.ctx.font = '20px serif';
					that.ctx.textAlign = 'center';
					that.ctx.textBaseline = 'middle';
					that.ctx.fillText(value,lefts,tops);
				}
		}
	};
	caijie(obj){
		let that=this;
		let w,h,minX,minY;
		this.opacity.onmousedown=function(e){
			e.preventDefault();
			obj.style.display='block';
			let cx=e.offsetX,cy=e.offsetY;
			obj.style.width=0;
			obj.style.height=0;
			that.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				w=Math.abs(ox-cx);
				h=Math.abs(oy-cy);
				minX= ox>=cx ? cx:ox;
				minY= oy>=cy ? cy:oy;
				obj.style.left=`${minX}px`;
				obj.style.top=`${minY}px`;
				obj.style.width=`${w}px`;
				obj.style.height=`${h}px`;
			}
			that.opacity.onmouseup=function(){
				that.temp=that.ctx.getImageData(minX, minY, w, h);
				that.ctx.clearRect(minX, minY,w, h);
				that.arr.push(that.ctx.getImageData(0, 0,that.px, that.py));
				that.ctx.putImageData(that.temp,minX, minY);
				that.opacity.onmousemove=null;
				that.opacity.onmouseup=null;
				that.drag(minX,minY,obj);
			}
		}
	}
	drag(x,y,obj){
		let that=this;
		this.opacity.onmousedown=function(e){
			e.preventDefault();
			let cx=e.offsetX,cy=e.offsetY;
			that.opacity.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				let lefts=x+ox-cx;
				let tops=y+oy-cy;
				obj.style.left=`${lefts}px`;
				obj.style.top=`${tops}px`;
				that.ctx.clearRect(0,0,that.px, that.py);
				if(that.arr.length){
					that.ctx.putImageData(that.arr[that.arr.length-1],0,0); 
				}
				that.ctx.putImageData(that.temp,lefts,tops);
			}
			that.opacity.onmouseup=function(){
				that.arr.push(that.ctx.getImageData(0, 0,that.px, that.py ));
				obj.style.display='none';
				that.temp=null;
				that.opacity.onmousemove=null;
			 	that.opacity.onmouseup=null;
			 	that.opacity.onmousedown=null;
			}
		}
	};
	clearAll(){
		this.arr=[];
		this.ctx.clearRect(0, 0, this.px,this.py);
	};
	dipian(e){
		e.preventDefault();
		let images =this.ctx.getImageData(0, 0, this.px, this.py)
		for(let i=0;i<images.data.length;i+=4){
			images.data[i]=255-images.data[i];
			images.data[i+1]=255-images.data[i+1];
			images.data[i+2]=255-images.data[i+2];
		}
		this.ctx.putImageData(images, 0,0)
	}
	chexiao(){
		this.arr.pop();
			this.ctx.clearRect(0, 0, this.px,this.py);
			if(!this.arr.length){return}
			this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
	}
}