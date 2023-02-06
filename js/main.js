$(function () {
    /*==================================
    スマホメニュー
    ===================================*/
    // ハンバーガーメニューのクリックイベント
    // 解説は、「中級編:ストアサイト(インテリア)」参照
    $('.toggle_btn').on('click', function () {
        if ($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });

    // #maskのエリアをクリックした時にメニューを閉じる
    $('#mask').on('click', function () {
        $('#header').removeClass('open');
    });

    // リンクをクリックしたときにメニューを閉じる
    ('#navi a').on('click', function () {
        $('#header').removeClass('open')
    });

    /*================================================
    スムーススクロール
    =================================================*/
    // ページ内リンクのイベント
    $('a[href^="#"]').click(function () {
        // リンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href == "" ? 'html' : href);
        // トップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う
        // 600はスクロール運動で単位はミリ秒
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });


    /*===============================================
    PICK UP スライダー
    ===============================================*/
    // カルーセル用　jQueryプラグイン　slickの設定
    // マニュアル : https://kenwheeler.github.io/slick/
    $('.slick-area').slick({
        arrows: false,
        centerMode: true,
        centerpadding: '100px',
        slidesToshow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerpadding: '50px',
                    slidesToshow: 1
                }
            }
        ]
    });

    /*================================================
    スクロール時の画像フェード表示
    =================================================*/
    // スクロール時のイベント
    $(window).scroll(function () {
        // fadein暮らすに対して順に処理を行う
        $('.fadein').each(function () {
            //　スクロールした距離
            let scroll = $(window).scrollTop();
            // fadeinクラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
});