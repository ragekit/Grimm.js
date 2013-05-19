define(["sarper/BasicTextElement", "lib/tween"], function(BasicTextElement, tween)
{

	InlineTextElement.prototype = new BasicTextElement();
	InlineTextElement.prototype.constructor = InlineTextElement;

	function InlineTextElement(text, delay, time)
	{
		BasicTextElement.call(this, text, delay, time);

		this.container = document.createElement('div');
		this.showTween = new TWEEN.Tween(this.container.style).to(
		{
			opacity: 1
		}, time == undefined ? 500 : time).delay(delay || 0);

		if (text instanceof Array)
		{
			this.texts = text;
			this.formatText();
			console.log(this.formatText);
		}
		else
		{
			this.addText(text);
		}
	}

	InlineTextElement.prototype.formatText = function()
	{
		console.log('inn');
		this.container.innerHTML = "";
		for (var i = 0; i < this.texts.length; i++)
		{
			this.container.innerHTML += this.texts[i] + "<br>";
		}
	}

	return InlineTextElement;
})