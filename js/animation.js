$(function () {

  // -------------------------------------
  // 初めに表示する画面
  // -------------------------------------
  setTimeout(function () {
    $('.start p').fadeIn(1600);
  }, 300); //0.5秒後にロゴをフェードイン!
  setTimeout(function () {
    $('.start').fadeOut(1600);
  }, 2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！


  // -------------------------------------
  // マウスストーカー
  // -------------------------------------  
  //カーソル要素の指定
  var cursor = $("#cursor");
  //ちょっと遅れてついてくるストーカー要素の指定  
  var stalker = $("#stalker");

  //mousemoveイベントでカーソル要素を移動させる
  $(document).on("mousemove", function (e) {
    //カーソルの座標位置を取得
    var x = e.clientX;
    var y = e.clientY;
    //カーソル要素のcssを書き換える用
    cursor.css({
      "opacity": "0.9",
      "top": y + "px",
      "left": x + "px"
    });
    //ストーカー要素のcssを書き換える用    
    setTimeout(function () {
      stalker.css({
        "opacity": "0.4",
        "top": y + "px",
        "left": x + "px"
      });
    }, 140);//カーソルより遅れる時間を指定
  });
  //aタグホバー
  $("a").on({
    "mouseenter": function () {
      //activeクラス付与
      cursor.addClass("active");
      stalker.addClass("active");
    },
    "mouseleave": function () {
      cursor.removeClass("active");
      stalker.removeClass("active");
    }
  });

  // -------------------------------------
  // ナビゲーション
  // -------------------------------------
  $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
  });

  // -------------------------------------
  // MENU ピザスライダー
  // -------------------------------------
  $('.slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
      {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
          slidesToShow: 2,//スライドを画面に2枚見せる
        }
      },
      {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
          slidesToShow: 1.5,//スライドを画面に1.5枚見せる
        }
      }
    ]
  });

  // -------------------------------------
  // ＃STORY ボタンアニメーション
  // -------------------------------------
  TweenMax.to(".button", 1.5, { y: 30, yoyo: true, repeat: -1, ease: Sine.easeInOut });



});




