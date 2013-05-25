define(
//how to define a talkline pack in one file

/* NAME = {
	content : the line,
	parent : the fallback,
	rarity : the bigger, the less it is used
}
*/

	Greeting = {
		content : "Hello",
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