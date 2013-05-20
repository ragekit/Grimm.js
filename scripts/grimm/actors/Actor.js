define([],function(){

	function Actor(name)
	{
 		this.name = name;
	}

	Actor.prototype.description = function()
	{
		return "the most gorgeous " + name;
	}

	Actor.prototype.update = function()
	{
		
	}

	return Actor;
})