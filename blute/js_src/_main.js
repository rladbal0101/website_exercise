/**
 * Created by Administrator on 2017-08-04.
 */

$(function(){

  var scrollDelta = 0;

  $('.main-bg .bg-each').hide();
  $('.main-bg .bg-each').eq(0).show();

  $(window).on('mousewheel', function(e){

    scrollDelta += e.originalEvent.wheelDelta;

    if( scrollDelta >=0 ){

      scrollDelta = 0;

    } else if( scrollDelta <= -($('.menu-list').width() - $(window).width()) ){

      scrollDelta = -($('.menu-list').width() - $(window).width());

    }
    //console.log(scrollDelta);

    if( 0 >= scrollDelta && scrollDelta >= -240){

      $('.main-bg .bg-each').stop().fadeOut();
      $('.main-bg .bg-each').eq(0).stop().fadeIn();

    } else if( -240 > scrollDelta &&  scrollDelta >= -720 ){

      $('.main-bg .bg-each').stop().fadeOut();
      $('.main-bg .bg-each').eq(1).stop().fadeIn();

    } else if( -720 > scrollDelta && scrollDelta >= -1200 ){

      $('.main-bg .bg-each').stop().fadeOut();
      $('.main-bg .bg-each').eq(2).stop().fadeIn();

    } else if( -1200 > scrollDelta && scrollDelta >= -1780 ){

      $('.main-bg .bg-each').stop().fadeOut();
      $('.main-bg .bg-each').eq(3).stop().fadeIn();

    } else if( -1780 > scrollDelta && scrollDelta >= -2380 ){

      $('.main-bg .bg-each').stop().fadeOut();
      $('.main-bg .bg-each').eq(4).stop().fadeIn();

    }

    $('.menu-list').css({
      transform:'translateX(' + scrollDelta + 'px)'
    });

  });

  var engNum = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];

  $('.menu-list-link').on('mouseenter', function(){

    var num1 = '';

    var indexNumber = $(this).index('.menu-list-link');

    num1 += engNum[indexNumber];

    $(this).children('.menu-list-link-num').html(num1);

  });

  var num = ['01', '02', '03', '04', '05'];

  $('.menu-list-link').on('mouseleave', function(){

    var num2 = '';

    var indexNumber = $(this).index('.menu-list-link');

    num2 += num[indexNumber];

    $(this).children('.menu-list-link-num').html(num2);

  });

});