$(document).ready(function() {
    $('.arrow-btn').click(function() {
        $(this).toggleClass('transform rotate-180 animate-bounce');
        $(this).prev().slideToggle('slow');
    });

    // $('.exp-box').hover(function() {
    //     $(this).children().last().toggleClass('animate-bounce');
    // })
})