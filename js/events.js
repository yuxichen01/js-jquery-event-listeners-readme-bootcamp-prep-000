//define functions here
function getIt() {
 $('p').on('click',function() {
   alert('Hey!');
 });
}
function frameIt() {
  $('img').on('load',function() {
    $('img').addClass('tasty');
  });
}
function pressIt() {
  $('#typing').on('keydown',function(event) {
    if (event.which === 71) {
      alert('Thats the G spot');
    }
  });
}
$(document).ready(function(){
// call functions here

});
