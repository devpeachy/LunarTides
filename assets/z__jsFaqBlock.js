"use strict";

Shopify.theme.jsFaqBlock = {
  init: function init($section) {
    let $panel = $section.find('.faq__item-panel')
 	$panel.on('click',function(){
        if($(this).children('.faq__item-answer').css('display')=='none'){
            $(this).addClass('tab--open')
            $(this).children('.faq__item-answer').slideDown()
        }else{
            $(this).children('.faq__item-answer').slideUp(()=>{
                $(this).removeClass('tab--open')
            })
        }
    })
  },
  unload: function unload($section) {
    let $panel = $section.find('.faq__item-panel')
    $panel.off('click');
  }
};