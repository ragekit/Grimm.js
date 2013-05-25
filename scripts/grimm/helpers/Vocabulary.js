//Vocabulary class, to implement, low priority

define([],function(){

	Vocabulary = {};

	//TODO vocab complexity, but later.
	var looks=[
		"gazes upon the room",
		"takes a glimpse of the room",
		"looks at the room",
		"get some infos about the room"
	]

	Vocabulary.pronoun = function(obj)
	{
		switch(obj.genre)
		{
			case "f":
				return "she";
				break;
			case "m":
				return "he";
				break;
			case "o":
				return "it";
				break;
		}
	}

	Vocabulary.paraphrase = function(type)
	{

	}

	Vocabulary.look = function()
	{
		return looks[Math.floor(Math.random()*looks.length)];
	}

	return Vocabulary;
})