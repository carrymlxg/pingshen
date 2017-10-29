/*
* @Author: 梁飞
* @Date:   2017-10-17 16:52:16
* @Last Modified by:   梁飞
* @Last Modified time: 2017-10-28 12:28:36
*/
$(function(){
	let color =["c","d","h","s"];
	let poke=[];
	let flag={};
	// while(poke.length<52){
	// let huase=color[Math.floor(Math.random()*color.length)];
	// let num=Math.floor(Math.random()*13+1);
	// if(!flag[`${huase}_${num}`]){
	// poke.push({huase,num});
	// flag[`${huase}_${num}`]=true;
	//     }
	// }
	for(let i=0;i<52;i++){
		let huase=color[Math.floor(Math.random()*color.length)];
		let num=Math.floor(Math.random()*13+1);
		while(flag[`${huase}_${num}`]){
			huase=color[Math.floor(Math.random()*color.length)];
			num=Math.floor(Math.random()*13+1);
		}
		poke.push({huase,num});
		flag[`${huase}_${num}`]=true;
	}
	let index=0;
	for(let i=0;i<7;i++){
		for(let j=0;j<=i;j++){
			let left=350-50*i+100*j;
			let top=60*i;
			$('<div>').addClass('poke box')
			.attr({id: `${i}_${j}`})
			.attr('num',`${poke[index].num}`)
			.css('background-image',`url(img/${poke[index].huase}${poke[index].num}.jpg)`)
			.appendTo('.table').delay(index*40).animate({left,top});
			index++;
		}
	}
	for(;index<poke.length;index++){
		$('<div>').addClass('poke left')
			.attr({id: `${-2}_${-2}`})
			.attr('num',`${poke[index].num}`)
			.css('background-image',`url(img/${poke[index].huase}${poke[index].num}.jpg)`)
			.appendTo('.table').delay(index*10).animate({left:55,top:530});
	}
	let first=null;
	$('.table').on('click','.poke',function(e){
		let element = e.target;
		let ids =$(element).attr('id').split('_');
		//如果下一层有牌，上一层的不允许被抬起
		let ele1=`#${ids[0]*1+1}_${ids[1]*1}`,
			ele2=`#${ids[0]*1+1}_${ids[1]*1+1}`;
			// console.log($(ele1))
		if($(ele1).length||$(ele2).length){
			return;
		}
		//点一次抬起，再点一次落下
		$(element).toggleClass('faguang');
		if($(element).hasClass('faguang')){
			$(element).animate({top:'-=10'})
		}
		else{
			$(element).animate({top:'+=10'})
		}
		if(!first){
			first=e.target;
		}
		else{
			 if($(first).attr('num')*1+$(element).attr('num')*1==14){
			 	$('.faguang').animate({top:'0',left:'600'},function(){
			 		$(this).remove();
			 	})
			 }  
			 else{
			 	$('.faguang').animate({top:'+=10'},function(){
			 		$(this).removeClass('faguang')
			 	})
			 }	
			 first=null;
		}

	})
	let i=0;
	$('.R').on('mousedown',i,function(){
		i++;
		if($('.left').hasClass('faguang')){
			$('.left').removeClass('faguang')
		}
		$('.left').last().animate({top:530,left:600}).addClass('right').removeClass('left')
		.css({zIndex:i}).attr({id: `${-3}_${-3}`})
		if($('.right').hasClass('faguang')){
			$('.faguang').removeClass('faguang').animate({top:530})
		}	
	})

	
	$('.L').on('click',i,function(){
		if($('.right').hasClass('faguang')){
			$('.right').removeClass('faguang')
		}
		$('.right').first().animate({top:530,left:55}).addClass('left').removeClass('right')
		.css({zIndex:i})
		if($('.left').hasClass('faguang')){
			$('.faguang').animate({top:530}).removeClass('faguang')
		}
	})

})
