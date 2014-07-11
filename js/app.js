// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('.results').hide();
$('#contactFormModal').submit(function(e){
  e.preventDefault();
  $.ajax({
    type : 'POST',
    cache : false,
    url : "lib/contact.php",
    data : 'id=contact_form'+$(this).serialize(),
    success : function(msg) {
      $('#contact-form-error').hide();
      $('#contac-form-thanks').show();
      console.log(msg);
    },
    error : function(error) {
      $('#form-thanks').hide();
      $('#form-error').show();
      console.log(error);
    }
  });
  return false;
});
