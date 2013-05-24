define(["grimm/InlineTextElement",
	"grimm/InputProcessor",
	"grimm/helpers/StringHelper",
	"lib/lodash",
	"grimm/storyElements/TalkLine"
	], function(InlineTextElement,
		InputProcessor,
		StringHelper,
		_,
		TalkLine)
{

	function Narrator(state,inputProcessor,outputPool)
	{
		this.state = state;
		this.actors = state.actors;
		this.output = outputPool;
		this.input = inputProcessor;

		//TOSEPARATE : is implemented in each story right ? or not. dunno
		this.commands = [
			{
				trigger : "look",
				callback : function(){
					this.say(["The Hero gazes upon the room"]);
					var pop = [];
					_(this.actors).forEach(function(val){
						pop.push(val.role);
					})
					this.say(["His look his caught by",pop.join(",")])
				}
			},
			{
				trigger : "look at",
				callback : function(at){
					var target = this.state.getActorByName(at);
					this.say(["The Hero approaches to examine",target.name]);
					this.say(["He can see",target.description()]);
				}

			},
			{	
				trigger : "talk to",
				callback : function(to){
					var target = this.state.getActor(to);
					this.say([target.name,"says",TalkLine.resolveCoolDown(target.greeting)]);
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
		if(text instanceof Array)
		{
			console.log(rjoin(text," "));
			this.output.add(new InlineTextElement(rjoin(text," "), 0, 500));
		} 
		else
		{
			this.output.add(new InlineTextElement(text, 0, 500));
		}
	}

	//TODO move it in an array helper maybe ?
	//recursively join array
	function rjoin(ar,jn)
	{
		var ret = "";
		for(var i=0;i<ar.length;i++)
		{
			if(ar[i] instanceof Array)
			{
				ret += rjoin(ar[i]);
			}
			else
			{
				ret += ar[i];
			}
			ret += jn;
		}
		return ret;
	}

	return Narrator;
});