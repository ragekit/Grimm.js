define(["grimm/entities/Entity"],function(Entity){

	Room.prototype = new Entity();
	Room.prototype.constructor = Room;
	Room.prototype.parent = Entity.prototype;


	function Room()
	{
		Entity.call(this,"room","a basic room");
	}

	

	return Room;
})