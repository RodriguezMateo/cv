function scrollToAnchor(aid){
    const destination = $("#"+ aid);
      $('html').animate({
        scrollTop: destination.offset().top - 40
      },'slow');
  }
  $(document).on('click', '.proyectos-btn', function(){
    scrollToAnchor('home');
  })

  $(document).on('click', '.aboutMe-btn', function(){
    scrollToAnchor('aboutMe');
  })

  $(document).on('click', '.contact-btn', function(){
    scrollToAnchor('contact');
  })

  var i = 0;
    $(window).on("scroll", function(){
        if($(window).scrollTop() + $(window).height() - 100 >= $('#aboutMe').offset().top){
          setTimeout(() => {$('.objectives-card').addClass("on-view");}, 150);
          setTimeout(() => {$('.education-card').addClass("on-view");}, 300);
          setTimeout(() => {$('.lenguage-card').addClass("on-view");}, 550);
          setTimeout(() => {$(".objectives-card").removeClass("on-view");
                            $(".education-card").removeClass("on-view");
                            $(".lenguage-card").removeClass("on-view");
                            }, 1150)
          setTimeout(() => {$(".objectives-card").addClass("on-view-static");
                            $(".education-card").addClass("on-view-static");
                            $(".lenguage-card").addClass("on-view-static");
                            }, 1150)
          

        }
        if($(window).scrollTop() + $(window).height() - 100 >= $('.skills-card').offset().top){
            setTimeout(() => {$('.skills-card').addClass("on-view");}, 250);
            setTimeout(() => {$('.skills-card').removeClass("on-view");}, 750);
            setTimeout(() => {$('.skills-card').addClass("on-view-static");}, 750);
        }
      })
