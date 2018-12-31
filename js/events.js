//define functions here
function getIt() { 
  var pTag = $('p').on('click', function (){
    alert("Hey!");
  });
  
}

function frameIt() {
  $('img').addClass('tasty');
}

$(document).ready(function(){
  getIt();
  frameIt();

});
