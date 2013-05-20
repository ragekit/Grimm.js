define(["grimm/InlineTextElement","grimm/InputProcessor","grimm/helpers/StringHelper"], function(InlineTextElement,InputProcessor,StringHelper)
{

	function Narrator(state,inputProcessor,outputPool)
	{
		this.state = state;
		this.output = outputPool;
		this.input = inputProcessor;

		//TOSEPARATE
		this.commands = [
			{
				trigger : "look",
				callback : function(){
					this.say("The Hero gazes upon the room")
				}
			},
			{
				trigger : "look at",
				callback : function(at){
					var target = this.state.getActorByName(at);
					this.say("The Hero approaches to examine " + target.name);
					this.say("He can see " + target.description());

				}
			}
		]
		this.addCommands(this.commands);
	}

	Narrator.prototype.update = function() {
		for(var i =0;i<this.state.actors.length;i++)
		{
			this.state.actors[i].update();
		}

	};

	Narrator.prototype.addCommands = function(commands)
	{
		for(var i=0;i<commands.length;i++)
		{
			this.addCommand(commands[i]);
		}
	}

	Narrator.prototype.addCommand = function(cmd)
	{
		cmd.callback = cmd.callback.bind(this);
		this.input.commands.push(cmd);
	}

	Narrator.prototype.say = function(text)
	{
		this.output.add(new InlineTextElement(text, 0, 500));
	}

	return Narrator;
});