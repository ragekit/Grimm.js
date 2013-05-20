define([],function(){

	function InputProcessor(inputPrompt)
	{
		this.prompt = inputPrompt;
		this.commands = [];
 		this.addCommand("look",function(){
 			return "The Hero gazes upon the room"
 		});

 		this.prompt.addEventListener("keydown",function(e){
			this.input(e);
		}.bind(this));
 		this.prompt.tabIndex = "-1";
		this.prompt.focus();

	}

	InputProcessor.prototype.addCommand = function(name,func)
	{
		this.commands[name] = func;
	}

	InputProcessor.prototype.input = function(e)
	{
		if(e.keyCode == 13)
		{
			this.process();
		}
	}

	InputProcessor.prototype.process = function()
	{
		var input = this.prompt.value;
		if(this.commands[input] != null)
		{
			return this.commands[input].call(this);
		}

		this.erase();
	}


	InputProcessor.prototype.erase = function()
	{
		this.prompt.value = "";
	}

	return InputProcessor;
})