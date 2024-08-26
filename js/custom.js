//top으로 올라가는 버튼
$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })
});


//메인 비주얼 슬라이드
$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots:true,
        autoplay: true,
        pauseOnHover: false,
    })


    // 슬라이드로 탭구현.
    $('.main_visual_slide').on('afterChange', function (e, s, c) {
        $('.main_visual .lnk li').removeClass('on');
        $('.main_visual .lnk li').eq(c).addClass('on');

        $('.num span').text(c + 1);

    });

    //슬라이드로 arrow
    $('.arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });


    $('.main_visual .dots li button').on('click', function () {
        let idx = $(this).parent().index();

        $('.main_visual_slide').slick('slickGoTo', idx)
    })

})
    //메인 product slide

$(function () {
    $('.main_product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
    });

})

//패밀리링크

$(function(){
    $('#flnk').on('change', function(){
        const lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
})



