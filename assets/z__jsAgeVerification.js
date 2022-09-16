"use strict";

Shopify.theme.jsAgeVerification = {
    isOpen: false,
    willExpire:1,
    init: function init($section) {
        Shopify.theme.jsAgeVerification = $.extend(this, Shopify.theme.getSectionData($section));
        let $popup = $section.find('[data-age-popup]')
        let $yes_button = $section.find('[data-age-yes]')
        let $no_button = $section.find('[data-age-no]')
        let AgeVerified = Cookies.get('age')
        Shopify.theme.jsAgeVerification.willExpire = this.expire_after;
        if (AgeVerified) {
            if (AgeVerified == "true") {
                return;
            } else {
                Shopify.theme.jsAgeVerification.openWarning($section)
            }
        } else {
            Shopify.theme.jsAgeVerification.open($section)
        }

        $yes_button.on('click', function() {
            Shopify.theme.jsAgeVerification.verify(true)
            Shopify.theme.jsAgeVerification.close($section)
        })
        $no_button.on('click', function() {
            Shopify.theme.jsAgeVerification.verify(false)
            Shopify.theme.jsAgeVerification.openWarning($section)
        })

    },
    openWarning: function openWarning($section) {
        let $popup = $section.find('[data-age-popup]')
        let $warning = $section.find('[data-age-warning]')
        let $content = $section.find('[data-age-content]')
        if (Shopify.theme.jsAgeVerification.isOpen) {
            $content.fadeOut(300, function() {
                $warning.fadeIn(300)
            })
        } else {
            $content.hide()
            $warning.show()
            $popup.fadeIn(0, function() {
                $popup.addClass('open')
                $('body').addClass('has-overlay')

            })
            Shopify.theme.jsAgeVerification.isOpen = true
        }
    },
    verify: function verify(value) {
        let AgeVerified = Cookies.get('age')
        if (AgeVerified) {
            Cookies.set('age', value)
        } else {
            Cookies.set('age', value, {
                expires: Shopify.theme.jsAgeVerification.willExpire
            })
        }
    },
    open: function open($section) {
        let $popup = $section.find('[data-age-popup]')
        $popup.fadeIn(0, function() {
            $popup.addClass('open')
            $('body').addClass('has-overlay')

        })
        Shopify.theme.jsAgeVerification.isOpen = true
    },
    close: function close($section) {
        let $popup = $section.find('[data-age-popup]')
        $popup.removeClass('open')
        $('body').removeClass('has-overlay')
        Shopify.theme.jsAgeVerification.isOpen = false
    },
    unload: function unload($section) {
        let $yes_button = $section.find('[data-age-yes]')
        let $no_button = $section.find('[data-age-no]')
        $yes_button.off()
        $no_button.off()
    }
};