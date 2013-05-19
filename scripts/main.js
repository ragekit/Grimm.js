require(
	["lib/tween",
	"lib/underscore",
	"sarper/BasicTextElement",
	"sarper/InlineTextElement",
	"sarper/TweenPool"],function(
		tween,
		_,
		BasicTextElement,
		InlineTextElement,
		TweenPool){

	(function(){

		var story = document.getElementById("story");
		var prompt = document.getElementById("input");    

		var pool = new TweenPool(story);

		var intro = new InlineTextElement(["Welcome on the FairyTale 2.0","================"]);
		var bullets = BasicTextElement.generateFromArray(["where","cool","stuff","happens"]);
		
		pool.add(intro);
		pool.add(bullets);

		var update = function() {
			TWEEN.update();
			
		}

		var windowResize = function(e){

		}

		var promptInput = function()
		{
			var el = new BasicTextElement(prompt.value);
			prompt.value = "";
			pool.add(el);

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
