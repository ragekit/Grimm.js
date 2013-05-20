define([],function(){

	function Grimm()
	{
		this.actors = []; 		
	}

	Grimm.prototype.addActor = function(actor)
	{
		this.actors.push(actor);
	}

	return Grimm;
})