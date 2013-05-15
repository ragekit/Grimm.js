require(["lib/tween","lib/underscore","Sarper/BasicTextElement"],function(tween,_,BasicTextElement){
	(function(){

		var story = document.getElementById("story");
		var prompt = document.getElementById("input");    

		var showPool = [];


		var intro = new BasicTextElement("Welcome on the FairyTale 2.0");
		intro.addLine("============");
		intro.addLine("Where stuff will happen");
		intro.showIn(story);
		console.log(intro.text);

		var update = function() {
			TWEEN.update();
			
		}

		var windowResize = function(e){

		}

		var promptInput = function()
		{
			var el = new BasicTextElement(prompt.value);
			prompt.value = "";
			el.showIn(story);

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
