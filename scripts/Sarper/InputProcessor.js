define([],function(){

	function InputProcessor()
	{
		this.commands = [];
 		this.addCommand("look",function(){
 			return "The Heros gaze upon the room"
 		})	
	}

	InputProcessor.prototype.addCommand = function(name,func)
	{
		this.commands[name] = func;
	}

	InputProcessor.prototype.process = function(input)
	{
		if(this.commands[input] != null)
		{
			return this.commands[input].call(this);
		}
	}

	return InputProcessor;
})