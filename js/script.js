$(document).scroll(function() {
    $('#main > #content > #hello > #scroll-me').addClass('scroll-hidden', $(this).scrollTop() > 1);
    $('#top-nav').toggleClass('nav-scrolled', $(this).scrollTop() > 80);
});
