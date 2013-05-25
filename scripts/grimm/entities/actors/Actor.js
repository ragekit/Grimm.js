define(["grimm/entities/Entity"],function(Entity){

	//Actor are specials entities that can move and talk on their own 
	//and remember other entities

	Actor.prototype = new Entity();
	Actor.prototype.constructor = Actor;
	Actor.prototype.parent = Entity.prototype;

	function Actor(name,description)
	{
		Entity.call(this,name,description);
 		this.lines =[];

	}

	Actor.prototype.talkTo = function(to,line)
	{
		return TalkLine.resolveCoolDown(this.lines[line]);
	}

	Actor.prototype.remember = function(worldElement)
	{
		
	}

	Actor.prototype.update = function()
	{
		
	}

	return Actor;
})