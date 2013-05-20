define([],function(){

	function InputProcessor(inputPrompt)
	{
		this.prompt = inputPrompt;
		this.commands = [];
 		this.prompt.addEventListener("keydown",function(e){
			this.onInput(e);
		}.bind(this));
 		this.prompt.tabIndex = "-1";
		this.prompt.focus();
		this.input = "";

	}

	InputProcessor.prototype.onInput = function(e)
	{
		if(e.keyCode == 13)
		{
			this.process();
		}
	}

	InputProcessor.prototype.process = function()
	{
		this.input = this.prompt.value;
		if(this.commands[this.input] != null)
		{
			this.commands[this.input].call();
		}

		this.erase();
	}


	InputProcessor.prototype.erase = function()
	{
		this.prompt.value = "";
	}

	return InputProcessor;
})