var BV;
var statustext;
var j_steps = 10;
var v_steps = 1;

var volume    = 5;
var nextPlace = 0;
var prevPlace = 0;
var lastMenuItem = "";


var introplayed = false;





function initVideo() {

  //initialise Statusbox
  $("#p_status").append($(statustext));
  statustext = $("<p>");
  statustext.text("loading...");
  statustext.addClass('p_status');
  statustext.css("top",(($(window).height() - statustext.height())/2)+"px");

  BV = new $.BigVideo({useFlashForFirefox:false});
  BV.init();
  var volume = 0 //getVolume();
  BV.getPlayer().volume(volume);
  BV.getPlayer().loop(false);
  //initialise eventListeners    
  BV.getPlayer().addEvent("loadeddata", loadedView);
  BV.getPlayer().addEvent("play", playView);
  BV.getPlayer().addEvent("pause", pauseView);

  BV.getPlayer().addEvent("ended", function() {
    if (introplayed) {
      endedView();
    }
    else {
      gotoMainMenu();
    }
  });










  //BV.getPlayer().addEvent("ended", endedView);
  //BV.getPlayer().addEvent("timeupdate", bufferVideo);
  BV.getPlayer().addEvent("loadstart", function() {
    statustext.css("display","block");
    statustext.text("lädt");
    $('#big-video-control-progress').width(0);
  });

  //$("#big-video-control-middle").append("<div id='control_next'>Weiter</div>");


}





function docustart(video_id) {

  //initialise first Video
  var videoUrl = 'vids/'+videos[video_id].media;

  nextPlace = videos[video_id].endPos;
  prevPlace = videos[video_id].startPos;

  BV.show(videoUrl,{ambient:false, altSource:'vids/river.ogv'});
  $("#big-video-wrap").show();
  $("#big-video-control-container").show();
  $(".side_nav").show();

  /* Mouse-Click-Event
  $('body').on("click", function() {
    if (BV.getPlayer().paused()) {
      BV.getPlayer().play();
    }    
    else {
      BV.getPlayer().pause();
    }
  });*/

  $("#button_mainmenu").on("click", function() {
    gotoMainMenu();
  });
  $("#button_next").on("click", function() {
    showLinkedVideos(nextPlace);
    showStatus("");
  });
  $("#button_back").on("click", function() {
    showLinkedVideos(prevPlace);
    showStatus("");
  });
}





function startIntro() {

  //initialise first Video
  var videoUrl = 'vids/13_10_10TRAILER_Intro.mp4';

  BV.show(videoUrl,{ambient:false, altSource:'vids/river.ogv'});
  $("#big-video-wrap").show();
  $("#big-video-control-container").show();
}






// CONTROLS

//Pause by Keyboard and Mouse
function pause() {
  statustext.css("display","block");
  statustext.click(pause);
  if (BV.getPlayer().paused()) {
    BV.getPlayer().play();
    //showStatus(">",true);
    showStatus("",true);
    playView();
  }    
  else {
    BV.getPlayer().pause();
    //showStatus("II",false);
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
        //showLinkedVideos(nextPlace);
        gotoMainMenu();
        break;
      
      case $.ui.keyCode.SPACE:
        //$("#big-video-control-container").toggle();
        pause();
        break;
  
      case $.ui.keyCode.UP:
        volume = vol+v_steps;
        BV.getPlayer().volume(vol+v_steps);
        setCookie("volume",volume,7);
        showStatus("vol:"+Math.round(BV.getPlayer().volume()*100)+"%",true);
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

function endedView() {
  showLinkedVideos(nextPlace);
}

function showStatus(text,fade) {
  statustext.text(text);
  if(fade)
    statustext.fadeOut(400, null);
}

  
// Menu for next Videos
function showLinkedVideos(place) {
  $('#big-video-control-play').css('background-position','0px');
  $('.links').remove();
  BV.getPlayer().pause();
  //$("#big-video-control-container").toggle();
  var links = $("<div>");
  links.addClass("links");

  for(var i=0; i<videos.length; i++) {
    startPositions = videos[i].startPos;  
    if (startPositions.length == undefined) {
      if (place == videos[i].startPos) {
        links.append($(initListItem2(videos[i])));
      }
    }
    else {
      for(var s=0; s<startPositions.length; s++) {
        if (place == startPositions[s]) {
          links.append($(initListItem2(videos[i])));
        }
      }
    }
  }

  //console.log(places[nextPlace]);

  $("#content").append($(links)); 
  links.css("top",(($(window).height() - links.height())/2-40)+"px");
}

function initListItem2(video) {
  link = $("<p>");
  link.text((video.title).toUpperCase());
  link.attr("endpos",video.endPos);
  //console.log(video);  
  $("#big-video-wrap").hide();
  $("#big-video-control-container").hide();

  link.click(function() {
    //console.log(link);
    nextPlace = $(this).attr("endPos");
    prevPlace = video.startPos;
    $('.links').remove();
    BV.show('vids/'+video.media,{ambient:false});
    BV.getPlayer().volume(volume);
    //BV.getPlayer().pause();
    //BV.getPlayer().addEvent("progress", bufferVideo);
    $("#big-video-wrap").show();
    $("#big-video-control-container").show();
  })
  return link;
}





function gotoMainMenu() {
  $("#menupic").animate({opacity:1},2000);
  $("#startmenu").fadeIn("slow");
  $("#big-video-wrap").hide();
  $("#big-video-control-container").hide();
  $(".side_nav").hide();
  $('#audio').get(0).play(); // .animate({volume: 100}, 1000)
  showStatus('');
  BV.getPlayer().pause();
}






/*
function bufferVideo() {
  console.log("__"+this.buffered().end(0));
  if(this.buffered().end(0) > 0) {
    var progress = Math.round(this.buffered().end(0) / this.duration()*100);
    console.log(progress);
    statustext.text(progress);
    
    if((progress>7) && (progress<=100) && this.paused()) {
      BV.getPlayer().play();
      console.log(this.paused());
      BV.getPlayer().removeEvent("progress", bufferVideo);
    }
  }
}*/
