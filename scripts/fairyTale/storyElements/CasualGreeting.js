define(["fairyTale/storyElements/talkLines/Greeting"],function(Greeting){

	CasualGreeting.prototype = new Greeting();
	CasualGreeting.prototype.constructor = CasualGreeting;
	CasualGreeting.prototype.parent = Greeting.prototype;


	function CasualGreeting()
	{
		Greeting.call(this,"Hi !");
	}

	

	return CasualGreeting;
})