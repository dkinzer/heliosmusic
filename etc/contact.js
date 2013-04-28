$('.results').hide();
$('#contact-form').submit(function(e){
  e.preventDefault();
  $.ajax({
    type : 'POST',
    cache : false,
    url : "etc/contact/contact.php",
    data : 'id=contact_form'+$(this).serialize(),
    success : function(msg) {
      $('#form-error').hide();
      $('#form-thanks').show();
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
