define(["grimm/TweenPool",
		"grimm/InputProcessor",
		"grimm/Narrator",
		"grimm/helpers/StringHelper",
		"grimm/storyElements/TalkLine"
], function(
	TweenPool,
	InputProcessor,
	Narrator,
	StringHelper,
	TalkLine)
{

	function Grimm(promptId, storyOutputId)
	{
		this.actors = [];
		//objectize state ?
		this.state;
		this.pool = new TweenPool(document.getElementById("story"));
		this.inputProcessor = new InputProcessor(document.getElementById("input"));
		this.narrator = new Narrator(this, this.inputProcessor, this.pool);

	}

	Grimm.prototype.update = function()
	{
		for(var i=0;i<this.actors.length;i++)
		{
			this.actors[i].update();
		}
		TalkLine.updateCooldown();
	}

	Grimm.prototype.addActor = function(actor)
	{
		this.actors.push(actor);
	}

	Grimm.prototype.getActors = function() {
		return this.actors;
	}

	Grimm.prototype.getActor = function(whatever)
	{
		for (var i = 0; i < this.actors.length; i++)
		{
			for (var prop in this.actors[i])
			{
				if (this.actors[i].hasOwnProperty(prop))
				{
					if(StringHelper.areSimilar(this.actors[i][prop]+"",whatever))
					{
						return this.actors[i];
					}
				}
			}
		}
		return null;
	}

	Grimm.prototype.getActorByProperty = function(prop, value)
	{
		for (var i = 0; i < this.actors.length; i++)
		{
			if (StringHelper.areSimilar(value, this.actors[i][prop]))
			{
				return this.actors[i];
			}
		}
		return null;
	}

	Grimm.prototype.getActorByName = function(name)
	{
		for (var i = 0; i < this.actors.length; i++)
		{
			if (StringHelper.areSimilar(name, this.actors[i].name))
			{
				return this.actors[i];
			}
		}
		return null;
	}

	return Grimm;
})