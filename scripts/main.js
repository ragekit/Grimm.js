require(
	["lib/tween",
	"lib/lodash",
	"grimm/Grimm",
	"fairyTale/actors/Princess",
	"fairyTale/actors/King"],function(
		tween,
		_,
		Grimm,
		Princess,
		King){

	(function(){

		var game = new Grimm("prompt","story");
		var princess = new Princess("Amelia");
		var king = new King();
		game.addActor(princess);
		game.addActor(king);

		var update = function() {
			TWEEN.update();		
		}

		var windowResize = function(e){

		}

		window.addEventListener("resize",windowResize);
		window.setInterval(update, 10); 
	})();
})
