define(["grimm/TweenPool",
	"grimm/InputProcessor",
	"grimm/Narrator"],function(
		TweenPool,
		InputProcessor,
		Narrator){

	function Grimm(promptId,storyOutputId)
	{
		this.pool = new TweenPool(document.getElementById("story"));
		this.narrator = new Narrator(this,this.pool);
		this.inputProcessor = new InputProcessor(document.getElementById("input"));
		this.actors = []; 		
	}

	Grimm.prototype.addActor = function(actor)
	{
		this.actors.push(actor);
	}

	return Grimm;
})