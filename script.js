document.addEventListener("DOMContentLoaded",function(){
	new Vue({
		el:'#game',
		data: function(){
			return{
				ballX:0,
				ballY:0,
				boardPosition:200,
				boardWidth:160,
				fieldWidth:720,
			}
		},
		methods:{
			onMove:function(e){
				this.boardPosition=e.clientX-(this.boardWidth/2);
				if(this.boardPosition<0){
					this.boardPosition=0;
				}
				if(this.boardWidth+this.boardPosition>this.fieldWidth){
					this.boardPosition=(this.fieldWidth-this.boardWidth);
				}
			}
		},

	});
})