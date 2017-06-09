function chooseglow(){
  console.log("selected1")
  $('#selectglow').attr("style", "display:content-box" );
  $("#selectred").attr("style", "display:none" );
  $("#selectblack").attr("style", "display:none" );
  $("#text-select").text('Glowing');
}

function chooseblack(){
  console.log("selected 2");
  $('#selectglow').attr("style", "display:none" );
  $("#selectblack").attr("style", "display:content-box" );
  $("#selectred").attr("style", "display:none" );
  $("#text-select").text('Black');
}
function choosered(){
  console.log("selected 3");
  $('#selectglow').attr("style", "display:none" );
  $("#selectblack").attr("style", "display:none" );
  $("#selectred").attr("style", "display:content-box" );
  $("#text-select").text('Crepuscular');
}
