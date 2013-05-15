define(function(){
	var text;
	function BasicTextElement(text)
	{
		this.container = document.createElement('div');
		this.text = text;
	}

	BasicTextElement.prototype = {
		get text(){
			return this.container.textContent;
		},
		set text(value){
			this.container.textContent = value;
		}
	}

	return BasicTextElement;
})