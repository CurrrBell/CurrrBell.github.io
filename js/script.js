$(document).scroll(function() {
    $('#main > #content > #hello > #scroll-me').addClass('scroll-hidden', $(this).scrollTop() > 1);
    $('#top-nav').toggleClass('nav-scrolled', $(this).scrollTop() > 80);
});

// Scrolly.
  $(window).load(function() {

    var x = parseInt($('.content-wrapper').first().css('padding-top')) + 50;

    $('#nav a, .scrolly').scrolly({
      speed: 1000,
      offset: x
    });

  });

$('#submit').click(function(){

  var ONE_HOUR = 60 * 60 * 1000;
  var name = $('#name').val();
  var email = $('#email').val();
  var subject = $('#subject').val();
  var message = $('textarea#message').val();

  if(!(name == "" || email == "" || subject == "" || message == "")){
    var now = new Date();

    var key = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString() + email;

    firebase.database().ref('messages/' + key).set({
      timestamp : now.getTime(),
      name : name,
      email : email,
      subject : subject,
      message : message
    });

    $('#message-form').reset();
  }
});
