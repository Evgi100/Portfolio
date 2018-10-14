$(document).ready(function() {
  $(window).on("load", function() {
    $(".loader ").fadeOut(7000);
  });

  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: [
      "Lets build something great together",
      "PSD TO HTML",
      "Wordpress Developer",
      "Website Developer"
    ],
    typeSpeed: 40,
    loop: true,
    startDelay: 1000,
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    //   backDelay: 2000,
    showCursor: false
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });

  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinish = false;
  $(window).scroll(function() {
    if (
      !countUpFinish &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $(".counter").each(function() {
        let elm = $(this);
        let endVal = parseInt(elm.text());

        elm.countup(endVal);
      });

      countUpFinish = true;
    }
  });

  $("[data-fancybox]").fancybox();

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "Linear",
      queue: false
    }
  });

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "Linear",
        queue: false
      }
    });

    return false;
  });

  $("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");

    var targetPosition = $(targetElement).offset().top;

    $("html,body").animate(
      {
        scrollTop: targetPosition - 50
      },
      "slow"
    );
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
