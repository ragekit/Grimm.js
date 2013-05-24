define([],function(){

	function TalkLine(line)
	{
 		this.content = line;
 		this.meta;
 		this.cooldown = 0;
	}

	TalkLine.prototype.toString = function()
	{
		if(this.cooldown == 0)
		{
			return this.content;
		}else
		{
			return Object.create(this.parent);
		}
		
	}

	return TalkLine;
})