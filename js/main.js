var x = document.querySelector('.dropDownList');
x.style.display = 'none';
function Display(){
    var x = document.querySelector('.dropDownList');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    } 
}
var modal = document.getElementById('myModel');
var subModel = document.getElementById('subModel');
var bigModel = document.getElementById('bigModel');
var btn = document.getElementById("ShowchoseYouLocation");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
  subModel.style.display ="block";
  bigModel.style.display = "none";
  setTimeout(function(){
    subModel.style.display = "none";
    bigModel.style.display = "block";
  },2000);
  
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

