//object, place, or anything about the world

define([],function(){

	function WorldElement(name,description)
	{
 		this.name = name;
 		this.description = description;
 		this.location;
 		this.content;
	}

	WorldElement.prototype.update = function()
	{
		
	}

	return WorldElement;
})