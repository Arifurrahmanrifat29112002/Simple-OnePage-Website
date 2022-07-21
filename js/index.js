$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
    }
    var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
        if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
        }
    }, 40);
    }
    for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
    }
});

// counter end

$(document).ready(function(){

	// /* default settings */

	$('.venobox').venobox({
            framewidth: '700px',
        	frameheight: '500px',
            bgcolor: '#132E63',
            autoplay: 'true',
            popup: 'true',
    }); 

	/* open content with custom settings */

	// $('.venobox_custom').venobox({

	// 	framewidth: '300px',

	// 	frameheight: '250px',

	// 	border: '6px',

	// 	bordercolor: '#ba7c36',

	// 	numeratio: true

	// });



	// /* auto-open #firstlink on page load */

	// $("#firstlink").venobox().trigger('click');

});
// venobox end

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// owl end



               // top up button
$(document).ready(function(){
 
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
   
     // Show button after 100px
     var showAfter = 100;
     if ( $(this).scrollTop() > showAfter ) { 
      $('.back-to-top').fadeIn();
     } else { 
      $('.back-to-top').fadeOut();
     }
    });
    
    
    
   });