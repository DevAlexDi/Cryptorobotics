$(document).ready(function () {

    $('.plus').click(function(){
        if($(this).parents('.flex-form-soc').hasClass('opened')){
            $(this).parents('.flex-form-soc').removeClass('opened');
        }
        else{
            $(this).parents('.flex-form-soc').addClass('opened');
        }
    });

   particlesJS('particles-js',
   {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.41688713582503595,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
  );
particlesJS('particles-js-2',
    {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.41688713582503595,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
  );    
    
    
    var slider_resize_flag;
    
    
    if($(window).width() <= 767){
         $('.slider-realiz-init').slick({
            dots: false,
            arrows:true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll:1,
             responsive: [
                {
                  breakpoint: 992,
                  settings: {
                     slidesToShow: 2,
                    slidesToScroll:1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
                  }
                }
            ]

        });
        slider_resize_flag = false;
    }
    else{
        slider_resize_flag = true;   
    }
    $(window).resize(function(){
        if($(window).width() <= 767 && slider_resize_flag){
            $('.slider-realiz-init').slick({
                dots: false,
                arrows:true,
                infinite: false,
                slidesToShow: 4,
                slidesToScroll:1,
                 responsive: [
                    {
                      breakpoint: 992,
                      settings: {
                         slidesToShow: 2,
                        slidesToScroll:1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll:1
                      }
                    }
                ]

            });
            slider_resize_flag = false;
        }
        else if($(window).width() > 767 && !slider_resize_flag){
            $('.slider-realiz-init').slick('unslick');
            slider_resize_flag = true;   
        }
    });
    
    
    /*
   
    
    */
    
    //==============================================

    // счетчик


    counter();
    setInterval(counter, 1000);


    // конец счетчика

    $('.human_wrap').mouseover(function(e) {
      $(this).find('.desc .text').slideDown(300);
    });
    $('.human_wrap').mouseleave(function(e) {
        $(this).find('.desc .text').slideUp(300);
    });

    $('.all_people').click(function(e) {
        e.preventDefault();
        if($(window).width()>767){
            $(this).fadeOut(0,function() {
                $(this).next().slideDown(400);
            });
        }
        else{
            $(this).fadeOut(0,function() {
                $(this).prev().slideDown(400);
                $(this).next().slideDown(400);
            });
        }
    });

    $('.news_item').click(function() {
        var url = $(this).find('a').attr('href');
        window.open(url);
    });

    $('#all_news').click(function(e) {
        e.preventDefault();
        $(this).fadeOut(0,function() {
            $(this).next().slideDown(400);
        });
    });


    $('.faq .answer').on('show.bs.collapse', function(){
        $(this).parents('.faq').addClass('opened');
    });
    $('.faq .answer').on('hide.bs.collapse', function(){
        $(this).parents('.faq').removeClass('opened');
    });

    $('#all_faq').click(function(e) {
        e.preventDefault();
        $(this).fadeOut(0,function() {
            $(this).next('.all_faqs').slideDown(400);
        });
    });
    
    var ctx = document.getElementById("myChart").getContext("2d");
    
   var data = {
        datasets: [{
            data: [40, 30, 9,8,7,3,3],
            borderWidth:0,
            backgroundColor: [
                '#e91d62',
               '#2095f2',
               '#00bcd5',
               '#9c28b1',
                '#019587',
                '#3e50b4',
                '#4baf4f'
            ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            ' ICO',
            ' Founders',
            ' Reserve fund',
            ' Pre-ICO',
            ' Advisers',
            ' Bounty',
            ' Development'
        ]
    };
    
    
    
    
    
    
    var flag_open_lang = true;
    $('.lang-wrapp').click(function(e){
        e.stopPropagation();
        if(flag_open_lang){
            $('.lang-list').fadeIn(300);
            flag_open_lang = false;
        }
        else{
            $('.lang-list').fadeOut(300);
            flag_open_lang = true;
        }
        
    });
    
    $('body,html').click(function(e){
   
        $('.lang-list').fadeOut(300);
        flag_open_lang = true;
    });
    
    
    
    
    var glabal_flag_for_counter = true;
    var win = $(window);
    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .canvas-pos").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).attr("data-anim", "true") : true;
            
            if ($(".canvas-pos").attr('data-anim') == 'true' && glabal_flag_for_counter){ 
            
                var myDoughnutChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: data,
                    options: {
                         responsive: true,
                        cutoutPercentage:55,
                         animation: {
                              duration:2000
                         },
                       
                        legend: {
                            display: false,
                        }

                    }
                });
                glabal_flag_for_counter = false;
            }
            
        })
    }
    
    
    $('.menu-list li a').click(function (e) {
        e.preventDefault;
        if ($(this).attr('href')) {
            var el = $(this).attr('href');
            $('body, html').animate({
                scrollTop: $(el).offset().top
            }, 700);
            return false;
        }
    });
    
  

    var menu_selector = ".menu-list"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
    function onScroll_menu(){
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top - 75 <= scroll_top && target.position().top + target.outerHeight() > scroll_top - 75) {
                $(menu_selector + " li.active").removeClass("active");
                $(this).parent().addClass("active");
            } else {
                $(this).parent().removeClass("active");
            }
        });
    }
    
    scrFunc();
    $(window).scroll(function () {
        onScroll_menu();
        scrFunc();
        if($(window).width()>991){
            if ($(window).scrollTop() > 74) {
                $(".header-nav").addClass("scrolled");
            }
            else{
                $(".header-nav").removeClass("scrolled");
            }
        }
        else{
            $(".header-nav").removeClass("scrolled");
        }
        
        
        if ($(window).scrollTop() >= 300) {
            $(".every-time-scrolled").addClass("js-fixed");
            $(".every-time-scrolled").addClass("scrolled");
        }
        else{
            $(".every-time-scrolled").removeClass("js-fixed");
        }
    });
    
    if($(window).width()>991){
        if ($(window).scrollTop() > 0) {
            $(".header-nav").addClass("scrolled");
        }
        else{
            $(".header-nav").removeClass("scrolled");
        }
    
    }
    else{
        $(".header-nav").removeClass("scrolled");
    }
    
    if ($(window).scrollTop() >= 300) {
        $(".every-time-scrolled").addClass("scrolled");
        $(".every-time-scrolled").addClass("js-fixed");
    }
    else{
        $(".every-time-scrolled").removeClass("js-fixed");
    }

    
    $('.iframe').click(function(){
        $('#modal-movie').modal('show');
        $('iframe').attr({'src':'https://www.youtube.com/embed/Io6e_dsLnVE'});
    });
    
    $('#modal-movie').on('hidden.bs.modal', function () {
        $('iframe').attr({'src':''});
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    

});

function counter() {
    var end = 1519880000;
    var now = Math.round(new Date().getTime() / 1000);
    var diff = end - now;
    var days = parseInt(diff/86400);
    var hours = parseInt((diff - (days * 86400))/3600);
    var minutes = parseInt((diff % 3600) / 60);
    var seconds = parseInt(diff % 60);
    
    if(days >=0||hours>=0||minutes>=0||seconds>=0){
        if(days < 10){
            $('.main-counter-wr .d').text('0'+days);
        }
        else {
            $('.main-counter-wr .d').text(days);
        }
        if(hours < 10){
            $('.main-counter-wr .h').text('0'+hours);
        }
        else{
            $('.main-counter-wr .h').text(hours);
        }

        if(minutes < 10){
           $('.main-counter-wr .m').text('0'+minutes);
        }
        else{
           $('.main-counter-wr .m').text(minutes);
        }
        if(seconds < 10){
           $('.counter-velue .s').text('0'+seconds);
        }
        else{
            $('.counter-velue .s').text(seconds);
        }
    }
    
    
    
    
   
    
    
}
