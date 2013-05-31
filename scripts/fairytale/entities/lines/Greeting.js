define(
	function()
	{
		base = function(){
			this.content = "Hello";
		}

		directed = function(meta){
			this.content = "hello " + (meta.to || "you");
			this.parent = base;
			this.rarity = 2;
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