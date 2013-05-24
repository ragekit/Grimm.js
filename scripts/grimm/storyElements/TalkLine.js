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
			//TODO not hardcode value
			obj.cooldown +=5;
			return obj.content;
		}else
		{
			return TalkLine.resolveCoolDown(obj.parent);
		}

	}
	return TalkLine;
})