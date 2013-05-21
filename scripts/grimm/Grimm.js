define(["grimm/TweenPool",
	"grimm/InputProcessor",
	"grimm/Narrator",
	"grimm/helpers/StringHelper"],function(
		TweenPool,
		InputProcessor,
		Narrator,
		StringHelper){

	function Grimm(promptId,storyOutputId)
	{
		this.actors = []; 
		this.pool = new TweenPool(document.getElementById("story"));
		this.inputProcessor = new InputProcessor(document.getElementById("input"));
		this.narrator = new Narrator(this,this.inputProcessor,this.pool);
				
	}

	Grimm.prototype.addActor = function(actor)
	{
		this.actors.push(actor);
	}

	Grimm.prototype.getActors = function()
	{
		
	}

	Grimm.prototype.getActorByName = function(name)
	{
		for(var i=0;i<this.actors.length;i++)
		{
			console.log(name);
			if(StringHelper.areSimilar(name,this.actors[i].name))
			{
				return this.actors[i];
			}
		}
		return null;
	}

	return Grimm;
})