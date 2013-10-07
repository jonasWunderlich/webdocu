// CONTROLS

//Pause by Keyboard and Mouse
function pause() {
  statustext.css("display","block");
  statustext.click(pause);
  if (BV.getPlayer().paused()) {
    BV.getPlayer().play();
    showStatus(">",true);
    playView();
  }    
  else {
    BV.getPlayer().pause();
    showStatus("II",false);
  } 
}

// Keyboard events
$(document).keydown(function(e){
  var j_steps = 5;
  var v_steps = 0.1;
  statustext.css("display","block");
  
  var duration = BV.getPlayer().duration();
  var c_time = BV.getPlayer().currentTime();
  var vol = BV.getPlayer().volume();
  
  //alert(e.keyCode);
  
  switch(e.which) {
    
      case $.ui.keyCode.ENTER:
        BV.getPlayer().currentTime(0);
        BV.getPlayer().play();
        showStatus("re:>",true);
        break;
      
      case $.ui.keyCode.ESCAPE:
        showLinkedVideos();
        showStatus("");
        break;
      
      case $.ui.keyCode.SPACE:
        pause();
        break;
    
      case $.ui.keyCode.LEFT:
        BV.getPlayer().currentTime(c_time-j_steps);
        BV.getPlayer().play();
        showStatus("<<",true);
        $('.links').remove();
        break;
  
      case $.ui.keyCode.UP:
        volume = vol+v_steps;
        BV.getPlayer().volume(vol+v_steps);
        setCookie("volume",volume,7);
        showStatus("vol:"+Math.round(BV.getPlayer().volume()*100)+"%",true);
        break;
  
      case $.ui.keyCode.RIGHT:
        if((duration-c_time)>=j_steps && c_time != 0) {
          BV.getPlayer().currentTime(c_time+j_steps);
          BV.getPlayer().play();
          showStatus(">>",true);
          $('.links').remove();
        }
        break;
  
      case $.ui.keyCode.DOWN:
        volume = vol-v_steps;
        setCookie("volume",volume,7);
        BV.getPlayer().volume(vol-v_steps);
        showStatus("vol:"+Math.round(BV.getPlayer().volume()*100)+"%",true);
        break;
  
      default: showStatus("");
  }
  //e.preventDefault();
});





$(document).mousemove(function(e) {
    window.x = e.pageX;
    window.y = e.pageY;
});