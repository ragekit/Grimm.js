require(["lib/tween","lib/underscore","Sarper/BasicTextElement","Sarper/TweenPool"],function(tween,_,BasicTextElement,TweenPool){
	(function(){

		var story = document.getElementById("story");
		var prompt = document.getElementById("input");    

		var pool = new TweenPool(story);

		var intro = new BasicTextElement(["Welcome on the FairyTale 2.0","==========="]);
		var intro2 = new BasicTextElement("Where cool stuffs happens",500);

		pool.add(intro);
		pool.add(intro2);

		pool.show();		

		var update = function() {
			TWEEN.update();
			
		}

		var windowResize = function(e){

		}

		var promptInput = function()
		{
			var el = new BasicTextElement(prompt.value);
			prompt.value = "";
			showPool.push();

		}

		prompt.addEventListener("keydown",function(e){
			if(e.keyCode == 13)
			{
				promptInput();
			}
		});

		window.addEventListener("resize",windowResize);
		window.setInterval(update, 10); 
		prompt.tabIndex = "-1";
		prompt.focus();
	})();
})
