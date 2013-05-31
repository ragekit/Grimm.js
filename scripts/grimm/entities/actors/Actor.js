define(["grimm/entities/Entity"],function(Entity){

	//Actor are specials entities that can move and talk on their own 
	//and remember other entities

	Actor.prototype = new Entity();
	Actor.prototype.constructor = Actor;
	Actor.prototype.parent = Entity.prototype;

	function Actor(name,role)
	{
		Entity.call(this,name);
		this.role = role;
		this.genre ="n";
 		this.lines =[];

	}

	Actor.prototype.talkTo = function(to,line)
	{
		var l = new this.lines[line](to);
		return TalkLine.resolveCoolDown(l);
	}

	Actor.prototype.say = function(line)
	{

	}

	Actor.prototype.getDescription = function()
	{
		return ["this is",this.name,Vocabulary.pronoun(this),"is",this.role];	
	}

	Actor.prototype.remember = function(worldElement)
	{
		
	}

	Actor.prototype.update = function()
	{
		
	}

	return Actor;
})