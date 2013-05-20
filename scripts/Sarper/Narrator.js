define(["sarper/InlineTextElement"], function(InlineTextElement)
{

	function Narrator(state)
	{
		this.state = state;
	}

	Narrator.prototype.update = function() {
		for(var i =0;i<this.state.actors.length;i++)
		{
			this.state.actors[i].update();
		}

	};

	Narrator.prototype.say = function(text)
	{
		return new InlineTextElement(text, 0, 500);
	}

	return Narrator;
});