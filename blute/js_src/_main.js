/**
 * Created by Administrator on 2017-08-04.
 */

$(function(){

  var scrollDelta = 0;

  $(window).on('mousewheel', function(e){

    if(e.originalEvent.wheelDelta < 0){

      scrollDelta += e.originalEvent.wheelDelta;

    } else {

      scrollDelta += e.originalEvent.wheelDelta;

    }

    if( scrollDelta >=0 ){

      scrollDelta = 0;

    } else if( scrollDelta <= -($('.menu-list').offset().left + $('.menu-list').width()) ){

      scrollDelta = -($('.menu-list').offset().left + $('.menu-list').width());

    }

    var tr = 'translateX(' + scrollDelta + 'px)';
    $('.menu-list').css({
      transform:tr
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

  //$('.menu-list-link').on()

});