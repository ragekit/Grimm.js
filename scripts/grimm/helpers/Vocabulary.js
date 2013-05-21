define([],function(){

	Vocabulary = {};

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

	return Vocabulary;
})