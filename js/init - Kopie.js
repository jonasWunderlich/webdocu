jQuery(document).ready(function($) {  



    $(function() {
      var BV = new $.BigVideo();
      BV.init();
      BV.show('http://video-js.zencoder.com/oceans-clip.mp4',{ambient:true});
    //http://archive.org/download/CartridgeGlitch/CartridgeGlitch.mp4
    
      $("#big-video-wrap").click(function() {

        if (BV.getPlayer().paused()) 
          BV.getPlayer().play(); 
        else 
          BV.getPlayer().pause();
        });
    
      });

    


/*
  var myVideo=document.getElementById("video"); 
  console.log($("#video"));
  
  //myVideo.controls = true;
  //myVideo.loop = true;

  myVideo.addEventListener('ended', nextThingToDo, false);
  
  $("#b_jump").click(function() {
    myVideo.currentTime += 20;
  });
  
  $("#video").click(function() {
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
  });

  function nextThingToDo()
  {
  
    $("#video").removeClass();
    $("#video").addClass("hidden");
    
    links = $("<div>");
    links.addClass("links");
    
    link1 = $("<p>");
    link1.text("Imaginary Forces");
    link1.click(function() {
      myVideo.src = "Chrome_ImF.mp4";
      myVideo.play();
      links.remove();
      $("#video").removeClass();
    })
    
    link2 = $("<p>");
    link2.text("Chrome Icon");
    link2.click(function() {
      myVideo.src = "chromeicon.mp4";
      myVideo.play();
      links.remove();
      $("#video").removeClass();
    })
    
    link3 = $("<p>");
    link3.text("Bick Buck Bunny");
    link3.click(function() {
      myVideo.src = "big_buck_bunny_480p_h264.mov";
      myVideo.play();
      links.remove();
      $("#video").removeClass();
    })
         
    links.append($(link1));
    links.append($(link2));
    links.append($(link3));
    $("#content").append($(links));
  
  }
  
  function makeBig() { 
    myVideo.width=560; 
  }

*/

});