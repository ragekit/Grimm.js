define(["grimm/entities/actors/Actor",
	"grimm/helpers/Vocabulary",
	"fairytale/entities/lines/Greeting"
	],function(Actor,Vocabulary){

	Princess.prototype = new Actor();
	Princess.prototype.constructor = Princess;


	function Princess(name)
	{
		Actor.call(this,name,"a princess");
 		this.genre = "f";
 		this.lines['greeting'] = CasualGreeting;
	}

	Princess.prototype.getDescription = function()
	{
		return ["this is",this.name,Vocabulary.pronoun(this),"is",this.description];	
	}

	return Princess;
})