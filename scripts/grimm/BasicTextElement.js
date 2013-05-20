define(["lib/tween"], function(tween)
{

	function BasicTextElement(text, delay, time)
	{
		this.container = document.createElement('span');
		this.texts = [];
		this.addText(text);
		this.showTween = new TWEEN.Tween(this.container.style).to(
		{
			opacity: 1
		}, time == undefined ? 500 : time).delay(delay || 0);
	}

	BasicTextElement.generateFromArray = function(arr)
	{
		var out = [];
		for (var i = 0; i < arr.length; i++)
		{
			var el = new BasicTextElement(arr[i]);
			out.push(el);
		}
		return out;
	}

	BasicTextElement.prototype.addText = function(txt)
	{
		this.texts.push(txt);
		this.formatText();
	}

	BasicTextElement.prototype.show = function()
	{
		this.container.style.opacity = 0;
		this.showTween.start();
	}
	
	BasicTextElement.prototype.formatText = function()
	{
		this.container.innerHTML = "";
		for (var i = 0; i < this.texts.length; i++)
		{
			this.container.innerHTML += this.texts[i] + " ";
		}
	}

	return BasicTextElement;
})