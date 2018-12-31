//define functions here
function getIt() { 
  var pTag = $('p').on('click', function (){
    alert("Hey!");
  });
  
}

function frameIt() {
  $('img').addClass('tasty');
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
});
