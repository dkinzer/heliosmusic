/**
 * @file
 * Keep things horizontally centered.
 */

jQuery.fn.center = function() {
    this.css({
        'position': 'fixed',
        'left': '50%',
    });
    this.css({
        'margin-left': -this.width() / 2 + 'px',
    });

    return this;
}


$(window).resize(function(){
 $('img#back-ground').center();
 $('div#main').center();
});
$(function(){
  $('img#back-ground').center();
  $('div#main').center();
});
