$(document).mousemove(function(e) {
    window.x = e.pageX;
    window.y = e.pageY;
});







$(window).load(function() {  

  //sxsw.init();

  initVideo();
  startIntro();

  $("#button_contact").click(function() {
    $("#impressum").toggle();
  })

  resizeImage();
  resizeMap();
  //$("#menupic").animate({opacity:1},2000);

  $("area").click(function(){

    var title = $(this).attr("alt");
    if (title != lastMenuItem) {
      $("#infomedia").empty();
      // Titel setzen 
      $("#infotitle").text(title);
      lastMenuItem = title;
      // Video einbetten
      if ($(this).attr("media").substr(-3) == "jpg" || $(this).attr("media").substr(-3) == "gif") {
        $("#infomedia").append("<img src='"+$(this).attr("media")+"'' >");
      }
      else if ($(this).attr("media").substr(-3) == "mp4") {
        var $v_preview = $("<video autoplay loop>");
        $v_preview.attr("id","previewvideo");
        $v_preview.append("<source src='"+$(this).attr("media")+"' type='video/mp4' />");
        $("#infomedia").append($v_preview);
      }

      // Panel platzieren
      $("#infopanel").css({"margin-left": (x-50), "margin-top":(y-250)});
      $("#infopanel").attr("vid",$(this).attr("vid"));
      // Panel einblenden
      $("#infopanel").fadeIn("slow");
    }
  });

  $("#infopanel").on( "click", function() {
    $("#infopanel").fadeOut("slow")
    $("#startmenu").fadeOut("slow",docustart($("#infopanel").attr("vid")));
    $('#audio').get(0).pause();
  });


  $(window).resize(function() {
    resizeImage();
    resizeBackgroundimage(sxsw);
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









/*
window.onload = function() {
  var pElement = document.getElementById("myVideo");

  setTimeout(function() {
    pElement.load();
    setTimeout(function() {
      pElement.play();
    }, 500);
  }, 500);

};
*/