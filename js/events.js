//define functions here
function getIt() { 
  var pTag = $('p').on('click', function (){
    alert("Hey!");
  });
  
}

function frameIt() {
  var eLoad = $('img').className = 'tasty';
}

$(document).ready(function(){
  getIt();


});
