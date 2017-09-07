/**
 * Created by Administrator on 2017-08-16.
 */

$(function(){

  try{
    kissuiScrollAnim.setOption('autoReset', false);
  } catch(e){}

  var currentIndex = 0;
  var nextIndex = 0;

  currentIndex = parseInt(location.hash[location.hash.length-1]-1);

  function init(){

    var sectionLength = $('.section').length;

    for(var i=0; i<sectionLength; i++){

      sectionPosition = (i - currentIndex) * 100;

      $('.section').eq(i).css({left : sectionPosition + '%'});

    }

    // 첫번째 페이지 표시
    $('.gnb-list-item').children().removeClass('on');
    $('.gnb-list-item').eq(currentIndex).children().addClass('on');

  }

  function arrowButton(){

    var arrowIndex = location.hash;
    // 마지막 문자열 잘라내기
    var lastChar = arrowIndex.charAt(arrowIndex.length-1);
    //console.log(lastChar);

    if(lastChar == '1'){

      $('.arrow-button.left').css({display:'none'});
      $('.arrow-button.right').css({display:'block'});

    } else if(lastChar == '5'){

      $('.arrow-button.right').css({display:'none'});
      $('.arrow-button.left').css({display:'block'});

    } else {
      $('.arrow-button.left').css({display:'block'});
      $('.arrow-button.right').css({display:'block'});
    }

  }

  function moveLeft(){
    if(nextIndex >= $('.section').length){
      nextIndex = 0;
    }

    $('.section').each(function(i){

      $('.section').eq(i).stop().animate({
        left : '-=100%'
      }, 2000, 'easeInOutExpo');

    });

    currentIndex = nextIndex;
    nextIndex++;

    location.hash = $('.section').eq(currentIndex).attr('id') + (currentIndex + 1);
    $('.gnb-list-item').children().removeClass('on');
    $('.gnb-list-item').eq(currentIndex).children().addClass('on');

  }

  function moveRight(){

    if(nextIndex <= -1) {
      nextIndex = $('.section').length-1;
    }

    $('.section').each(function(i){

      $('.section').eq(i).stop().animate({
        left : '+=100%'
      }, 2000, 'easeInOutExpo');

    });

    currentIndex = nextIndex;
    nextIndex--;

    location.hash = $('.section').eq(currentIndex).attr('id') + (currentIndex + 1);
    $('.gnb-list-item').children().removeClass('on');
    $('.gnb-list-item').eq(currentIndex).children().addClass('on');

  }

  // 실행부
  init();
  arrowButton();

  // left button
  $('.arrow-button.left').on('click',function(){
    nextIndex = currentIndex - 1;
    if( !$('.section').is(':animated')){
      moveRight();
    }
    // 페이지 바뀔 때 팝업창 닫기
    $('.popup-height').removeClass('on');
    $('.popup-width').removeClass('on');
    arrowButton();
  });

  // right button
  $('.arrow-button.right').on('click',function(){

    nextIndex = currentIndex + 1;
    if( !$('.section').is(':animated')){
      moveLeft();
    }
    // 페이지 바뀔 때 팝업창 닫기
    $('.popup-height').removeClass('on');
    $('.popup-width').removeClass('on');
    arrowButton();
  });

  // index button
  $('.gnb-list-link').on('click', function(){

    currentIndex = $(this).index('.gnb-list-link');
    var sectionLength = $('.section').length;

    for(var i=0; i<sectionLength; i++){

      sectionPosition = (i - currentIndex) * 100;

      $('.section').eq(i).stop().animate({left : sectionPosition + '%'});

    }

    location.hash = $('.section').eq(currentIndex).attr('id') + (currentIndex+1);
    $('.gnb-list-item').children().removeClass('on');
    $('.gnb-list-item').eq(currentIndex).children().addClass('on');

    arrowButton();
  });

  // 마우스 오버시 중복 방지하기 위한 변수 선언
  var tID1, tID2;

  $('.square.small').on('mouseenter', function(){

    $(this).children('.small-text.change').css({display:'none'});
    $(this).children('.hidden-text-wrap').addClass('on');

    tID1 = setTimeout(function(){
      // 왼쪽,오른쪽줄(시작) 모션적용 클래스
      $('.hidden-text-wrap').addClass('frame1');
      $('.hidden-text').addClass('frame3');

    }, 0);

    tID2 = setTimeout(function(){
      // 아래,윗줄(끝) 모션적용 클래스
      $('.hidden-text-wrap').addClass('frame2');
      $('.hidden-text').addClass('frame4');

    }, 300);

  });

  $('.square.small').on('mouseleave', function(){
    clearTimeout(tID1);
    clearTimeout(tID2);

    $(this).children('.hidden-text-wrap').removeClass('on');
    $(this).children('.popup-btn-more').removeClass('on');
    $(this).children('.small-text.change').css({display:'block'});
    $('.hidden-text-wrap').removeClass('frame1');
    $('.hidden-text-wrap').removeClass('frame2');
    $('.hidden-text').removeClass('frame3');
    $('.hidden-text').removeClass('frame4');

  });

  $('.hidden-text-wrap.more').on('click', function(){

    $('.popup-height').removeClass('on');
    $('.popup-width').removeClass('on');
    $(this).next('.popup-height').addClass('on');
    $(this).next('.popup-width').addClass('on');

  });

  $('.popup-btn-close').on('click',function(){

    $(this).parents('.popup-width').removeClass('on');
    $(this).parents('.popup-height').removeClass('on');

  });

});
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
/**
 * Created by Administrator on 2017-08-24.
 */

