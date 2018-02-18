//MENU BUTTON
var button = document.querySelector('button');

button.addEventListener('click', showMenu);

function showMenu() {
	if(window.pageYOffset > 1) {
		$('#upbutton').fadeToggle('fast');
	}
	var nav = document.querySelector('nav');
	var body = document.querySelector('body');
	nav.classList.toggle('show');
	body.classList.toggle('overflow-hidden');
		
}

function hideMenu() {
	var nav = document.querySelector('nav');
	var body = document.querySelector('body');
	nav.classList.remove('show');
	body.classList.remove('overflow-hidden');
}

//ANCHORS
function slowScroll(id) {
	var offset = 0;
	if ($(window).innerWidth() < 768) {
		offset = 63;
	} else {
		offset = 0;
	}

	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	return false;
}

//MENU HAMBURGER
// if ($('a').length) {
// 	$('a').on('click', function() {
// 		$(this).each(hideMenu());
// 	});
// }

if ($('a').length) {
	$('a').on('click', hideMenu);
}


//SHOW BUTTON UP
$(window).scroll(function() {
	if($(this).scrollTop() > 1) {
		$('#upbutton').fadeIn();
	} else {
		$('#upbutton').fadeOut();
	}
});
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1) {
//         if ($('#upbutton').is(':hidden')) {
//             $('#upbutton').css({opacity : 0.9, zIndex: 1}).fadeIn('fast');
//         }
//     } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
// });
    // $('#upbutton').click(function() {
    //     $('html, body').stop().animate({scrollTop : 0}, 300);
    // });

//HEADER CHANGE BACKGROUND COLOR WHEN SCROLL
// if ($(window).scroll()>20 && $(window).innerWidth() < 768 ) {
// 	$('header').add('default');
// } else {
// 	$('header').remove('default');
// }
$(window).scroll(function(){
    if ($(window).scrollTop()) {
        $('.header').addClass('default');
    }
    else {
        $('.header').removeClass('default')
    }
});
