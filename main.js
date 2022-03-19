$(function(){
  $('.hamburger').on('click', function(){
    if($('#header').hasClass('open')){
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('#navi a').on('click', function(){
    $('#header').removeClass('open');
  });

  $('a[href^="#"]').click(function(){
    // リンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクールを行う
    $('body, html').animate({scrollTop:position}, 600, 'swing');
    return false;
  });
});
