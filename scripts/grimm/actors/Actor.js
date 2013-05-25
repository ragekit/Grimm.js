define([],function(){


	function Actor(name)
	{
		//pack of worldElements
		this.memory = [];
		this.motivation;
 		this.name = name;
 		this.lines =[];

	}

	Actor.prototype.talkTo = function(to,line)
	{
		return TalkLine.resolveCoolDown(this.lines[line]);
	}

	Actor.prototype.description = function()
	{
		
	}

	Actor.prototype.remember = function(worldElement)
	{
		
	}

	Actor.prototype.update = function()
	{
		
	}

	return Actor;
})