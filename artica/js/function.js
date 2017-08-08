/**
 * Created by Administrator on 2017-07-19.
 */

$(function(){

  // gnb
  $('.btn-menu-toggle').data({'open' : 'false'}).on('click', function(){

    if( $(this).data('open') == false ){

      $('.gnb').css({right : 0});
      $(this).data({'open' : true});

    } else {

      $('.gnb').css({right : -340});
      $(this).data({'open' : false});

    }

  });

  $('.btn-menu-close').on('click', function(){

    $('.gnb').css({right : -340});
    $('.btn-menu-toggle').data({'open' : false});

  });

  $('.gnb-link').on('click', function(e){

    e.preventDefault();

    var href = $(this).attr('href');

    var scrollPosition = $(href).offset().top;

    // 주르륵 내려가는 효과
    $('body').stop().animate({
      scrollTop : scrollPosition
    });

  });

  // about us - my story
  $('.item-photo-mask').on('click', function(){

    $('.item-story-wrap').css({
      height:0
    });

    $(this).parent().next().css({
      height : 279,
      transition : 'height .3s ease-out'
    });

    $('.section5').css({
      'padding-bottom' : 279,
      transition : 'padding-bottom .3s ease-out'
    });

  });

  $('.js-item-story-close').on('click', function(){

    $(this).parents('.item-story-wrap').css({
      height : 0,
      transition : 'height .3s ease-out'
    });

    $('.section5').css({
      'padding-bottom' : 0,
      transition : 'padding-bottom .3s ease-out'
    });

  });

  // our skills
  // bar graph
  $('.skill-list').on('click', function(){

    var barAmount = ['p90', 'p80', 'p93', 'p85'];

    $('.skill-list-item>.bar').each(function(index){

      $(this).addClass(barAmount[index]);

    });

  });

  // number count
  $('.career-list').on('click', function(){

    var count=0;
    var countTime = setInterval(function(){
      if(count <= 230) {
        $('.career-number').eq(0).text(count);
      }
      if(count <= 22) {
        $('.career-number').eq(1).text(count);
      }
      if(count <= 2380) {
        $('.career-number').eq(2).text(count);
      }
      if(count <= 50890) {
        $('.career-number').eq(3).text(count);
      }
      if(count > 50890){
        clearInterval(countTime);
      }

      count++;
    }, 10);

  });

  // blog image scale up
  $('.blog-list-item').on('mouseenter', function(){

  });

  // inview
  $('.section5').on('inview', function(visible){

    console.log(visible);
  });


});

