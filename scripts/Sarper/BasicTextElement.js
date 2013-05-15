define(["lib/tween"],function(tween){



	function BasicTextElement(text,delay)
	{
		this.container = document.createElement('div');
		this.lines = [];
		if(text instanceof Array)
		{
			console.log("array");
			this.lines = text;
			this.formatText();
		}
		else
		{
			this.addLine(text);
		}
			
		this.showTween = new TWEEN.Tween(this.container.style).to({opacity:1}, 500).delay(delay || 0);	
	}


	BasicTextElement.prototype = {
		addLine: function(line){
			this.lines.push(line);
			this.formatText();
		},
		show : function()
		{
			this.container.style.opacity = 0;
			this.showTween.start();
		},
		formatText : function()
		{
			this.container.innerHTML = "";
			for(var i =0;i<this.lines.length;i++)
			{
				this.container.innerHTML += this.lines[i] + "<br>";
			}
		}
	}

	return BasicTextElement;
})