$( document ).ready(function() {
    console.log( "ready!" );
});

// var timeout = null;
// var movable = true;
// $(document).on('mousemove', function() {
//     if (timeout !== null) {
//         clearTimeout(timeout);
//     }
//     movable = true;
//     timeout = setTimeout(function() {
//         $('.navbar').css({'transform' : 'translateY(0)'});
//         $('#title-header').css({'opacity' : '1'});
//         $('#bgVideo').css({'transition': '.5s'});
//         $('#bgVideo').css({'transform': 'scale(1.2)'});
//         movable = false;

//     }, 500);
// });
// $(function ()
// {
//     $("#main-cover").mouseenter(function () {
//         console.log("entering");
//         $('#bgVideo').css({'transition': '1s'});
//         $('#bgVideo').css({'transform': 'scale(1.4)'});
    
//     // }).mouseleave(function (){
//     //     $('#bgVideo').css({'transition': '.5s'});
//     //     $('#bgVideo').css({'transform': 'scale(1.2)'});
//     // }).mousemove(function(e){
//     //     $('#bgVideo').css({'transition': '.5s'});
//     //     $('#bgVideo').css({'transform': 'scale(1.4)'});
        
//     //     $('.navbar').css({'transform' : 'translateY(-100%)'});
//     //     $('#title-header').css({'opacity' : '.7'});
//     //     if(movable){
//     //         $('#bgVideo').css({'transition': '0s'});
//     //         $('#bgVideo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()/1.03) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()/1.03) * 100 +'%'}); 
//     //     }
//     //     $('.navbar').css({'transition' : '.5s'});
//     //     var top = (window.pageYOffset);
//     //     console.log(top);
//     //     if(e.pageY < top + 100){
//     //         $('.navbar').css({'transition' : '.1s ease-in'});
//     //         $('.navbar').css({'transform' : 'translateY(0%)'});
//     //     }
//     // });
// });

$(document).scroll(function() {
    $('.navbar').css({'transform' : 'translateY(0)'});
});

// $('.tile')
// // tile mouse actions
// .on('mouseover', function(){
//   $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
// })
// .on('mouseout', function(){
//   $(this).children('.photo').css({'transform': 'scale(1)'});
// })
// .on('mousemove', function(e){
//   $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
// })
// // tiles set up
// .each(function(){
//   $(this)
//     // add a photo container
//     .append('<div class="photo"></div>')
//     // some text just to show zoom level on current item in this example
//     .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
//     // set up a background image for each tile based on data-image attribute
//     .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
// })