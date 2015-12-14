var Food = function(cp) {
	this.deep = -1;
	this.x = rd(0,12);//水平位置
	this.speed;
	this.score;
	this.text=0;
	this.run;
	var ts = this;
	
	function rd(Min,Max)
	{   
		var Range = Max - Min;   
		var Rand = Math.random();   
		return(Min + Math.round(Rand * Range));   
	}
	
	
	
	this.show = function(){
		document.getElementById("td_"+this.deep+"_"+this.x).innerHTML = this.text;
		//$("#content tr:eq("+this.deep+")").children("td:eq("+this.x+")").html(this.text);
	}
	
	this.hide = function(){
		if(this.deep<0||this.deep==24)return;
		document.getElementById("td_"+this.deep+"_"+this.x).innerHTML = "&nbsp;";
		//$("#content tr:eq("+this.deep+")").children("td:eq("+this.x+")").html("&nbsp;");	
		
	}
	
	this.down = function(){
		if(window.game.end){
			clearInterval(this.run);
			return false;
		}
		ts.hide();
		ts.deep++;
		if(ts.deep==24){
			ts.result();
		}else{
			ts.show();
		}
		
	}
	this.result = function(){
		clearInterval(this.run);
		window.game.result(this);
	}
	
	this.init = function(cp){
		this.speed = rd(cp-50,cp+50);//随机范围取速度
		var v = 451-this.speed;
		this.score = rd(10-v, 10+v);//根据速度随机取分数
		if(this.score>0){
			this.text = "+"+this.score;	
		}else{
			this.text = "炸";
		}
		run = setInterval(this.down, this.speed);
		console.log(this.speed);
	}
	this.init(cp);
	
};
