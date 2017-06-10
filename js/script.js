$(document).ready(function() {
  //http://www.outlier.com/blog/parallax-jquery-quick-and-simple#.WTriVhPyuog
  $(window).on('scroll', function(e) {
    parallaxScroll();
  });

  function parallaxScroll() { //
    var scrolledY = $(window).scrollTop() - $('#anchorpoint').offset().top;
    //console.log(scrolledY);
    var vert1 = 30 - (scrolledY * 0.2); //Had to adjust the way the strings were handled to var's
    $('.vertical').css('top', vert1 + 'px');
    var vert2 = 80 - (scrolledY * 0.9);
    $('.vertical2').css('top', vert2 + 'px');
    //$('.horizontal1').css('left','+' + ((scrolledY*0.2)) + '%');
    //$('.opacity').css('opacity','0' + (scrolledY*0.001));
  }
  /* I decided to put this fixed nav button in javascript-html overwrite since
  the overwrite never matched the native html code. Far easier to control it
  from here. */
  document.getElementById("writeover").innerHTML = '<button id="navbuttonon" onclick="openNav()" class="rounded-circle bg-inverse" type="button">  <span class="navbar-toggler-icon"></span></button>';
});


//I am sure there is better way of doing this than what I did...
//Probably this. function ... sigh...

function chooseglow() {
  console.log("selected1");
  $('#selectglow').attr("style", "display:content-box");
  $("#selectred").attr("style", "display:none");
  $("#selectblack").attr("style", "display:none");
  $("#text-select").text('Glowing');
}

function chooseblack() {
  console.log("selected 2");
  $('#selectglow').attr("style", "display:none");
  $("#selectblack").attr("style", "display:content-box");
  $("#selectred").attr("style", "display:none");
  $("#text-select").text('Black');
}

//I had fun doing this one.  I spent a bit too much on GIMP, tho.
function choosered() {
  console.log("selected 3");
  $('#selectglow').attr("style", "display:none");
  $("#selectblack").attr("style", "display:none");
  $("#selectred").attr("style", "display:content-box");
  $("#text-select").text('Crepuscular');
}


// DO not push that button.  Just don't...
function danger() {
  alert("I told you that it is dangerous!");
}

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("writeover").innerHTML = '<button id="navbuttonoff" onclick="closeNav()" class="rounded-circle bg-inverse" type="button">  <span> &times; </span></button>';

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("writeover").innerHTML = '<button id="navbuttonon" onclick="openNav()" class="rounded-circle bg-inverse" type="button">  <span class="navbar-toggler-icon"></span></button>';

}
/* I have lost countless hours trying to make poster to function like this.
Nothing worked.  I finally had insight to do this way when I realized I could
just rewrite the HTML/DOM whatever I want...Bawhahahaha! You lost, mr.HTML/CSS */

function openVideo() {
  $(".embVideo").html('<video id="showVideo" autoplay controls onended="closeVideo()"><source src="img/FasterIceSwim.mp4"></video>');
}

function closeVideo() {
  $('.embVideo').html('<img onclick="openVideo()" src="img/poster2.png">')
}
