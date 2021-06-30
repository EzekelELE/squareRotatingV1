var main = document.querySelector(".main");

setInterval(function(){ 
   var el = document.createElement("div");
   el.setAttribute("class","respawn");
   document.body.appendChild(el);
}, 1250)

setTimeout(function(){
   setInterval(function(){
      document.body.removeChild(document.body.firstChild);
   
   }, 1250)
}, 10000)
