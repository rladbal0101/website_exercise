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