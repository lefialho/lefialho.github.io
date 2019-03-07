$(document).ready(function(){

  //DEBOUNCE
  
  debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
		};
  }; 

  
  //GLOBAL VAR
  var itemActive = 'active'
  var headerHeight = $('header').innerHeight(); //innerHeight pega a altura do elemento + padding 
  var windowHeight = $(window).height()
  
  //Window Height
   if((windowHeight) < 700){

      $('.portfolio').css('height', 'auto');
      
      $('.portfolio h1').css({
        'font-size': '5' + 'rem',
        'line-height': '5' + 'rem'
      });

      $('.portfolio p').css({
        'margin-top': '30' + 'px',
        'margin-bottom': '30' + 'px'
      });
     
   }


  // SOFT SCROLL
  
  $('.navigation a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $('html, body').animate({ 
      scrollTop: targetOffset 
    }, 500);

    $('.mobile-btn').toggleClass(itemActive);
    $('.mobile-menu').toggleClass(itemActive);

  });
   
  $('.btn-about').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $('html, body').animate({ 
      scrollTop: targetOffset 
    }, 500);

  });

  $('.logo').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500)
	});
  
  
  //MOBILE-MENU 
  
  $('.mobile-btn').click(function(){
    $(this).toggleClass(itemActive);
    $('.mobile-menu').toggleClass(itemActive);
  });
  
  
  //scroll up button
  $(function(){
    $('[data-button]').hide();

    $(window).scroll(debounce(function() {

      if($(this).scrollTop() > headerHeight) {
        $('[data-button]').fadeIn(300);
      }
      if($(this).scrollTop() < headerHeight) {
        $('[data-button]').fadeOut(300); 
      }

    }));
    
    $('[data-button]').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });
    
  });
    
  //SCROLL ANIMATED
  
  $(function(){
    var $target = $('[data-anime="scroll"],[data-anime-top="scroll-top"],[data-anime-left="scroll-left"],[data-anime-right="scroll-right"],[data-anime-bottom="scroll-bottom"]'),
      animationClass = 'animate',
      offset = $(window).height() * 3/4;
  
    function animeScroll(){
      var documentTop = $(document).scrollTop();
      $target.each(function(){
        var itemTop = $(this).offset().top;
        
        if (documentTop > itemTop - offset){
          $(this).addClass(animationClass);
        } else {
          $(this).removeClass(animationClass);
        }
      });
    }

    animeScroll();

    $(document).scroll(debounce(function(){
      animeScroll();
    }, 200));
    
  })();
  

});