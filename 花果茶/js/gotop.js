var go = $(".go-top")[0];
// console.log(go)
window.onscroll = function(){
				if(scroll().top <= 0){
					
					animate(go,{"height":0});
				}else{
					animate(go,{"height":50});
				}
			}
			
			go.onmouseover = function(){
				animate(go,{"opacity":30});
			}
			go.onmouseout = function(){
				animate(go,{"opacity":100});

			}