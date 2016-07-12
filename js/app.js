$(function(){
  
  $('#hamburger-icon').click(function(){
    var nav = $("#hamburger-navitems");
    var tspeed = 250;
    if(nav.is(':visible')){
      nav.slideUp(tspeed);
    }
    else{
      nav.slideDown(tspeed);
    }
  })
});

