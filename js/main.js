var swiper = new Swiper(".product", {
  slidesPerView: 6,
  autoplay: {
    delay: 1000,
    },
  spaceBetween: 30,
  pagination: {
    el: ".product .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    567: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    767: {
        slidesPerView: 4,
        spaceBetween: 15,
    },
    991: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    1199: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".slide", {
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
    },
  pagination: {
    el: ".slide .swiper-pagination",
    clickable: true,
  },
});

(function(){
    var doc = document.documentElement;
    var w = window;

    var curScroll = prevScroll = w.scrollY || doc.scrollTop;
    var curDirction = prevDirection = 0;

    var header = document.getElementById('side-header');

    var threshold = 100;
    var toggled;

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            curDirction = 2;
        }
        else {
            curDirction = 1;
        }

        if(curDirction !== prevDirection) {
            toggled = toggleHeader();
        }

        if(toggled) {

            prevDirection = curDirction;
        }
        prevScroll = curScroll;
    };

    var toggleHeader = function() {
        toggled = true;
        if(curDirction === 2 && curScroll > threshold) {
            header.classList.add('hide');
        }
        else if (curDirction === 1) {
            header.classList.remove('hide');
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener("scroll",checkScroll);



    //for mobile navbar
let menu = document.querySelector("header .box .open")
let nav = document.querySelector("header .menu ul")
let close = document.querySelector("header .close")
const popup = document.querySelector(".popup")
let list = document.querySelector("header .menu .list")


menu.onclick = function() {
  nav.classList.add("open");
  popup.classList.add("open");
  close.classList.add("open");
  list.classList.add("open");
  document.body.classList.add('ovh');
}

close.onclick = function() {
  nav.classList.remove("open");
  popup.classList.remove("open");
  close.classList.remove("open");
  list.classList.remove("open");
  document.body.classList.remove('ovh');
}

popup.onclick = function() {
  popup.classList.remove("open");
  nav.classList.remove("open");
  close.classList.remove("open");
  list.classList.remove("open");
  document.body.classList.remove('ovh');
}

$('.hero-btn').click(function(){
    if(!$('.hero-btn').parent().hasClass('active')){
      $(this).parent().stop().addClass('active');
      setTimeout(function(){  
        $('.hero-btn').parent().removeClass('active'); 
      }, 2000);
    }
  });
})();


AOS.init();


