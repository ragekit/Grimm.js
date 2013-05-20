require(
	["lib/tween",
	"lib/lodash",
	"sarper/BasicTextElement",
	"sarper/InlineTextElement",
	"sarper/TweenPool",
	"sarper/InputProcessor"],function(
		tween,
		_,
		BasicTextElement,
		InlineTextElement,
		TweenPool,
		InputProcessor){

	(function(){

		var story = document.getElementById("story");
		var prompt = document.getElementById("input");
		var input = new InputProcessor();   

		var pool = new TweenPool(story);

		var intro = new InlineTextElement(["Welcome on the FairyTale 2.0","================"]);
		
		pool.add(intro);
		

		var update = function() {
			TWEEN.update();
			
		}

		var windowResize = function(e){

		}

		var promptInput = function()
		{
			input.process(prompt.value);
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
