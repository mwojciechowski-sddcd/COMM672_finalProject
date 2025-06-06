$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $('.accordion-header').click(function() {
        $('.accordion-content').slideUp();
        $(this).next('.accordion-content').slideDown();
    });
});