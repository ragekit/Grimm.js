define(["lib/tween"],function(tween){

	function TweenPool(container)
	{
		this.container = container;
		this.pool = [];
		this.currentTween = null;
	}

	TweenPool.prototype ={
		add:function(el){
			this.pool.push(el);

			el.showTween.onStart(function(){
				this.container.appendChild(el.container);
			}.bind(this));

			el.showTween.onComplete(function()
			{
				this.pool.splice(this.pool.indexOf(el),1);
			}.bind(this))
			if(this.pool.length >1)
			{
				this.pool[this.pool.length-2].showTween.chain(el.showTween);
			}
		},
		show:function()
		{
			this.pool[0].show();
		}
	}


	return TweenPool;
})