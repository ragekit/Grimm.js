define(["grimm/BasicTextElement", "lib/tween"], function(BasicTextElement, tween)
{

	InlineTextElement.prototype = new BasicTextElement();
	InlineTextElement.prototype.constructor = InlineTextElement;

	function InlineTextElement(text, delay, time)
	{
		//BasicTextElement.call(this,text, delay, time);

		this.container = document.createElement('div');
		this.showTween = new TWEEN.Tween(this.container.style).to(
		{
			opacity: 1
		}, time == undefined ? 500 : time).delay(delay || 0);

		if (text instanceof Array)
		{
			this.texts = text;
		}
		else
		{
			this.texts[0] = text;
		}
		this.formatText();
	}

	InlineTextElement.prototype.formatText = function()
	{
		this.container.innerHTML = "";
		for (var i = 0; i < this.texts.length; i++)
		{
			this.container.innerHTML += this.texts[i] + "<br>";
		}
	}

	return InlineTextElement;
})