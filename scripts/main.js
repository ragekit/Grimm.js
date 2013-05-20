require(
	["lib/tween",
	"lib/lodash",
	"grimm/Grimm",
	"grimm/actors/Actor"],function(
		tween,
		_,
		Grimm,
		Actor){

	(function(){

		var game = new Grimm("prompt","story");
		var princess = new Actor("princess");
		game.addActor(princess);


		var update = function() {
			TWEEN.update();		
		}

		var windowResize = function(e){

		}

		window.addEventListener("resize",windowResize);
		window.setInterval(update, 10); 
	})();
})
