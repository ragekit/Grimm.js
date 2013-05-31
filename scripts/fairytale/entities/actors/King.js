define(["grimm/entities/actors/Actor",
	"fairytale/entities/lines/Greeting"],
	function(Actor,Greeting){

	King.prototype = new Actor();
	King.prototype.constructor = King;
	King.prototype.parent = Actor.prototype;


	function King()
	{
		Actor.call(this,"King Mustard the 3rd","a king");
 		this.lines['greeting'] = Greeting.formal;
		this.genre = "m";
	}

	

	return King;
})