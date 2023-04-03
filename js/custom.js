
// Js Documents

// Table of contyent
// 1.  vars and inits
// 2.  Inits Menu
// 3.  Init Timer
// 4.  Init Favorite
// 5.  Init Isotope Filtering
// 6.  Init Slider




jQuery(document).ready(function($)
{
     "user strict";

     // vars and Inits

     var mainSlider = $('.main_slider');
     var hamburger = $('.hamburger_container');
     var menu = $('.hamburger_menu');
     var menuActive = false;
     var hamburgerClose = $('.hamburger_close');
     var fsOverlay = $('.fs_menu_overlay');


     initFavorite();
     initIsotopeFiltering();
     initTimer();
     initSlider();


// 2.  Inits Menu


// 3.  Init Timer

function initTimer()
{
    if ($('.timer').length) 
    {

        //var target_date = new Date("May 5, 2021").getTime();
     
        var date = new Date();
        date.setDate(date.getDate() + 3);
        var target_date = date.getTime();


        // variable for time units
        var days, hours, minutes, seconds;
        var d = $('#day');
        var h = $('#hour');
        var m = $('#minute');
        var s = $('#second');

        setInterval(function () 
        {
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;

            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);

            //display result
            d.text(days);
            h.text(hours);
            m.text(minutes);
            s.text(seconds);
            
        }, 1000);
    }
}


// 4.  Init Favorite
function initFavorite()
{
    if($('.favorite').length)
    {
        var favs = $('.favorite');

        favs.each(function()
        {
            var fav = $(this);
            var active = false;
            if(fav.hasClass('active'))
            {
                active = true;
            }
            fav.on('click', function()
            {
                if (active)
                {
                   fav.removeClass('active');
                   active = false 
                }
                else
                {
                    fav.addClass('active');
                    active = true
                }
            });
        });
    }
}


// 5.  Init Isotope Filtering

function initIsotopeFiltering(){
    if ($('.grid_sorting_button').length)
    {
        $('.grid_sorting_button').click(function()
        {
            $('.grid_sorting_button.active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $('.product-grid').isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }
}

// 6.  Init Slider

function initSlider()
{
    if ($('.product_slider').length) 
    {
        var slider1 = $('.product_slider');

        slider1.owlCarousel({
            loop:false,
            dots:false,
            nav:false,
            responsive:{
                0:{items:1},
                480:{items:2},
                768:{item:3},
                991:{items:4},
                1280:{items:5},
                1440:{items:5},
            }
        });
    }
}












});