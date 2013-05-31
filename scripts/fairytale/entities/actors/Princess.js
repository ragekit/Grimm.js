define(["grimm/entities/actors/Actor",
	"grimm/helpers/Vocabulary",
	"fairytale/entities/lines/Greeting"
	],function(Actor,Vocabulary,Greeting){
	
	Princess.prototype = new Actor();
	Princess.prototype.constructor = Princess;
	Princess.prototype.parent = Actor.prototype;

	function Princess()
	{
		Actor.call(this,"Amelia","a princess");
 		this.genre = "f";
 		this.lines['greeting'] = Greeting.directed;
	}

	return Princess;
})