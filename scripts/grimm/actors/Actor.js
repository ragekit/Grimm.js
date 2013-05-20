define([],function(){

	function Actor(name)
	{
 		this.name = name;
	}

	Actor.prototype.description = function()
	{
		return "I am " + name;
	}

	Actor.prototype.update = function()
	{
		
	}

	return Actor;
})