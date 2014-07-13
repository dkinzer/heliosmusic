// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// {{{1 Contact Form Modal
$(function(){
  $('#contact-form-success').hide();
  $('#contact-form-error').hide();
  $('#contact-form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type : 'POST',
      cache : false,
      url : "lib/contact.php",
      data : 'id=contact_form'+$(this).serialize(),
      success : function(msg) {
        $('#contact-form-success').show();
        $('#contact-form-error').hide();
        $('#contact-form').hide();
        console.log(msg);
      },
      error : function(error) {
        $('#contact-form-success').hide();
        $('#contact-form-error').show();
        console.log(error);
      }
    });
    return false;
  });
});

// {{{1 ITunes Modal
$(function(){
  var width = (function(){
    if (matchMedia(Foundation.media_queries.large).matches) {
      return 500;
    } else if (matchMedia(Foundation.media_queries.medium).matches) {
      return 350;
    }
    else {
      return 200;
    }})();

    var src = "http://widgets.itunes.apple.com/widget.html?c=us&brc=FFFFFF&blc=FFFFFF&trc=FFFFFF&tlc=FFFFFFd=t=&m=music&e=album&w=" + width + "&h=395&ids=535362219&wt=discovery&partnerId=&affiliate_id=";
    return $('iframe#itunes').attr('src', src).attr('width', width);
});
