$(document).scroll(function() {
    $('#top-nav').toggleClass('nav-scrolled', $(this).scrollTop() > 50);
    // $nav.css({"display": $(this).scrollTop()>1 ? "block":"none"});
});
