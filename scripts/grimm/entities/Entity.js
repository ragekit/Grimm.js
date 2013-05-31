//object, place, or anything in the world (physically or not)

define([],function(){

	function Entity(name)
	{
 		this.name = name;
 		this.location;
	}

	Entity.prototype.update = function()
	{
		
	}

	Entity.prototype.getDescription = function()
	{
		return this.description;
	}

	return Entity;
})