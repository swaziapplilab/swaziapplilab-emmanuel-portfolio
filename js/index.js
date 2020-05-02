$(document).ready(() => {

  let scroll = $(window).scrollTop();
  if (scroll > 100) {
    $("header").css("background", "#1f1f1f");
    $("header").css("height", "75px");
    $(".nav").css("max-width", "95vw");
  }
  else {
    $("header").css("background", "transparent");
    $("header").css("height", "125px");
    $(".nav").css("max-width", "1000px");
  }

  // Background change on scroll
  $(window).scroll(() => {
    scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("header").css("background", "#1f1f1f");
      $("header").css("height", "75px");
      $(".nav").css("max-width", "95vw");
    }
    else {
      $("header").css("background", "transparent");
      $("header").css("height", "125px");
      $(".nav").css("max-width", "1000px");
    }
  });

  $('.nav-toggler').click(e => {
    const left = document.querySelector('.nav-menu').style.left;
    if (left === "0px") $(".nav-menu").css("left", "-100vw");
    else $(".nav-menu").css("left", "0px");
  });

  $('.nav-item').click(e => {
    const left = document.querySelector('.nav-menu').style.left;
    if (left === "0px") $(".nav-menu").css("left", "-100vw");
  });







  // GSAP Timeline animation

  const { TimelineMax, TweenMax } = require('gsap');
  const timeline = new TimelineMax();

  timeline.from('.nav-brand', {
    delay: 1,
    duration: 1,
    opacity: 0,
  });

  timeline.from('.nav-item', {
    translateY: -300,
    stagger: { amount: .5, from: 'end' }
  });

  let offset = 10;

  timeline.from('.blob-1', {
    duration: .5,
    x: -500,
    onComplete: function () {
      setInterval(() => {
        offset *= - 1;
        TweenMax.to('.blob-1', 2, { y: offset, animationIterationCount: 'infinite' });
      }, 2000);
    }
  });

  timeline.from('.blob-2', {
    duration: .5,
    y: -500
  });

  // $('#skills-button').click(e => {
  //   console.log("Hey");
  //   TweenMax.from('.tech', {
  //     delay: 1,
  //     opacity: 0,
  //     stagger: {
  //       amount: 5,
  //     }
  //   })
  // });

  // Typed
  const Typed = require('typed.js');

  setTimeout(() => {
    var typed1 = new Typed('.typed-skills-1', {
      strings: ["Hi, I am Emmanuel Nduwa,"],
      typeSpeed: 100,
      loop: false,
      showCursor: false
    });

  }, 4000);

  setTimeout(() => {
    var typed2 = new Typed('.typed-skilled-2', {
      strings: ["Mobile Developer", "Web Developer", "Google Cloud Specialist", "IT Technical Support"],
      typeSpeed: 30,
      loop: true,
      loopCount: Infinity,
    });
  }, 8000);

});