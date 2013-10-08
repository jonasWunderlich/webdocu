var volume    = 0;
var nextPlace = 0;
var prevPlace = 0;
var lastMenuItem = "";


$(document).mousemove(function(e) {
    window.x = e.pageX;
    window.y = e.pageY;
});

jQuery(window).resize(function() {
  resizeImage();
});

jQuery(document).ready(function($) {  

  $("#fastcontact").click(function() {
    console.log("sdf");
    $("#impressum").toggle();
  })

  //addCastForwardLinks();

  $("#menupic").load(function() {
    resizeImage();
    resizeMap();
    $(this).animate({opacity:1},2000);
  });  

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
        var $v_preview = "<video autoplay loop><source src='vids/"+$(this).attr("media")+"' type='video/mp4' /></video>"
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
  $margin_top = ($document_height-$("#menupic").height())/2;
  $("#startmenu").css("height", $document_height + "px");
  $("#menupic").css("margin-top",$margin_top);
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














  

  



  

  
  

  
  
  





