//$(function(){
//
//  if(page == 'tulip'){
//
//    $('.gnb-list-link').eq(0).addClass('on');
//
//  } else if(page == 'rose'){
//
//    $('.gnb-list-link').eq(1).addClass('on');
//
//  } else if(page == 'peony'){
//
//    $('.gnb-list-link').eq(2).addClass('on');
//
//  } else if(page == 'hydrangea'){
//
//    $('.gnb-list-link').eq(3).addClass('on');
//
//  } else if(page == 'ranunculus'){
//
//    $('.gnb-list-link').eq(4).addClass('on');
//
//  }
//
//});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfbWFpbi5qcyIsIl9wYWdlX2NoZWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJsdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE2LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdHJ5e1xyXG4gICAga2lzc3VpU2Nyb2xsQW5pbS5zZXRPcHRpb24oJ2F1dG9SZXNldCcsIGZhbHNlKTtcclxuICB9IGNhdGNoKGUpe31cclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7XHJcblxyXG4gIGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KGxvY2F0aW9uLmhhc2hbbG9jYXRpb24uaGFzaC5sZW5ndGgtMV0tMSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICB2YXIgc2VjdGlvbkxlbmd0aCA9ICQoJy5zZWN0aW9uJykubGVuZ3RoO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPHNlY3Rpb25MZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICBzZWN0aW9uUG9zaXRpb24gPSAoaSAtIGN1cnJlbnRJbmRleCkgKiAxMDA7XHJcblxyXG4gICAgICAkKCcuc2VjdGlvbicpLmVxKGkpLmNzcyh7bGVmdCA6IHNlY3Rpb25Qb3NpdGlvbiArICclJ30pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyDssqvrsojsp7gg7Y6Y7J207KeAIO2RnOyLnFxyXG4gICAgJCgnLmduYi1saXN0LWl0ZW0nKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLmduYi1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXJyb3dCdXR0b24oKXtcclxuXHJcbiAgICB2YXIgYXJyb3dJbmRleCA9IGxvY2F0aW9uLmhhc2g7XHJcbiAgICAvLyDrp4jsp4Drp4kg66y47J6Q7Je0IOyemOudvOuCtOq4sFxyXG4gICAgdmFyIGxhc3RDaGFyID0gYXJyb3dJbmRleC5jaGFyQXQoYXJyb3dJbmRleC5sZW5ndGgtMSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGxhc3RDaGFyKTtcclxuXHJcbiAgICBpZihsYXN0Q2hhciA9PSAnMScpe1xyXG5cclxuICAgICAgJCgnLmFycm93LWJ1dHRvbi5sZWZ0JykuY3NzKHtkaXNwbGF5Oidub25lJ30pO1xyXG4gICAgICAkKCcuYXJyb3ctYnV0dG9uLnJpZ2h0JykuY3NzKHtkaXNwbGF5OidibG9jayd9KTtcclxuXHJcbiAgICB9IGVsc2UgaWYobGFzdENoYXIgPT0gJzUnKXtcclxuXHJcbiAgICAgICQoJy5hcnJvdy1idXR0b24ucmlnaHQnKS5jc3Moe2Rpc3BsYXk6J25vbmUnfSk7XHJcbiAgICAgICQoJy5hcnJvdy1idXR0b24ubGVmdCcpLmNzcyh7ZGlzcGxheTonYmxvY2snfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmFycm93LWJ1dHRvbi5sZWZ0JykuY3NzKHtkaXNwbGF5OidibG9jayd9KTtcclxuICAgICAgJCgnLmFycm93LWJ1dHRvbi5yaWdodCcpLmNzcyh7ZGlzcGxheTonYmxvY2snfSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuc2VjdGlvbicpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uKGkpe1xyXG5cclxuICAgICAgJCgnLnNlY3Rpb24nKS5lcShpKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgbGVmdCA6ICctPTEwMCUnXHJcbiAgICAgIH0sIDIwMDAsICdlYXNlSW5PdXRFeHBvJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4Kys7XHJcblxyXG4gICAgbG9jYXRpb24uaGFzaCA9ICQoJy5zZWN0aW9uJykuZXEoY3VycmVudEluZGV4KS5hdHRyKCdpZCcpICsgKGN1cnJlbnRJbmRleCArIDEpO1xyXG4gICAgJCgnLmduYi1saXN0LWl0ZW0nKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLmduYi1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKSB7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy5zZWN0aW9uJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uKGkpe1xyXG5cclxuICAgICAgJCgnLnNlY3Rpb24nKS5lcShpKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgbGVmdCA6ICcrPTEwMCUnXHJcbiAgICAgIH0sIDIwMDAsICdlYXNlSW5PdXRFeHBvJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4LS07XHJcblxyXG4gICAgbG9jYXRpb24uaGFzaCA9ICQoJy5zZWN0aW9uJykuZXEoY3VycmVudEluZGV4KS5hdHRyKCdpZCcpICsgKGN1cnJlbnRJbmRleCArIDEpO1xyXG4gICAgJCgnLmduYi1saXN0LWl0ZW0nKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLmduYi1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8g7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG4gIGFycm93QnV0dG9uKCk7XHJcblxyXG4gIC8vIGxlZnQgYnV0dG9uXHJcbiAgJCgnLmFycm93LWJ1dHRvbi5sZWZ0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIGlmKCAhJCgnLnNlY3Rpb24nKS5pcygnOmFuaW1hdGVkJykpe1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuICAgIC8vIO2OmOydtOyngCDrsJTrgJQg65WMIO2MneyXheywvSDri6vquLBcclxuICAgICQoJy5wb3B1cC1oZWlnaHQnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5wb3B1cC13aWR0aCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgYXJyb3dCdXR0b24oKTtcclxuICB9KTtcclxuXHJcbiAgLy8gcmlnaHQgYnV0dG9uXHJcbiAgJCgnLmFycm93LWJ1dHRvbi5yaWdodCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgaWYoICEkKCcuc2VjdGlvbicpLmlzKCc6YW5pbWF0ZWQnKSl7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9XHJcbiAgICAvLyDtjpjsnbTsp4Ag67CU64CUIOuVjCDtjJ3sl4XssL0g64ur6riwXHJcbiAgICAkKCcucG9wdXAtaGVpZ2h0JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcucG9wdXAtd2lkdGgnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIGFycm93QnV0dG9uKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGluZGV4IGJ1dHRvblxyXG4gICQoJy5nbmItbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSAkKHRoaXMpLmluZGV4KCcuZ25iLWxpc3QtbGluaycpO1xyXG4gICAgdmFyIHNlY3Rpb25MZW5ndGggPSAkKCcuc2VjdGlvbicpLmxlbmd0aDtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTxzZWN0aW9uTGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgc2VjdGlvblBvc2l0aW9uID0gKGkgLSBjdXJyZW50SW5kZXgpICogMTAwO1xyXG5cclxuICAgICAgJCgnLnNlY3Rpb24nKS5lcShpKS5zdG9wKCkuYW5pbWF0ZSh7bGVmdCA6IHNlY3Rpb25Qb3NpdGlvbiArICclJ30pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2NhdGlvbi5oYXNoID0gJCgnLnNlY3Rpb24nKS5lcShjdXJyZW50SW5kZXgpLmF0dHIoJ2lkJykgKyAoY3VycmVudEluZGV4KzEpO1xyXG4gICAgJCgnLmduYi1saXN0LWl0ZW0nKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLmduYi1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgYXJyb3dCdXR0b24oKTtcclxuICB9KTtcclxuXHJcbiAgLy8g66eI7Jqw7IqkIOyYpOuyhOyLnCDspJHrs7Ug67Cp7KeA7ZWY6riwIOychO2VnCDrs4DsiJgg7ISg7Ja4XHJcbiAgdmFyIHRJRDEsIHRJRDI7XHJcblxyXG4gICQoJy5zcXVhcmUuc21hbGwnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnNtYWxsLXRleHQuY2hhbmdlJykuY3NzKHtkaXNwbGF5Oidub25lJ30pO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmhpZGRlbi10ZXh0LXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB0SUQxID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAvLyDsmbzsqr0s7Jik66W47Kq97KSEKOyLnOyekSkg66qo7IWY7KCB7JqpIO2BtOuemOyKpFxyXG4gICAgICAkKCcuaGlkZGVuLXRleHQtd3JhcCcpLmFkZENsYXNzKCdmcmFtZTEnKTtcclxuICAgICAgJCgnLmhpZGRlbi10ZXh0JykuYWRkQ2xhc3MoJ2ZyYW1lMycpO1xyXG5cclxuICAgIH0sIDApO1xyXG5cclxuICAgIHRJRDIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIOyVhOuemCzsnJfspIQo64GdKSDrqqjshZjsoIHsmqkg7YG0656Y7IqkXHJcbiAgICAgICQoJy5oaWRkZW4tdGV4dC13cmFwJykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG4gICAgICAkKCcuaGlkZGVuLXRleHQnKS5hZGRDbGFzcygnZnJhbWU0Jyk7XHJcblxyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5zcXVhcmUuc21hbGwnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICBjbGVhclRpbWVvdXQodElEMSk7XHJcbiAgICBjbGVhclRpbWVvdXQodElEMik7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmhpZGRlbi10ZXh0LXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5wb3B1cC1idG4tbW9yZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnNtYWxsLXRleHQuY2hhbmdlJykuY3NzKHtkaXNwbGF5OidibG9jayd9KTtcclxuICAgICQoJy5oaWRkZW4tdGV4dC13cmFwJykucmVtb3ZlQ2xhc3MoJ2ZyYW1lMScpO1xyXG4gICAgJCgnLmhpZGRlbi10ZXh0LXdyYXAnKS5yZW1vdmVDbGFzcygnZnJhbWUyJyk7XHJcbiAgICAkKCcuaGlkZGVuLXRleHQnKS5yZW1vdmVDbGFzcygnZnJhbWUzJyk7XHJcbiAgICAkKCcuaGlkZGVuLXRleHQnKS5yZW1vdmVDbGFzcygnZnJhbWU0Jyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuaGlkZGVuLXRleHQtd3JhcC5tb3JlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcucG9wdXAtaGVpZ2h0JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcucG9wdXAtd2lkdGgnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykubmV4dCgnLnBvcHVwLWhlaWdodCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5uZXh0KCcucG9wdXAtd2lkdGgnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wb3B1cC1idG4tY2xvc2UnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcucG9wdXAtd2lkdGgnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykucGFyZW50cygnLnBvcHVwLWhlaWdodCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNC5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBzY3JvbGxEZWx0YSA9IDA7XHJcblxyXG4gICQoJy5tYWluLWJnIC5iZy1lYWNoJykuaGlkZSgpO1xyXG4gICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMCkuc2hvdygpO1xyXG5cclxuICAkKHdpbmRvdykub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBzY3JvbGxEZWx0YSArPSBlLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YTtcclxuXHJcbiAgICBpZiggc2Nyb2xsRGVsdGEgPj0wICl7XHJcblxyXG4gICAgICBzY3JvbGxEZWx0YSA9IDA7XHJcblxyXG4gICAgfSBlbHNlIGlmKCBzY3JvbGxEZWx0YSA8PSAtKCQoJy5tZW51LWxpc3QnKS53aWR0aCgpIC0gJCh3aW5kb3cpLndpZHRoKCkpICl7XHJcblxyXG4gICAgICBzY3JvbGxEZWx0YSA9IC0oJCgnLm1lbnUtbGlzdCcpLndpZHRoKCkgLSAkKHdpbmRvdykud2lkdGgoKSk7XHJcblxyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhzY3JvbGxEZWx0YSk7XHJcblxyXG4gICAgaWYoIDAgPj0gc2Nyb2xsRGVsdGEgJiYgc2Nyb2xsRGVsdGEgPj0gLTI0MCl7XHJcblxyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLnN0b3AoKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMCkuc3RvcCgpLmZhZGVJbigpO1xyXG5cclxuICAgIH0gZWxzZSBpZiggLTI0MCA+IHNjcm9sbERlbHRhICYmICBzY3JvbGxEZWx0YSA+PSAtNzIwICl7XHJcblxyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLnN0b3AoKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMSkuc3RvcCgpLmZhZGVJbigpO1xyXG5cclxuICAgIH0gZWxzZSBpZiggLTcyMCA+IHNjcm9sbERlbHRhICYmIHNjcm9sbERlbHRhID49IC0xMjAwICl7XHJcblxyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLnN0b3AoKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuZXEoMikuc3RvcCgpLmZhZGVJbigpO1xyXG5cclxuICAgIH0gZWxzZSBpZiggLTEyMDAgPiBzY3JvbGxEZWx0YSAmJiBzY3JvbGxEZWx0YSA+PSAtMTc4MCApe1xyXG5cclxuICAgICAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5zdG9wKCkuZmFkZU91dCgpO1xyXG4gICAgICAkKCcubWFpbi1iZyAuYmctZWFjaCcpLmVxKDMpLnN0b3AoKS5mYWRlSW4oKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoIC0xNzgwID4gc2Nyb2xsRGVsdGEgJiYgc2Nyb2xsRGVsdGEgPj0gLTIzODAgKXtcclxuXHJcbiAgICAgICQoJy5tYWluLWJnIC5iZy1lYWNoJykuc3RvcCgpLmZhZGVPdXQoKTtcclxuICAgICAgJCgnLm1haW4tYmcgLmJnLWVhY2gnKS5lcSg0KS5zdG9wKCkuZmFkZUluKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoJy5tZW51LWxpc3QnKS5jc3Moe1xyXG4gICAgICB0cmFuc2Zvcm06J3RyYW5zbGF0ZVgoJyArIHNjcm9sbERlbHRhICsgJ3B4KSdcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgdmFyIGVuZ051bSA9IFsnT05FJywgJ1RXTycsICdUSFJFRScsICdGT1VSJywgJ0ZJVkUnXTtcclxuXHJcbiAgJCgnLm1lbnUtbGlzdC1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBudW0xID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtbGlzdC1saW5rJyk7XHJcblxyXG4gICAgbnVtMSArPSBlbmdOdW1baW5kZXhOdW1iZXJdO1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWxpc3QtbGluay1udW0nKS5odG1sKG51bTEpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgdmFyIG51bSA9IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnXTtcclxuXHJcbiAgJCgnLm1lbnUtbGlzdC1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBudW0yID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtbGlzdC1saW5rJyk7XHJcblxyXG4gICAgbnVtMiArPSBudW1baW5kZXhOdW1iZXJdO1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWxpc3QtbGluay1udW0nKS5odG1sKG51bTIpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjQuXG4gKi9cblxuLy8kKGZ1bmN0aW9uKCl7XG4vL1xuLy8gIGlmKHBhZ2UgPT0gJ3R1bGlwJyl7XG4vL1xuLy8gICAgJCgnLmduYi1saXN0LWxpbmsnKS5lcSgwKS5hZGRDbGFzcygnb24nKTtcbi8vXG4vLyAgfSBlbHNlIGlmKHBhZ2UgPT0gJ3Jvc2UnKXtcbi8vXG4vLyAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDEpLmFkZENsYXNzKCdvbicpO1xuLy9cbi8vICB9IGVsc2UgaWYocGFnZSA9PSAncGVvbnknKXtcbi8vXG4vLyAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDIpLmFkZENsYXNzKCdvbicpO1xuLy9cbi8vICB9IGVsc2UgaWYocGFnZSA9PSAnaHlkcmFuZ2VhJyl7XG4vL1xuLy8gICAgJCgnLmduYi1saXN0LWxpbmsnKS5lcSgzKS5hZGRDbGFzcygnb24nKTtcbi8vXG4vLyAgfSBlbHNlIGlmKHBhZ2UgPT0gJ3JhbnVuY3VsdXMnKXtcbi8vXG4vLyAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDQpLmFkZENsYXNzKCdvbicpO1xuLy9cbi8vICB9XG4vL1xuLy99KTsiXX0=
