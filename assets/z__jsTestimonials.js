"use strict";

Shopify.theme.jsTestimonials = {
  init: function init($section) {
    this.createSlider();
  },
  createSlider: function createSlider() {
    var $testimonialSlider = $('[data-testimonial-slider]').flickity({
      wrapAround: true,
      initialIndex: 1,
      prevNextButtons: false,
      pageDots: false,
      watchCSS: true
    }); // Reset layout to avoid collapsing issues

    setTimeout(function () {
      $testimonialSlider.flickity('resize');
    }, 500);
    $('body').on('click', '.testimonial__nav--prev', function () {
      $testimonialSlider.flickity('previous');
    });
    $('body').on('click', '.testimonial__nav--next', function () {
      $testimonialSlider.flickity('next');
    });
  },
  blockSelect: function blockSelect($section, blockId) {
    var $testimonialSlider = $section.find('[data-testimonial-slider]');
    var slideIndex = $('#shopify-section-' + blockId).data('testimonial-index');
    $testimonialSlider.flickity('select', slideIndex, true, true);
  },
  unload: function unload($section) {
    var $slider = $section.find('.flickity-enabled');
    $slider.flickity('destroy');
    $('.testimonial__nav--prev').off();
    $('.testimonial__nav--next').off();
  }
};
 
  $(document).ready(function(){
      $(function(){
                $('.stars').stars();
            });
  //ES5
$.fn.stars = function() {
    return $(this).each(function() {
        var rating = $(this).data("rating");
        var fullStar = new Array(Math.floor(rating + 1)).join('<i class="fas fa-star"></i>');
        var halfStar = ((rating%1) !== 0) ? '<i class="fas fa-star-half-alt"></i>': '';
        var noStar = new Array(Math.floor($(this).data("numStars") + 1 - rating)).join('<i class="far fa-star"></i>');
        $(this).html(fullStar + halfStar + noStar);
    });
}

//ES6
$.fn.stars = function() {
    return $(this).each(function() {
        const rating = $(this).data("rating");
        const numStars = $(this).data("numStars");
        const fullStar = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
        const halfStar = (rating%1!== 0) ? '<i class="fas fa-star-half-alt"></i>': '';
        const noStar = '<i class="far fa-star"></i>'.repeat(Math.floor(numStars-rating));
        $(this).html(`${fullStar}${halfStar}${noStar}`);
    });
}

  });
   
