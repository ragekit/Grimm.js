define(["grimm/InlineTextElement","grimm/InputProcessor"], function(InlineTextElement,InputProcessor)
{

	function Narrator(state,inputProcessor,outputPool)
	{
		this.state = state;
		this.output = outputPool;
		this.input = inputProcessor;
		this.addCommand("look",function(){
			this.say("The Hero gaze upon the room");
		});

		this.addCommand("look at",function(at){
			this.say("the Hero had never seen such a beautiful " + at.name);
		})

	}

	Narrator.prototype.update = function() {
		for(var i =0;i<this.state.actors.length;i++)
		{
			this.state.actors[i].update();
		}

	};

	Narrator.prototype.addCommand = function(name,callback)
	{
		this.input.commands[name] = callback.bind(this);
	}

	Narrator.prototype.say = function(text)
	{
		this.output.add(new InlineTextElement(text, 0, 500));
	}

	return Narrator;
});