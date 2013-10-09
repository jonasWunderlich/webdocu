
$(window).load(function() {  

  sxsw.init();

  $("#button_contact").click(function() {
    $("#impressum").toggle();
  })

  $(window).resize(function() {
    resizeBackgroundimage(sxsw);
  });

  $('#videogo').click(function() {
  window.location = 'video.html'
  return false;
});

});