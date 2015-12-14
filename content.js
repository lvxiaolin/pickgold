Con = function() {
	
	var speed = 400;//初始下落速度
	
	var append = 1000;//初始出现速度
	
	var banSpeed = 200;
	
	var leve = 0;//当前速度的执行次数
	
	var run;
	
	var runTurn;
	
	var score = 0;
	
	var ban = 6;//承接板水平位置  1----11之间
	
	var row = 25;
	
	var col = 13;
	
	
	
	var showBan = function(){
		for(var i=0;i<col; i++){
			var html = "&nbsp;";
			if(i>=ban-1&&i<=ban+1){
				html = "板";
			}
			document.getElementById("td_"+(row-1)+"_"+i).innerHTML = html;
			
		}
		
	}
	
	var setscore = function(){
		document.getElementById("score").innerHTML = score;
	}
	
	var create = function(){
		var model = new Food(speed);
		//加速机制
		leve++;
		if(leve>5&&append>300){
			leve = 0
			append = append-50;
			speed = speed-20;
			pause();
			begin();
		}
		
	}
	
	var turn = function(num){
		if(num==0){
			return false;
		}else{
			ban = ban+num;
			if(ban>11||ban<1){
				ban = ban-num;
				return false
			}
			showBan();
		}
		
	}


	var begin = function(){
		showBan();
		run = setInterval(create, append);
		//create();
	}
	
	var pause = function(){
		clearInterval(run);
	}
	
	var end = function(){
		clearInterval(run);
		window.game.end = true;
	}
	
	var result = function(food){
		if(food.x>ban-2&&food.x<ban+2){//产生碰撞
			if(food.score<0){
				alert("游戏结束，您的得分："+score);
				end();
				
			}else{
				score = score+food.score;
				setscore();
			}
		}
		food = null;
	}
	
	;(function(){
		var html = '';
		for(var i=0; i<row; i++)
		{
			html += '<tr id="tr_'+i+'">';
			for(var j=0; j<col; j++){
				html += '<td id="td_'+i+'_'+j+'" >&nbsp;</td>';
				
			}
			html += '</tr>';
		}
		document.getElementById("content").innerHTML = html;
	})()
	
	return {
		begin:begin,	
		pause:pause,
		turn:turn,
		result:result,
		end:false
	}
	
};
