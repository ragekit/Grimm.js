define(["grimm/entities/Entity","grimm/Grimm"],function(Entity,Grimm){

	//Actor are specials entities that can move and talk on their own 
	//and remember other entities

	Actor.prototype = new Entity();
	Actor.prototype.constructor = Actor;
	Actor.prototype.parent = Entity.prototype;

	function Actor(name,role)
	{
		Entity.call(this,name);
		this.role = role;
		this.memory = [];
		this.genre ="n";
 		this.lines =[];
 		this.mindState = "neutral";

	}

	Actor.prototype.getTalkLine = function(line,meta)
	{
		var type = this.lines[line];
		return TalkLine.resolveCoolDown(type,meta);
	}

	Actor.prototype.talk = function(line,meta)
	{
		var type = this.lines[line];
		var l = TalkLine.resolveCoolDown(type,meta);


		Grimm.instance.narrator.say([this.name,"says : ",l]);
	}

	Actor.prototype.getDescription = function()
	{
		return ["this is",this.name,Vocabulary.pronoun(this),"is",this.role];	
	}

	Actor.prototype.remember = function(entity)
	{
		this.memory.push(entity);
	}

	Actor.prototype.knows = function(entity)
	{
		for (var i = 0; i < this.memory.length; i++) {
			if(this.memory[i] == entity)
			{
				return true;
			}
		};
		return false;
	}

	Actor.prototype.update = function()
	{
		
	}

	return Actor;
})