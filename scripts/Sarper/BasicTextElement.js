define(["lib/tween"],function(tween){



	function BasicTextElement(text,delay)
	{
		this.container = document.createElement('div');
		this.lines = [];


		this.addLine(text);
		this.showTween = new TWEEN.Tween(this.container.style).to({opacity:1}, 500);	
	}


	BasicTextElement.prototype = {
		addLine: function(line){
			this.lines.push(line);
			this.formatText();
		},
		showIn : function(parent)
		{
			this.container.style.opacity = 0;
			parent.appendChild(this.container);
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