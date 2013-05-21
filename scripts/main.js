require(
	["lib/tween",
	"lib/lodash",
	"grimm/Grimm",
	"fairyTale/actors/Princess"],function(
		tween,
		_,
		Grimm,
		Princess){

	(function(){

		var game = new Grimm("prompt","story");
		var princess = new Princess("Amelia");
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
