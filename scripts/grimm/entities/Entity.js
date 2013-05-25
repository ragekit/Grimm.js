//object, place, or anything in the world (physically or not)

define([],function(){

	function Entity(name,description)
	{
 		this.name = name;
 		this.description = description;
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