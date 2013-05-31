define(
	function()
	{
		base = function(){
			this.content = "Hello";
		}

		directed = function(to){
			this.content = "hello " + to;
			this.parent = base;
		}

		casual = function(){
			this.content= "hey";
			this.parent = base;
			this.rarity = 5;
		}

		formal = function(){
			this.content= "good afternoon";
			this.parent = base;
			this.rarity = 5;
		}
		return this

	}
		
	
)