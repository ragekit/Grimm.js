require(["underscore","Sarper/BasicTextElement"],function(_,BasicTextElement){
  (function(){

    var story = document.getElementById("story");
    var prompt = document.getElementById("input");    
    

    var update = function() {

    }

    var windowResize = function(e){

    }

    prompt.addEventListener("keydown",function(e){
      if(e.keyCode == 13)
      {
        var el = new BasicTextElement(prompt.value);
        console.log(el.text);
        prompt.value = "";
        story.appendChild(el.container);
      }
    });

    window.addEventListener("resize",windowResize);
    window.setInterval(update, 500); 
    prompt.tabIndex = "-1";
    prompt.focus();
  })();
})
