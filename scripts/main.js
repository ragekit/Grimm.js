require(
	["lib/tween",
	"lib/lodash",
	"grimm/BasicTextElement",
	"grimm/InlineTextElement",
	"grimm/TweenPool",
	"grimm/InputProcessor",
	"grimm/Narrator",
	"grimm/Grimm",
	"grimm/actors/Actor"],function(
		tween,
		_,
		BasicTextElement,
		InlineTextElement,
		TweenPool,
		InputProcessor,
		Narrator,
		Grimm,
		Actor){

	(function(){

		var story = document.getElementById("story");
		var prompt = document.getElementById("input");
		var input = new InputProcessor();   

		var pool = new TweenPool(story);
		var narrator = new Narrator(this,pool);

		var intro = new InlineTextElement(["Welcome on the FairyTale 2.0","================"]);
		
		pool.add(intro);

		var game = new Grimm();
		var princess = new Actor("princess");
		game.addActor(princess);


		var update = function() {
			TWEEN.update();
			
		}

		var windowResize = function(e){

		}

		var promptInput = function()
		{
			narrator.say(input.process(prompt.value));
			prompt.value ="";
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
