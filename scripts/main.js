require(
	["lib/tween",
	"lib/lodash",
	"grimm/Grimm",
	"fairyTale/entities/actors/Princess",
	"fairyTale/entities/actors/King"],function(
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


		//anim update 
		var update = function() {
			TWEEN.update();		
		}

		var windowResize = function(e){

		}

		window.addEventListener("resize",windowResize);

		//TODO : replace with requestanimframe.js
		window.setInterval(update, 10); 
	})();
})
