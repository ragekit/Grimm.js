define(["grimm/entities/actors/Actor",
	"fairytale/entities/lines/Greeting"],function(Actor){

	King.prototype = new Actor();
	King.prototype.constructor = King;
	King.prototype.parent = Actor.prototype;


	function King()
	{
		Actor.call(this);
 		this.role = "a king";
 		this.name = "King Mustard the 3rd";
 		this.lines['greeting'] = FormalGreeting;
	}

	

	return King;
})