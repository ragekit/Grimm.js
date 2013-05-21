define(["grimm/actors/Actor","grimm/helpers/Vocabulary"],function(Actor,Vocabulary){

	Princess.prototype = new Actor();
	Princess.prototype.constructor = Princess;


	function Princess(name)
	{
		Actor.call(this,name);
 		this.look = "a princess";
 		this.genre = "f";
	}

	Princess.prototype.description = function()
	{
		return ["this is",this.name,Vocabulary.pronoun(this),"is",this.look];	
	}

	

	return Princess;
})