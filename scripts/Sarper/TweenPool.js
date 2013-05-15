define(["lib/tween"],function(tween){

	function TweenPool(container,autoStart)
	{
		this.container = container;
		this.pool = [];
		this.isStop = true;
		this.autoStart = autoStart == undefined ? true : autoStart ;
	}

	TweenPool.prototype ={
		add:function(el,option){

			option = option || {};

			this.pool.push(el);

			el.showTween.onStart(function(){
				this.container.appendChild(el.container);
			}.bind(this));

			el.showTween.onComplete(function()
			{
				this.pool.splice(this.pool.indexOf(el),1);
				if(this.pool.length == 0) 
				{
					this.isStop = true;
				}

			}.bind(this))

			//link tween
			if(this.pool.length >1)
			{
				this.pool[this.pool.length-2].showTween.chain(el.showTween);
			}
			if(this.isStop && this.autoStart)
			{
				this.isStop = false;
				this.show();
			}
		},
		show:function()
		{
			if(this.pool.length>0)
			{
				this.pool[0].show();
			}
			

		}
	}


	return TweenPool;
})