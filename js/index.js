$(window).scroll(function(){
	if($(window).scrollTop() < $('#portfolio').position().top - 110){
    $('#home').addClass('active');
    $('#projects').removeClass('active');
    $('#contact_me').removeClass('active');
  }else if($(window).scrollTop() < $('#contact').position().top - 100){
    $('#projects').addClass('active');
    $('#home').removeClass('active');
    $('#contact_me').removeClass('active');
  }else{
    $('#contact_me').addClass('active');
    $('#home').removeClass('active');
    $('#projects').removeClass('active');
  }
});
