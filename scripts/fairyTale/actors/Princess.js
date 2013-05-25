define(["grimm/actors/Actor",
	"grimm/helpers/Vocabulary",
	"fairyTale/storyElements/talkLines/Greeting"
	],function(Actor,Vocabulary){

	Princess.prototype = new Actor();
	Princess.prototype.constructor = Princess;


	function Princess(name)
	{
		Actor.call(this,name);
 		this.role = "a princess";
 		this.genre = "f";
 		this.lines['greeting'] = CasualGreeting;
	}

	Princess.prototype.description = function()
	{
		return ["this is",this.name,Vocabulary.pronoun(this),"is",this.role];	
	}

	return Princess;
})