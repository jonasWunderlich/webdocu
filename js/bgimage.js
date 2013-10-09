var sxsw = {

    full_bleed: function(boxWidth, boxHeight) {	

        // Calculate new height and width...
		
        var imgWidth = 1920;
        var imgHeight = 1080;
        var ratio = imgHeight / imgWidth;
        var bratio = boxHeight / boxWidth;

        if(ratio <= bratio){
            imgHeight = boxHeight;
            imgWidth = imgHeight / ratio;
        }
        else {
        	imgWidth = boxWidth;
            imgHeight = imgWidth * ratio;
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
        
        jQuery("#picpic")
            .width(new_size.width)
            .height(new_size.height);
        
        var br = browserHeight / browserWidth;        
        var vr = 720 / 1280;
        
        if(vr <= br) {
        	var pos = (browserWidth - new_size.width)/2;
        	jQuery("#picpic").css("left", pos);
			jQuery("#picpic").css("top", "0px");
        } else {
        	var pos = (browserHeight - new_size.height)/2;
        	jQuery("#picpic").css("top", pos);
			jQuery("#picpic").css("left", "0px");
        }        
        
    }

};



function resizeBackgroundimage(sxsw) {

    var browserHeight = Math.round(jQuery(window).height());
    var browserWidth = Math.round(jQuery(window).width());
    var new_size = sxsw.full_bleed(browserWidth, browserHeight);

    jQuery("#picpic")
        .width(new_size.width)
        .height(new_size.height);
    
    var br = browserHeight / browserWidth;        
    var vr = 720 / 1280;
    
    if(vr <= br) {
        var pos = (browserWidth - new_size.width)/2;
        jQuery("#picpic").css("left", pos);
        jQuery("#picpic").css("top", "0px");
    } else {
        var pos = (browserHeight - new_size.height)/2;
        jQuery("#picpic").css("top", pos);
        jQuery("#picpic").css("left", "0px");
    }

}