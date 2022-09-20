document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = function() {myFunction()};

  let header = document.getElementById("header-redesigned");
  let AnnBar = document.getElementById("marquee-announcement-bar");
  let sticky = header.offsetTop;
  let AnnBarHeight = 0;

  if (AnnBar) {
    AnnBarHeight = AnnBar.offsetHeight
  }

  function myFunction() {
    if (window.scrollY >= AnnBarHeight) {
      header.classList.add("sticky");
      header.classList.add("active");
    } else {
      header.classList.remove("sticky");
      header.classList.remove("active");
    }
  }

  $('.search-overlay__close').on('click', function () {
    hideSearch();
  });
  $(document).on('click', '[data-show-search-trigger]', function () {
    showSearch();
  });

  function showSearch() {
    $('[data-show-search-trigger]').addClass('is-active');

    if (Shopify.theme_settings.search_layout == 'overlay') {
      $('[data-search-type="' + Shopify.theme_settings.search_layout + '"]').toggleClass('is-opened');
      $('.search-form .search__fields input[type="text"]').focus();
    } else {
      $.fancybox.open($('.js-search-popup'), {
        baseClass: 'search__lightbox',
        hash: false,
        infobar: false,
        toolbar: false,
        loop: true,
        smallBtn: true,
        mobile: {
          preventCaptionOverlap: false,
          toolbar: false
        },
        beforeClose: function beforeClose() {
          $('[data-show-search-trigger]').removeClass('is-active');
        }
      });
    }
  }
  function hideSearch() {
    $('[data-show-search-trigger]').removeClass('is-active');

    if (Shopify.theme_settings.search_layout == 'overlay') {
      $('[data-search-type="' + Shopify.theme_settings.search_layout + '"]').removeClass('is-opened');
    } else {
      $.fancybox.close($('[data-search-type="' + Shopify.theme_settings.search_layout + '"]'));
    }
  }
})