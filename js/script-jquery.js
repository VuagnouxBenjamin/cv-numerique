$(document).ready(function() {
    $('.arrow-btn').click(function() {
        $(this).prev().slideToggle('slow');
    });
})