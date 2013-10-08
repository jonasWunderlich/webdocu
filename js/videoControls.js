var BV = new $.BigVideo({useFlashForFirefox:false});
statustext = $("<p>");
statustext.text("loading...");
statustext.addClass('p_status');

var j_steps = 10;
var v_steps = 0.1;






function docustart() {

    $("content").show();
    $("#big-video-wrap").show();

        //initialise Statusbox
    $("#p_status").append($(statustext));
    statustext.css("top",(($(window).height() - statustext.height())/2)+"px");
    
    //initialise first Video
    BV.init();

    var firstVideoUrl = 'vids/'+videos[0].media;
    nextPlace = videos[0].endPos;
    prevPlace = videos[0].startPos;

    BV.show(firstVideoUrl,{ambient:false, altSource:'vids/river.ogv'});

    //BV.show('vids/river.mp4',{ambient:false, altSource:'vids/river.ogv'});
    var volume = getVolume();
    console.log(volume)
    BV.getPlayer().volume(volume);
    BV.getPlayer().loop(false);
    //BV.getPlayer().pause();
            
    //initialise eventListeners    
    //BV.getPlayer().addEvent("timeupdate", bufferVideo);
    BV.getPlayer().addEvent("loadeddata", loadedView);
    BV.getPlayer().addEvent("play", playView);
    BV.getPlayer().addEvent("pause", pauseView);
    BV.getPlayer().addEvent("ended", showLinkedVideos);
    
    BV.getPlayer().addEvent("loadstart", function() {
      statustext.css("display","block");
      statustext.text("lädt");
      $('#big-video-control-progress').width(0);
    });
   
    // Mouse-Click-Event
    $("#big-video-wrap").click(pause);
}












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
          console.log(duration);
        } else {
          showLinkedVideos();
          showStatus("");
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



// Views
function playView() {
  $('#big-video-control-play').css('background-position','-36px');
  $('.links').remove();
}

function loadedView() {
  $('#big-video-control-play').css('background-position','-36px');
  $('.links').remove();
  statustext.fadeOut(400, null);
}
  
function pauseView() {
  $('#big-video-control-play').css('background-position','0px');
}

function showStatus(text,fade) {
  statustext.text(text);
  if(fade)
    statustext.fadeOut(400, null);
}

  
// Menu for next Videos
function showLinkedVideos() {
  $('#big-video-control-play').css('background-position','0px');
  $('.links').remove();
  BV.getPlayer().pause();
  var links = $("<div>");
  links.addClass("links");

  for(var i=0; i<videos.length; i++) {
    if (nextPlace == videos[i].startPos) {
      links.append($(initListItem2(videos[i])));
    }
  }
  var menu_link = $("<p>");
  menu_link.text("Menü");
  menu_link.addClass("link_mainmenu")
  links.append(menu_link);
  menu_link.on( "click", function() {
      $("#startmenu").fadeIn("slow");
      $("content").hide();
      $("#big-video-wrap").hide();
  });

  $("#content").append($(links)); 
  links.css("top",(($(window).height() - links.height())/2-40)+"px");
}

function initListItem2(video) {
  link = $("<p>");
  link.text(video.title);

  console.log(video.media);

  link.click(function() {
    nextPlace = video.endPos;
    prevPlace = video.startPos;
    $('.links').remove();
    BV.show('vids/'+video.media,{ambient:false});
    BV.getPlayer().volume(volume);
    //BV.getPlayer().pause();
    //BV.getPlayer().addEvent("progress", bufferVideo);
  })
  return link;
}


