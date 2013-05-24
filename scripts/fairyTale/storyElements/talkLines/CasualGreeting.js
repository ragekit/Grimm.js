define(["./Greeting"],function(Greeting){

	CasualGreeting.prototype = new Greeting();
	CasualGreeting.prototype.constructor = CasualGreeting;
	CasualGreeting.prototype.parent = Greeting.prototype;


	function CasualGreeting()
	{
		Greeting.call(this);
		this.content = "hey";
	}

	

	return CasualGreeting;
})