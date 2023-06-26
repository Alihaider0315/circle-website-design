$(document).ready(function(){


// Hero Slider

$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    items : 1,
    dots : false,
    smartSpeed : 1000,
    navText : ['PREV' , 'NEXT'],
    nav:true,
    responsive:{
        0:{
            
           nav:false,
        },
        768:{
            nav : true,
        }
    }
});

// Counter Box
let display = document.querySelectorAll(".counter");
let interval = 4000;

display.forEach((display) =>{

    let startvalue = 0;
    let endvalue = parseInt(display.getAttribute("data-val"));
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval(function(){

        startvalue +=1;
        display.textContent = startvalue;
        if(startvalue == endvalue){
            clearInterval(counter);
        }
    },duration)

});

// Project Slider

$('#project-slider').owlCarousel({
    loop:true,
    margin:24,
    dots : false,
    nav : false,
    smartSpeed : 1000,
    nav:true,
    navText : ['PREV' , 'NEXT'],
    responsive:{
        0:{
           items : 1,
           nav : false,
           margin : 0 ,
        },
        768:{
            items : 2,
            
        },
        1140:{
            items : 2,
            center : true,
        }
    }
});

// Review Slider

$('#review_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots : true,
    items : 1,
    smartSpeed : 800,
});

})