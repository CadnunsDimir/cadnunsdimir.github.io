$(document).ready(function(){
  var count = 0;
  $("#testeLib").click(function(){
    ++count;
    $(this).text("esse item foi clicado " + count);
  });
});
