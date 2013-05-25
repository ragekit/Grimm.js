define([],function(){

	function InputProcessor(inputPrompt,processCallback)
	{
		this.prompt = inputPrompt;
		this.commands = [];
 		this.prompt.addEventListener("keydown",function(e){
			this.onInput(e);
		}.bind(this));
 		this.prompt.tabIndex = "-1";
		this.prompt.focus();
		this.input = [];

		this.processCallback = processCallback;
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
		var cmd;
		for(var i =0;i<this.commands.length;i++)
		{
			if(this.input.toLowerCase().indexOf(this.commands[i].trigger) == 0)
			{
				if(cmd == null || this.commands[i].trigger.length > cmd.trigger.length)
					cmd = this.commands[i];
			}
		}

		if(cmd !=null)
		{
			cmd.callback(this.input.split(" ")[2]);
		}
			

		this.erase();

		if(this.processCallback !=null)
		{
			this.processCallback();
		}
	}


	InputProcessor.prototype.erase = function()
	{
		this.prompt.value = "";
	}

	return InputProcessor;
})