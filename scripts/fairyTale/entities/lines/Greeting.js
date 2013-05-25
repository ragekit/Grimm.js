define(
//how to define a talkline pack in one file

/* NAME = {
	content : the line,
	parent : the fallback,
	rarity : the bigger, the less it is used
}
*/

//does all lines need to be static, or can i do singleton ? or instance in each actors ?

	Greeting = {
		content : "Hello",
	},

	//TODO metas in lines
	DirectedGreeting = {
		content : "Hello",
		parent : Greeting
	},

	CasualGreeting = {
		content: "hey",
		parent : Greeting,
		rarity : 5
	},

	FormalGreeting = {
		content: "Good afternoon",
		parent : Greeting,
		rarity : 5
	}

)