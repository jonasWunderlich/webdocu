var sxsw = {

    full_bleed: function(boxWidth, boxHeight) { 

        // Calculate new height and width...
        var imgWidth = 1280;
        var imgHeight = 720;
        var ratio = imgHeight / imgWidth;
        var bratio = boxHeight / boxWidth;

        if(ratio <= bratio){
            imgHeight = boxHeight;
            imgWidth = imgHeight / ratio;
        }
        else {
          imgWidth = boxWidth;
            imgHeight = imgWidth / ratio;
        }
        
        //  Return new size for video
        return {
            width: imgWidth,
            height: imgHeight
           
        };

    },

    init: function() {
      
        var browserHeight = Math.round(jQuery(window).height());
        var browserWidth = Math.round(jQuery(window).width());        
        var new_size = sxsw.full_bleed(browserWidth, browserHeight);
        
        jQuery("video")
            .width(new_size.width)
            .height(new_size.height);
        
        var br = browserHeight / browserWidth;        
        var vr = 720 / 1280;
        
        if(vr <= br) {
          var pos = (browserWidth - new_size.width)/2;
          jQuery("video").css("left", pos);
      jQuery("video").css("top", "0px");
        } else {
          var pos = (browserHeight - new_size.height)/2;
          jQuery("video").css("top", pos);
      jQuery("video").css("left", "0px");
        }        
        
    }

};

jQuery("#logo").load(function($) {
  if (jQuery.browser.msie) {
    //alert("geht");
      //sxsw.init();
    }
});

 jQuery(document).ready(function($) {  
 
    sxsw.init();
  
    jQuery(window).resize(function() {
  
  //alert("geht");
    var browserHeight = Math.round(jQuery(window).height());
    var browserWidth = Math.round(jQuery(window).width());
    var new_size = sxsw.full_bleed(browserWidth, browserHeight);
  
    jQuery("video")
      .width(new_size.width)
      .height(new_size.height);
        
    var br = browserHeight / browserWidth;        
    var vr = 720 / 1280;
        
    if(vr <= br) {
      var pos = (browserWidth - new_size.width)/2;
      jQuery("video").css("left", pos);
      jQuery("video").css("top", "0px");
    } else {
      var pos = (browserHeight - new_size.height)/2;
      jQuery("video").css("top", pos);
      jQuery("video").css("left", "0px");
    }
    });
        
});