jQuery(document).ready(function($) {

  var wrap = $('.grid_wrapper');
  wrap.css('position', 'relative');

  if ($.browser.webkit) {

    // lets deal with WebKit. WebKit does not support fractional pixels and rounds all calculations to integers instead, so our
    // below Firefox/IE9 fix won't work as nudging the container by 0.5 would actually result in nudging it by 1px.
    $(window).resize(function() {
      if ($('body').width() % 2 == 0) {
      }
      else {
      }
    });
  }
  else {

    // works in Fox/IE9 (supports fractional pixels)
    // If window width is a fraction then then nudge container by 0.5 of a pixel to insure
    // the position is always a whole number.
    $(window).resize(function() {

      if ($('body').width() % 2 == 0) {
        wrap.css('left', 0);
      }
      else {
        wrap.css('left', 0.5);
      }

    });
  }

  $(window).trigger('resize');
});