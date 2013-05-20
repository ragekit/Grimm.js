define(["grimm/InlineTextElement"], function(InlineTextElement)
{

	function Narrator(state,outputPool)
	{
		this.state = state;
		this.output = outputPool;
	}

	Narrator.prototype.update = function() {
		for(var i =0;i<this.state.actors.length;i++)
		{
			this.state.actors[i].update();
		}

	};

	Narrator.prototype.say = function(text)
	{
		this.output.add(new InlineTextElement(text, 0, 500));
	}

	return Narrator;
});