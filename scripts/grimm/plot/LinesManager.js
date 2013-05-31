// STATIC class to handle talkline/cooldown and stuffs

define([],function(){

	TalkLine = {hash:[]};
	
	TalkLine.resolveCoolDown = function(type,meta)
	{	
		var obj = new type(meta);

		if(TalkLine.hash[type] == null)
		{
			//if no parent, no cooldown and talk instantly
			if(obj.parent != null)
			{
				console.log("in");
				TalkLine.hash[type] = 0;
			}
			else
			{
				return obj.content;
			}			
		}

		if(TalkLine.hash[type] == 0)
		{	
			TalkLine.hash[type] +=obj.rarity;
			return obj.content;
		}else
		{
			return TalkLine.resolveCoolDown(obj.parent, meta);
		}

	}

	TalkLine.updateCooldown = function()
	{
		for (var i = 0; i < TalkLine.hash.length; i++) {
			TalkLine.hash[i].cooldown--;
		};
	}

	return TalkLine;
})