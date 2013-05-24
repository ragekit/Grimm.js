define([],function(){

	function TalkLine()
	{
 		this.content = "";
 		this.meta;
 		this.cooldown = 0;
	}

	TalkLine.prototype.toString = function()
	{
		if(this.cooldown == 0)
		{
			console.log(this.content);
			this.cooldown += 5;
			return this.content;
		}else
		{
			return Object.create(this.__proto__) +"";
		}
		
	}

	return TalkLine;
})