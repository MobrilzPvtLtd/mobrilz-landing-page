const owl = $('.owl-carousel');
$(function () {

    owl.owlCarousel({
        autoplay: 2000,
        loop: true,
        center: false,
        items: 1,
        // onInitialized: counter,
        // onTranslated: counter,
        dots: false,
		nav: false,
        responsive: {
            500: {
                margin: 20,
                nav: true,
                items: 2
            },
            1000: {
                margin: 40,
                stagePadding: 0,
                nav: true,
                items: 3
            }
        }
    });
});
// let currentCount;
// let currentIndex;
// function counter(event) {
//     currentCount = event.item.count;
//     currentIndex = (event.item.index + 1) - 6;
//     if (currentIndex > currentCount) {
//         currentIndex == currentIndex ? currentIndex - currentCount : currentIndex
//     }
//     $('#counter').html("item " + currentIndex + " of " + currentCount)
// }

$('.customer-btn-next').click(function () {
    owl.trigger('next.owl.carousel');
})
$('.customer-btn-prev').click(function () {
    owl.trigger('prev.owl.carousel');
})


const owl2 = $("#carousel").owlCarousel({
    // autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    // margin: 20,
    autoplay: true,
    loop: true,
    center: false,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });


  $('.testimonial-btn-next').click(function () {
    owl2.trigger('next.owl.carousel');
})
$('.testimonial-btn-prev').click(function () {
    owl2.trigger('prev.owl.carousel');
})

// for contact page carosual 

$("#carouselContact").owlCarousel({
  // autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  // margin: 20,
  autoplay: false,
  loop: false,
  center: false,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
      margin: 20,
    },

    600: {
      items: 2,
      margin: 15,
      stagePadding: 0,
    },

    1024: {
      items: 3,
      margin: 20,
      stagePadding: 0,
    },

    1366: {
      items: 3,
      margin: 20,
      stagePadding: 0,
    }
  }
});