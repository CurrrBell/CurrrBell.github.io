$(document).scroll(function() {
    $('#top-nav').toggleClass('nav-scrolled', $(this).scrollTop() > 1);
    // $nav.css({"display": $(this).scrollTop()>1 ? "block":"none"});
});
