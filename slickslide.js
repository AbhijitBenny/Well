$('.carousel_services').slick({
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1000,
responsive: [
{
    breakpoint: 9999,
    settings: {
      slidesToShow: 4,
      autoplay: true,
      arrows: true
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }

]
});

$('.carousel_price').slick({
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
responsive: [
{
    breakpoint: 9999,
    settings: {
      slidesToShow: 4,
      autoplay: false,
      arrows: false
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }

]
});

  let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
    // Get the button
    let mybutton = document.getElementById("myBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
    

  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidest");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.getElementById('accordionExample');
    const items = accordion.querySelectorAll('.accordion-collapse');

    accordion.addEventListener('hide.bs.collapse', (event) => {
      // Check if there's only one panel open
      const openItems = Array.from(items).filter(item => item.classList.contains('show'));
      if (openItems.length === 1) {
        event.preventDefault(); // Prevent collapsing the last open panel
      }
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.getElementById('accordionExample');
    accordion.addEventListener('show.bs.collapse', () => {
      // Close all panels except the one being opened
      const openItems = accordion.querySelectorAll('.accordion-collapse.show');
      openItems.forEach(item => item.classList.remove('show'));
    });
  });


// Select all accordion buttons
const accordionButtons = document.querySelectorAll('.accordion-button');

// Add event listener to each accordion button
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the aria-expanded attribute
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
  });
});

$(".sliderslider").slick({

slidesToShow: 6,
infinite: true,
autoplay: true,
autoplaySpeed: 500,
responsive: [{

    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: true
    }

  }, {

    breakpoint: 300,
    settings: "unslick" // destroys slick

  }]
});
  