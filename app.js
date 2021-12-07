$(document).ready(function() {

    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 700)
            $(".navbarnav").addClass("active");
    });


    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 180)
            $(".langage").addClass("active");
    });


    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 700)
            $("#arrowup").addClass("active");
    });

});