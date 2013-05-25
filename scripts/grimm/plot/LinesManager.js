// STATIC class to handle talkline/cooldown and stuffs

define([],function(){

	TalkLine = {hash:[]};
	
	TalkLine.resolveCoolDown = function(obj)
	{
		if(TalkLine.hash.indexOf(obj) == -1)
		{
			//if no parent, no cooldown and talk instantly
			if(obj.parent != null)
			{
				obj.cooldown = 0;
				TalkLine.hash.push(obj);
			}
			else
			{
				return obj.content;
			}			
		}
	
		obj = TalkLine.hash[TalkLine.hash.indexOf(obj)];
		if(obj.cooldown == 0)
		{	
			obj.cooldown +=obj.rarity;
			return obj.content;
		}else
		{
			return TalkLine.resolveCoolDown(obj.parent);
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