define(["grimm/storyElements/TalkLine"],function(TalkLine){

	Greeting.prototype = new TalkLine();
	Greeting.prototype.constructor = Greeting;
	Greeting.prototype.parent = TalkLine.prototype;

	

	function Greeting()
	{
		TalkLine.call(this,"Hello");
	}

	

	return Greeting;
})