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

var helios = {};
helios.get_width = function() {
  if (matchMedia(Foundation.media_queries.large).matches) {
    return 500;
  } else if (matchMedia(Foundation.media_queries.medium).matches) {
    return 350;
  }
  else {
    return 200;
  }};

// {{{1 ITunes Modal
$(function(){
  var width = helios.get_width(),
  src = "http://widgets.itunes.apple.com/widget.html?c=us&brc=FFFFFF&blc=FFFFFF&trc=FFFFFF&tlc=FFFFFFd=t=&m=music&e=album&w=" +
  width + "&h=395&ids=535362219&wt=discovery&partnerId=&affiliate_id=";
    return $('iframe#itunes').attr('src', src).attr('width', width);
});

// {{{1 ITunes Modal
$(function(){
  var width = helios.get_width(),
  src = "http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fsoyhelios&width=" +
  width +  "&height=395&show_faces=false&colorscheme=light&stream=true&border_color&header=false";
    return $('iframe#facebook').attr('src', src).attr('width', width);
});
