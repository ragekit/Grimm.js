define(["grimm/actors/Actor",
	"grimm/helpers/Vocabulary",
	"fairyTale/storyElements/talkLines/CasualGreeting"
	],function(Actor,Vocabulary,CasualGreeting){

	Princess.prototype = new Actor();
	Princess.prototype.constructor = Princess;


	function Princess(name)
	{
		Actor.call(this,name);
 		this.role = "a princess";
 		this.genre = "f";
 		this.greeting = CasualGreeting;
	}

	Princess.prototype.description = function()
	{
		return ["this is",this.name,Vocabulary.pronoun(this),"is",this.role];	
	}

	

	return Princess;
})