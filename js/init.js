var volume    = 0;
var nextPlace = 0;
var prevPlace = 0;
var lastMenuItem = "";


jQuery(window).resize(function() {
  resizeImage();
});


jQuery(document).ready(function($) {  

  resizeImage();
  resizeMap();

  $("area").click(function(){
    $("#infopanel").fadeOut("slow")
    $("#startmenu").fadeOut("slow",docustart());
  })

  $("area").hover(function(){

    var title = $(this).attr("alt");
    if (title != lastMenuItem) {
      $("#infomedia").empty();
      // Titel setzen 
      $("#infotitle").text(title);
      lastMenuItem = title;
      // Video einbetten
      if ($(this).attr("media").substr(-3) == "jpg") {
        $("#infomedia").append("<img src='img/"+$(this).attr("media")+"'' >");
      }
      else if ($(this).attr("media").substr(-3) == "mp4") {
        var $v_preview = "<video autoplay ><source src='vids/"+$(this).attr("media")+"' type='video/mp4' /></video>"
        $("#infomedia").append($v_preview);
      }
      // Panel platzieren
      $("#infopanel").css({"margin-left": (x-50), "margin-top":(y-250)});
      // Panel einblenden
      $("#infopanel").fadeIn("slow");
    }
  },  function() {
    //$("#infopanel").fadeOut("fast");
  });

});


  
// Bild skalieren und mittig platzieren
function resizeImage () {
  $document_height = $(window).height()
  $("#startmenu").css("height", $document_height + "px");
  $margin_top = ($document_height-$("#startmenu img").height())/2;
  $("#startmenu img").css("margin-top",$margin_top);
}

// Map-Areas mitskalieren
function resizeMap () {
  var ImageMap = function (map) {
    var n,
        areas = map.getElementsByTagName('area'),
        len = areas.length,
        coords = [],
        previousWidth = 1920;
        for (n = 0; n < len; n++) {
          coords[n] = areas[n].coords.split(',');
        }
        this.resize = function () {
            var n, m, clen,
                x = document.body.clientWidth / previousWidth;
            for (n = 0; n < len; n++) {
                clen = coords[n].length;
                for (m = 0; m < clen; m++) {
                    coords[n][m] *= x;
                }
                areas[n].coords = coords[n].join(',');
            }
            previousWidth = document.body.clientWidth;
            return true;
        };
        window.onresize = this.resize;
    },
    imageMap = new ImageMap(document.getElementById('map_ID'));
  imageMap.resize();
  return;
}














  

  



  

  
  

  
  
  


$(document).mousemove(function(e) {
    window.x = e.pageX;
    window.y = e.pageY;
});
















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



