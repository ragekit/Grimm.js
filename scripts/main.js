require(["underscore"],function(_){
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
        var div = document.createElement("div");
        div.textContent = prompt.value;
        prompt.value = "";
        story.appendChild(div);
      }
    });

    window.addEventListener("resize",windowResize);
    window.setInterval(update, 500); 
    prompt.tabIndex = "-1";
    prompt.focus();
  })();
})
