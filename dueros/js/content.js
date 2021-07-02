// @file : duros.baidu.com --js
$(function () {
    hzLength();

    // 11-9  hz
    $('.hz-type-item').find('.link-btn-01').click(function () {
        $('.jh-at-win').fadeIn();
        var winItem = $('.jh-at-win .at-win-con').find('.at-win-item');
        winItem.eq($(this).parents('.hz-type-item').index()).fadeIn().siblings().hide();
    });
    $('.at-win-item').find('.close-btn').click(function () {
        $('.jh-at-win').fadeOut();
        var winItem = $('.jh-at-win .at-win-con').find('.at-win-item');
        winItem.eq($('.link-btn-01').parents('.hz-type-item').index()).hide().siblings().hide();
    });

    $('.at-win-item ul li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var atConTab = $(this).parent('ul').siblings('.at-win-tab');
        var atConItem = atConTab.children('.at-win-tab-con').find('.at-con-item');
        atConItem.eq($(this).index()).show().siblings().hide();
    });
    var mySwiperHb = new Swiper('#t5-container', {
        //  loop: true,
        autoplayDisableOnInteraction: false,
        calculateHeight: true,
        onInit: function (Swiper) {
            var sizeHb1 = $('.t5-js1 .swiper-slide').length;

            if (sizeHb1 - 1 === mySwiperHb.activeIndex) {
                $('.t5-js1 .arrow-right-1').addClass('on');
            }
            else {
                $('.t5-js1 .arrow-right-1').removeClass('on');
            }
            var lastSlide = $('.t5-js1').find('.swiper-slide-active').next();

            if (mySwiperHb.activeIndex <= 0) {
                $('.t5-js1 .arrow-left-1').addClass('on');
            }
            else {
                $('.t5-js1 .arrow-left-1').removeClass('on');
            }

        },
        onSlideChangeStart: function (Swiper) {

            if (mySwiperHb.activeIndex <= 0) {
                $('.t5-js1 .arrow-left-1').addClass('on');
            }
            else {
                $('.t5-js1 .arrow-left-1').removeClass('on');
            }
            var sizeHb1 = $('.t5-js1 .swiper-slide').length;
            if (sizeHb1 - 1 === mySwiperHb.activeIndex) {
                $('.t5-js1 .arrow-right-1').addClass('on');
            }
            else {
                $('.t5-js1 .arrow-right-1').removeClass('on');
            }
        }
    });
    $('.arrow-left-1').on('click',
        function (e) {
            e.preventDefault();
            mySwiperHb.swipePrev();
        }
        );
    $('.arrow-right-1').on('click',
        function (e) {
            e.preventDefault();
            mySwiperHb.swipeNext();
        }
        );

    var mySwiperHb2 = new Swiper('#t5-container_2', {
        //  loop: true,
        autoplayDisableOnInteraction: false,
        calculateHeight: true,
        onInit: function (Swiper) {
            var sizeLen = $('.t5-js2 .swiper-slide').length;
            if (sizeLen - 1 === mySwiperHb.activeIndex) {
                $('.t5-js2 .arrow-right-2').addClass('on');
            }
            else {
                $('.t5-js2 .arrow-right-2').removeClass('on');
            }
            var lastSlide = $('.t5-js2').find('.swiper-slide-active').next();

            if (mySwiperHb.activeIndex <= 0) {
                $('.t5-js2 .arrow-left-2').addClass('on');
            }
            else {
                $('.t5-js2 .arrow-left-2').removeClass('on');
            }

        },
        onSlideChangeStart: function (Swiper) {

            if (mySwiperHb.activeIndex <= 0) {
                $('.t5-js2 .arrow-left-2').addClass('on');
            }
            else {
                $('.t5-js2 .arrow-left-2').removeClass('on');
            }
            var sizeLen = $('.t5-js2 .swiper-slide').length;
            if (sizeLen - 1 === mySwiperHb.activeIndex) {
                $('.t5-js2 .arrow-right-2').addClass('on');
            }
            else {
                $('.t5-js2 .arrow-right-2').removeClass('on');
            }
        }
    });
    $('.arrow-left-2').on('click',
        function (e) {
            e.preventDefault();
            mySwiperHb2.swipePrev();
        }
    );
    $('.arrow-right-2').on('click',
        function (e) {
            e.preventDefault();
            mySwiperHb2.swipeNext();
        }
        );
    //  11-9  hz  end
    /*header 11-7*/
    var mySwiperNav;
    $('.option-with-swiper').mouseenter(function () {
        $('.swiper-anli .swiper-wrapper').attr('style', '');
        mySwiperNav = null;
        if ($('.swiper-anli .swiper-slide').length < 4) {
            $('.anli-left,.anli-right').hide();
        }
        else {
            $('.anli-left,.anli-right').show();
            mySwiperNav = new Swiper('.swiper-anli', {
                slidesPerView: 3,
                slidesPerGroup: 3,
                autoplay: 2000,
                loop: true,
                calculateHeight: true
            });
        }
    });
    $('.anli-left').on('click',
        function (e) {
            e.preventDefault();
            mySwiperNav.swipePrev();
        }
        );
    $('.anli-right').on('click',
        function (e) {
            e.preventDefault();
            mySwiperNav.swipeNext();
        }
        );
    //  0925
    $('.mobile-nav .menu-btn').click(function () {
        $('.phone-nav-bg').css('display', 'block');
        $('.mobile-nav .menu-btn').removeClass('on');
        $('.phone-nav').animate({
            left: 30 + '%'
        }, 500, function () {
            $('.close-btn').addClass('on');
        });
    });
    $('.mobile-nav .close-btn').click(function () {
        $('.phone-nav-bg').css('display', 'none');
        $('.mobile-nav .close-btn').removeClass('on');
        $('.phone-nav').animate({
            left: 100 + '%'
        }, 500, function () {
            $('.mobile-nav .menu-btn').addClass('on');
        });

    });
    // 12.18 点击背景关闭下拉导航
    $('.phone-nav-bg').on('click', function () {
        $(this).css('display', 'none');
        $('.mobile-nav .close-btn').removeClass('on');
        $('.phone-nav').animate({
            left: 100 + '%'
        }, 500, function () {
            $('.mobile-nav .menu-btn').addClass('on');
        });
    });
    //  0925 end
    $('[data-role="j-first-nav"]').on('click', function () {
        var isShow = $(this).children('.sec-nav').css('display') === 'block';
        isShow ? $(this).children('.sec-nav').slideUp() : $(this).children('.sec-nav').slideDown();
    });
    //  12.7 修改闪屏问题--by zhanghua
    $('.nav .nav-children').mouseenter(function () {
        $(this).find('.nav-down-menu').stop(true, true).slideDown(500).css('z-index', 3);
    });
    $('.nav .nav-children').mouseleave(function () {
        $(this).find('.nav-down-menu').stop(true, true).delay(200).hide().css('z-index', 2);
    });
    //  12.7 修改闪屏问题--by zhanghua  --END
    $('.nav-down-menu .option-btn').mouseenter(function () {
        var n = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(this).closest('.nav-down-menu').find('.option-con').eq(n).addClass('on').siblings().removeClass('on');
    });
    $('.nav-down-menu .appliances .al-pic').mouseenter(function () {
        $(this).find('img').stop().animate({
            'width': '130%',
            'marginLeft': '-15%',
            'marginTop': '-15%'
        }, 200, 'swing');
        $(this).siblings('.al-name').stop().fadeIn(200);
    });
    $('.nav-down-menu .appliances .al-pic').mouseleave(function () {
        $(this).find('img').stop().animate({
            'width': '100%',
            'marginLeft': '0',
            'marginTop': '0'
        }, 200, 'swing');
        $(this).siblings('.al-name').stop().fadeOut(200);
    });
    /*header  end*/


    var wWidth = $(window).width();
    if (wWidth > 640) {
        $('.bimg-slide').show();
        $('.smimg-slide').hide();
    } else {
        $('.bimg-slide').hide();
        $('.smimg-slide').show();
    }
    $('.pic1').click(function () {
        $(this).hide();
        $('.pic2').show();
        $('.header').css('height', '100%');
        $('.phone-nav').show();
    });
    $('.pic2').click(function () {
        $(this).hide();
        $('.pic1').show();
        $('.header').css('height', '60px');
        $('.phone-nav').hide();
    });
    var offbtn = true;
    $('.thd-navul li em').click(function () {
        if (offbtn) {
            $(this).closest('li').find('div').stop().slideDown();
            $(this).addClass('ano');
            offbtn = false;
        } else {
            $(this).closest('li').find('div').stop().slideUp();
            $(this).removeClass('ano');
            offbtn = true;
        }
    });
    var wxoff = true;
    $('.wx-btn').click(function () {
        if (wxoff) {
            $('.wx-ma2').slideDown();
            wxoff = false;
        } else {
            $('.wx-ma2').hide();
            wxoff = true;
        }
    });
    var ifm = $('.sd-video em').length;
    if (ifm > 0) {
        $('.sd-video').click(function () {
            $('#bg_layer2').addClass('ui-mask-visible');
            $('.video-url').stop().fadeIn();
        });
    } else {
        $('.sd-video').unbind('click');
    }
    $('.video-url i').click(function () {
        $('#bg_layer2').removeClass('ui-mask-visible');
        $('.video-url').stop().fadeOut();
        window.video1.play(false);
        $('#myElement2').empty();
    });
    $('#bg_layer2').click(function () {
        $(this).removeClass('ui-mask-visible');
        $('.video-url').stop().fadeOut();
        window.video1.play(false);
        $('#myElement2').empty();
        return false;
    });
    function calh() {
        var bimgHeight = Math.floor($('.bimg-slide').height());
        var temHei = bimgHeight;
        if (bimgHeight !== 0) {
            setTimeout(function () {
                bimgHeight = Math.floor($('.bimg-slide').height());
                $('.banner').css('height', bimgHeight + 'px');
                var diff = Math.abs(temHei - bimgHeight);
                if (diff > 30) {
                    $('#banner-swiper .swiper-wrapper').addClass('errorSwiper');

                }
                else {
                    $('#banner-swiper .swiper-wrapper').removeClass('errorSwiper');
                }
            }, 400);
        }
    }
    calh();
    $(window).resize(function () {
        rzHeight();
        calh();
        var heiTex = $('.ab-we-b-text').height();
        setTimeout(function () {
            $('.ab-we-b-text').css('margin-top', -heiTex / 2);
        }, 10);
    });
    var mySwiper = new Swiper('#banner-swiper', {
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        pagination: '#bannerpagination',
        paginationClickable: true,
        calculateHeight: true,
        updateOnImagesReady: true,
        resizeReInit: true,
        onImagesReady: function (swiper) {
            mySwiper.reInit();
            //  console.log(121212);
        },
        onSwiperCreated: function (swiper) {
            $('.pagination span.swiper-active-switch').append('<em></em>');
            $('.pagination span.swiper-active-switch em').animate({
                left: '0px'
            }, 5000);
        },
        onSlideChangeEnd: function (swiper) {
            $('.pagination span.swiper-active-switch').append('<em></em>').siblings().find('em').remove();
            $('.pagination span.swiper-active-switch em').animate({
                left: '0px'
            }, 5000);
        }
    });
    var pagWidth = Math.floor($('#bannerpagination').width());
    $('#bannerpagination').css('marginLeft', -(pagWidth / 2) + 'px');
    var mySwiper2;
    $('.news-swiper .arrow-left').on('click',
        function (e) {
            e.preventDefault();
            mySwiper2.swipePrev();
        });
    $('.news-swiper .arrow-right').on('click',
        function (e) {
            e.preventDefault();
            mySwiper2.swipeNext();
        });
    initSwiper2();
    $(window).resize(function () {
        //  mySwiper2.reInit();
        setTimeout(function () {
            wWidth = $(window).width();
            initSwiper2();
        }, 500);
    });
    function initSwiper2() {
        //  console.log(123+'======'+wWidth);
        if (wWidth > 1024) {
            mySwiper2 = new Swiper('#swiper-container2', {
                slidesPerView: 3,
                slidesPerGroup: 1,
                loop: true,
                autoplayDisableOnInteraction: false,
                calculateHeight: true,
                resizeReInit: true
            });
        } else if (wWidth > 767) {
            mySwiper2 = new Swiper('#swiper-container2', {
                slidesPerView: 2,
                slidesPerGroup: 1,
                loop: true,
                autoplayDisableOnInteraction: false,
                calculateHeight: true,
                resizeReInit: true
            });
        } else {
            mySwiper2 = new Swiper('#swiper-container2', {
                slidesPerView: 1,
                slidesPerGroup: 1,
                //  loop: true,
                autoplayDisableOnInteraction: false,
                resizeReInit: true
            });
            /*
            if (wWidth > 480) {
                mySwiper2 = new Swiper('#swiper-container2', {
                    slidesPerView: 'auto',
                    slidesPerGroup: 1,
                    //  loop: true,
                    autoplayDisableOnInteraction: false,
                    resizeReInit : true,
                });
            } else {
                mySwiper2 = new Swiper('#swiper-container2', {
                    slidesPerView: '1',
                    slidesPerGroup: 1,
                    //  loop: true,
                    autoplayDisableOnInteraction: false,
                    resizeReInit : true,
                });
            }
            */
        }
    }

    $('.differ-ul ul li').hover(function () {
        $(this).find('img').eq(0).hide();
        $(this).find('img').eq(1).show();
    },
    function () {
        $(this).find('img').eq(0).show();
        $(this).find('img').eq(1).hide();

    });
    $('.sences-tabbtn a').click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.sences-img').eq($(this).index()).animate({
            'opacity': 1
        }, 1000).removeClass('aaa').addClass('sences-imgcur').siblings().addClass('aaa').animate({
            'opacity': 0
        }, 1000).removeClass('sences-imgcur');
    });
    var len = $('.example-left ul li').length;
    var index = 0;
    $('.example-left ul li').click(function () {
        index = ($(this).index());
        play(index);
    });
    function play(numA) {
        $('.example-left ul li').eq(numA).addClass('cur').siblings().removeClass('cur');
        var num = len - ($(this).index());
        index = numA;
        for (var i = 0; i < len; i++) {
            var id = (index + i + 1);
            if (id > len) {
                id = id - len;
            }
            var el = $('#figure-' + id);
            //  console.log(id);
            el.removeClass('f1 f2 f3 f4');
            var name = 'f' + (i + 1);
            if (name !== 'f1') {
                el.addClass('gray');
            } else {
                el.removeClass('gray');
            }
            el.addClass(name);
        }
    }
    function next() {
        index++;
        if (index >= 4) {
            index = 0;
        }
        play(index);
    }
    function prev() {
        index--;
        if (index < 0) {
            index = 3;
        }
        play(index);
    }
    $('.example-right .arrow-right').click(function () {
        next();
    });
    $('.example-right .arrow-left').click(function () {
        prev();
    });
    function scrollMove(el, scrollDirection) {
        if (scrollDirection === 'left') {
            next();
        }
        if (scrollDirection === 'right') {
            prev();
        }
    }
    var touchEl = $('.topic-feature__image-container-inner');
    touch(touchEl, scrollMove);
    joinContant();
    dBanner();
    newsA();
    subNav();
    subSelect();
    skillBox();
    anlimore();
    showBtn();
});
$(window).resize(function () {
    newsA();
    subNav();
});

function hzLength() {
    var itemL = $('#swiper-container2 .swiper-slide').length;
    if (itemL <= 3) {
        $('.news-swiper').find('.arrow-left').hide();
        $('.news-swiper').find('.arrow-right').hide();
    } else {
        $('.news-swiper').find('.arrow-left').show();
        $('.news-swiper').find('.arrow-right').show();
    }
}

function skillBox() {
    if ($('.skill-box').length > 0) {
        var lengthSkill = $('.skill-box ul li').length;
        if (lengthSkill > 7) {
            var rowSkill = Math.floor(((lengthSkill - 7) / 4) + 1);
            var rowHeight = $('.skill-box ul li')[0].offsetHeight;
            var boxHeight = $('.skill-box ul')[0].offsetHeight;
            var newBoxHeight = boxHeight - rowHeight * rowSkill;
            $('.skill-box ul').css('height', newBoxHeight);
            $('.skill .more').show();
        }
        else {
            $('.skill .more').hide();
        }
        $('.skill .more').click(function () {
            $('.skill-box ul').css('height', 'auto');
            $(this).hide();
        });
    }
}

function subNav() {
    if ($('.sub-nav ul.container>li').length === 3) {
        if ($(window).width() < 1024) {
            $('.sub-nav ul.container').addClass('abSubNav');
        }
    }
    setTimeout(function () {
        var navObj = $('.sub-nav');
        var navObjHeight = 62;
        if ($(window).width() <= 768) {
            navObjHeight = 46;
        }
        if ($('.temp-wrap').length === 0) {
            navObj.wrap('<div class="temp-wrap" style="width: 100%;overflow: hidden;height: '
                + navObjHeight + 'px"></div>');
        }
        else {
            $('.temp-wrap').css('height', navObj.height());
        }
        if (navObj.length > 0) {
            var navTop = navObj.parent().offset().top;
            $(window).scroll(function () {
                if ($(document).scrollTop() > navTop) {
                    navObj.addClass('fixed');
                }
                else {
                    navObj.removeClass('fixed');
                }
            });
        }
    }, 500);
}
function newsA() {
    if ($('.sub-nav li a').length > 0) {
        $('.sub-nav li').unbind('click').click(function () {
            var destination = $('.os-title').eq($(this).index()).parent().offset().top + 1;
            // $(this).parent().offset().top;
            if ($(window).width() <= 768) {
                $('html, body').stop().animate({
                    scrollTop: destination - $('.sub-nav').outerHeight() - $('.header-m').outerHeight() - 60
                }, 1100);
            } else {
                $('html, body').stop().animate({
                    scrollTop: destination - $('.sub-nav').outerHeight()
                }, 1100);
            }
        });
    }
}
function subSelect() {
    setTimeout(function () {
        var navObj = $('.sub-nav');
        var aniTops = [];
        $('.os-title').each(function (i) {
            aniTops[i] = $(this).offset().top;
        });
        if (navObj.length > 0 && aniTops.length > 0) {
            $(window).scroll(function () {
                var st = $(document).scrollTop() + $(window).height() * 0.5;
                var subIndex = checSub(st, aniTops);
                $('.sub-nav ul li').eq(subIndex).addClass('on').siblings('li').removeClass('on');
                if ($(window).width() <= 768) {
                    if (subIndex > 1) {
                        if (subIndex === 2) {
                            $('.sub-nav').scrollLeft(230);
                        }
                        else {
                            $('.sub-nav').scrollLeft(subIndex * $(window).width() / 2);
                        }
                    }
                    else {
                        $('.sub-nav').scrollLeft(0);
                    }
                }
            });
        }
    }, 500);
}

function checSub(st, arr) {
    var index = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
        if (st >= arr[i]) {
            if (i < len - 1 && st < arr[i + 1]) {
                index = i;
                break;
            }
                        else {
                index = len - 1;
            }
        }
    }
    return index;
}

/*
function subSelect() {

    setTimeout(function () {
        var navObj = $('.sub-nav');
        // 获取标题数组
        var aniTops = new Array();
        $('.os-title').each(function (i) {

            aniTops[i] = $(this).parent().offset().top;
        });
        if (navObj.length > 0) {
            $(window).scroll(function () {
                var st = $(document).scrollTop();
                for (var i = 0 ; i<aniTops.length; i++ ) {
                    if ( st > aniTops[i] - $('.sub-nav').outerHeight() - $('.header-m').outerHeight()) {
                        $('.sub-nav ul li').eq(i).addClass('on').siblings().removeClass('on');
                    }
                        else {
                        $('.sub-nav ul li').eq(i).removeClass('on');
                    }
                    if ( st < aniTops[0]-navObj.height()) {
                        $('.sub-nav ul li').eq(0).addClass('on');
                    }
                }
            });
        }
    },
    5000)
}
*/
function joinContant() {
    if ($('.join-contant').length > 0) {
        $('.join-contant').particleground({
            dotColor: '#fff',
            lineColor: '#f4f4f4'
        });
    }
    $('.join-contant .wrap').css({
        'margin-top': -($('.join-contant .wrap').height() / 2)
    });
}
function dBanner() {
    if ($('.d-banner-img').length > 0) {
        var mySwiperb = new Swiper('.d-banner-img', {
            direction: 'vertical',
            loop: true,
            autoplay: 5000,
            calculateHeight: true,
            autoplayDisableOnInteraction: false,
            pagination: '#d-banner-pagination',
            paginationClickable: true
        });
    }
}
function anlimore() {
    var introli = $('.introuse2 ul li');
    var aliHeight = introli.length;
    var moreOff = true;
    if (aliHeight > 60) {
        $('.skill2 .more').show();
        introli.hide();
        $('.introuse2 ul li:lt(6)').show();
    }
    $('.skill2 .more').click(function () {
        if (moreOff) {
            introli.show();
            $(this).html('收起了解更多功能介绍').addClass('more-now');
            moreOff = false;
        } else {
            introli.hide();
            $('.introuse2 ul li:lt(6)').show();
            $(this).html('展开了解更多功能介绍').removeClass('more-now');
            moreOff = true;
        }
    });
}
function showBtn() {
    var sucli = $('.success-pro ul li');
    var sucHeight = sucli.length;
    var morebtn = true;
    if (sucHeight > 3) {
        $('.success-pro .used-lind').css('display', 'block');
        sucli.hide();
        $('.success-pro ul li:lt(3)').show();
    }
    $('.success-pro .used-lind').click(function () {
        if (morebtn) {
            sucli.css('display', 'block');
            $(this).html('收起');
            morebtn = false;
        } else {
            sucli.css('display', 'none');
            $('.success-pro ul li:lt(3)').show();
            $(this).html('更多案例');
            morebtn = true;
        };
    });
}
$(function () {
    var a = document.getElementsByTagName('a');
    for (var i = 0; i < a.length; a++) {
        a[i].onclick = onclick;
    }
    function onclick() {
        var href = this.href;
        if (href) {
            return true;
        } else {
            return false;
        }
    }
    //  $('.made-btn').click(function (event) {
    //      var href = $(this).attr('href');
    //      window.open(href);
    //  });
    //  $('.wrap a').click(function (event) {
    //      var href = $(this).attr('href');
    //      event.window.open(href);
    //  });
    $('.kfz-item').click(function (event) {
        var href = $(this).attr('href');
        event.window.open(href);
    });
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var contentItems = $('#mmm-con').find('.m-t01');
        var currentItem = '';
        if (scrollTop + windowHeight === documentHeight) {
            currentItem = '#' + contentItems.last().attr('id');
        } else {
            contentItems.each(function () {
                var contentItem = $(this);
                var offsetTop = contentItem.offset().top;
                if (scrollTop > offsetTop - 200) {
                    currentItem = '#' + contentItem.attr('id');
                }
            });
        }
        if (currentItem !== $('#menu').find('.bs').attr('href')) {
            $('#menu').find('.bs').removeClass('bs');
            $('#menu').find('[href=' + currentItem + ']').addClass('bs');
        }
    });
    $('.about-dm-tab').find('ul').children('li').unbind('click').click(function () {
        $(this).addClass('on').siblings('li').removeClass('on');
        $('.dm-map').find('.dm-map-item').children().eq($(this).index()).show().siblings().hide();
    });

    $('#go01').click(function () {
        var destination = $('#c01').offset().top;
        if ($(window).width() <= 768) {
            $('html, body').animate({
                scrollTop: destination - $('.sub-nav').outerHeight() - $('.header-m').outerHeight() - 120
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: destination - $('.sub-nav').outerHeight() - 100
            }, 500);
        }
        return false;
    });
    $('#go02').click(function () {
        var destination = $('#c02').offset().top;
        if ($(window).width() <= 768) {
            $('html, body').animate({
                scrollTop: destination - $('.sub-nav').outerHeight() - $('.header-m').outerHeight() - 120
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: destination - $('.sub-nav').outerHeight() - 100
            }, 500);
        }
        return false;
    });
    $('#go03').click(function () {
        var destination = $('#c03').offset().top;
        if ($(window).width() <= 768) {
            $('html, body').animate({
                scrollTop: destination - $('.sub-nav').outerHeight() - $('.header-m').outerHeight() - 120
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: destination - $('.sub-nav').outerHeight() - 15
            }, 500);
        }
        return false;
    });
    $('.years-list').find('a').click(function () {
        $(this).parent().addClass('active-c');
        $(this).parent().siblings().removeClass('active-c');
    });
    $('.ft-nav-item').find('.s2').click(function () {
        $('.wx-ma').animate({
            top: '-110px',
            opacity: '1'
        });
    });
    $('.ft-nav-item').find('.s2').mouseout(function () {
        $('.wx-ma').animate({
            top: '-120px',
            opacity: '0'
        });
    });
    var wxoff = true;
    var wxBtn;
    $('wx-btn').click(function () {
        if (wxoff) {
            $('wx-ma2').slideDown();
            wxBtn = false;
        } else {
            $('wx-ma2').slideUp();
            wxBtn = true;
        }
    });
    $(document).ready(function () {
        var heiTex = $('.ab-we-b-text').height();
        setTimeout(function () {
            $('.ab-we-b-text').css('margin-top', -heiTex / 2);
            //  console.log(heiTex);
        }, 10);
        var moveT;
        var before = 0;
        $(window).scroll(function () {
            if ($('.choose-years').length > 0) {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var btmHeight = $('.ab-we-banner').height();
                var T = $('.memora-con').offset().top;
                var h = $(window).height();
                scrollTop = $(document).scrollTop();
                if (scrollTop > btmHeight) {
                    var cond = $('.footer').offset().top - $('.choose-years').outerHeight() - h * 0.3;
                    var offsetTop;
                    if ($(window).width() <= 768) {
                        offsetTop = $(document).scrollTop() - ($(window).height() * 0.5);
                    } else {
                        offsetTop = $(document).scrollTop() - ($(window).height() * 0.4);
                    }
                    if (moveT != null) {
                        window.clearTimeout(moveT);
                    }
                    moveT = window.setTimeout(function () {
                        if (scrollTop > cond) {
                            moveChoose((cond + h * 0.3) - T);
                        } else {
                            moveChoose(offsetTop);
                        }
                    },
                    100);
                } else {
                    $('.choose-years').animate({
                        top: 0
                    },
                    {
                        duration: 100,
                        queue: false
                    });
                }
            }
        });
        function moveChoose(offsetTop) {
            $('.choose-years').animate({
                top: offsetTop
            },
            {
                duration: 100,
                queue: false
            });
        }

        $(window).scroll(function (e) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 1020) {
                $('.go-top-btn').addClass('show');
            }
            else {
                $('.go-top-btn').removeClass('show');
            }
        });
        $(window).load(function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 1020) {
                $('.go-top-btn').addClass('show');
            }
                        else {
                $('.go-top-btn').removeClass('show');
            }
        });

        $('.go-top-btn a').click(function () {
            $('html,body').animate({scrollTop: 0}, 500);
        });


        $('.dm-close-btn,.cancel').click(function () {
            $('.fixed-r-win').hide();
        });

        /* 2017-8-15 返回顶部 or 咨询   end */

        var sb = $('.news-solute ul li').length;
        if (sb > 3) {
            $('.news-solute ul li:gt(2)').hide();
            $('.ck-gd-btn').show();
        } else {
            $('.news-solute ul li:gt(2)').hide();
            $('.ck-gd-btn').hide();
        }
        $('.ck-gd-btn').click(function () {
            if ($('.news-solute ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('显示更多&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('显示更多&nbsp;&nbsp;+');
            }
        });
        var itemL = $('.item1 ul li').length;
        if (itemL > 3) {
            $('.item1 ul li:gt(2)').hide();
            $('.item1 ul li:lt(3)').show();
            $('.item1 .show-btn').show();
        } else {
            $('.item1 ul li:gt(2)').hide();
            $('.item1 .show-btn').hide();
        }
        $('.item1 .show-btn').click(function () {
            if ($('.item1 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL2 = $('.item2 ul li').length;
        if (itemL2 > 3) {
            $('.item2 ul li:gt(2)').hide();
            $('.item2 ul li:lt(3)').show();
            $('.item2 .show-btn').show();
        } else {
            $('.item2 ul li:gt(2)').hide();
            $('.item2 .show-btn').hide();
        }
        $('.item2 .show-btn').click(function () {
            if ($('.item2 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL3 = $('.item3 ul li').length;
        if (itemL3 > 3) {
            $('.item3 ul li:gt(2)').hide();
            $('.item3 ul li:lt(3)').show();
            $('.item3 .show-btn').show();
        } else {
            $('.item3 ul li:gt(2)').hide();
            $('.item3 .show-btn').hide();
        }
        $('.item3 .show-btn').click(function () {
            if ($('.item3 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL4 = $('.item4 ul li').length;
        if (itemL4 > 3) {
            $('.item4 ul li:gt(2)').hide();
            $('.item4 ul li:lt(3)').show();
            $('.item4 .show-btn').show();
        } else {
            $('.item4 ul li:gt(2)').hide();
            $('.item4 .show-btn').hide();
        }
        $('.item4 .show-btn').click(function () {
            if ($('.item4 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL5 = $('.item5 ul li').length;
        if (itemL5 > 3) {
            $('.item5 ul li:gt(2)').hide();
            $('.item5 ul li:lt(3)').show();
            $('.item5 .show-btn').show();
        } else {
            $('.item5 ul li:gt(2)').hide();
            $('.item5 .show-btn').hide();
        }
        $('.item5 .show-btn').click(function () {
            if ($('.item5 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL6 = $('.item6 ul li').length;
        if (itemL6 > 3) {
            $('.item6 ul li:gt(2)').hide();
            $('.item6 ul li:lt(3)').show();
            $('.item6 .show-btn').show();
        } else {
            $('.item6 ul li:gt(2)').hide();
            $('.item6 .show-btn').hide();
        }
        $('.item6 .show-btn').click(function () {
            if ($('.item6 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL7 = $('.item7 ul li').length;
        if (itemL7 > 3) {
            $('.item7 ul li:gt(2)').hide();
            $('.item7 ul li:lt(3)').show();
            $('.item7 .show-btn').show();
        } else {
            $('.item7 ul li:gt(2)').hide();
            $('.item7 .show-btn').hide();
        }
        $('.item7 .show-btn').click(function () {
            if ($('.item7 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL8 = $('.item8 ul li').length;
        if (itemL8 > 3) {
            $('.item8 ul li:gt(2)').hide();
            $('.item8 ul li:lt(3)').show();
            $('.item8 .show-btn').show();
        } else {
            $('.item8 ul li:gt(2)').hide();
            $('.item8 .show-btn').hide();
        }
        $('.item8 .show-btn').click(function () {
            if ($('.item8 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL9 = $('.item9 ul li').length;
        if (itemL9 > 3) {
            $('.item9 ul li:gt(2)').hide();
            $('.item9 ul li:lt(3)').show();
            $('.item9 .show-btn').show();
        } else {
            $('.item9 ul li:gt(2)').hide();
            $('.item9 .show-btn').hide();
        }
        $('.item9 .show-btn').click(function () {
            if ($('.item9 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL10 = $('.item10 ul li').length;
        if (itemL10 > 3) {
            $('.item10 ul li:gt(2)').hide();
            $('.item10 ul li:lt(3)').show();
            $('.item10 .show-btn').show();
        } else {
            $('.item10 ul li:gt(2)').hide();
            $('.item10 .show-btn').hide();
        }
        $('.item10 .show-btn').click(function () {
            if ($('.item10 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL11 = $('.item11 ul li').length;
        if (itemL11 > 3) {
            $('.item11 ul li:gt(2)').hide();
            $('.item11 ul li:lt(3)').show();
            $('.item11 .show-btn').show();
        } else {
            $('.item11 ul li:gt(2)').hide();
            $('.item11 .show-btn').hide();
        }
        $('.item11 .show-btn').click(function () {
            if ($('.item11 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemL12 = $('.item12 ul li').length;
        if (itemL12 > 3) {
            $('.item12 ul li:gt(2)').hide();
            $('.item12 ul li:lt(3)').show();
            $('.item12 .show-btn').show();
        } else {
            $('.item12 ul li:gt(2)').hide();
            $('.item12 .show-btn').hide();
        }
        $('.item12 .show-btn').click(function () {
            if ($('.item12 ul li:gt(2)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(2)').show();
                $(this).html('更多功能&nbsp;&nbsp;-');
            } else {
                $(this).siblings('ul').find('li:gt(2)').hide();
                $(this).html('更多功能&nbsp;&nbsp;+');
            }
        });
        var itemLHZ = $('.friends-team .firends-logo li').length;
        if (itemLHZ > 10) {
            $('.friends-team .firends-logo li:gt(9)').hide();
            $('.friends-team .firends-logo li:lt(10)').show();
            $('.friends-team .friends-s-btn').show();
        } else {
            $('.friends-team .firends-logo li:gt(9)').hide();
            $('.friends-team .friends-s-btn').hide();
        }
        $('.friends-team .friends-s-btn').click(function () {
            if ($('.friends-team .firends-logo li:gt(9)').is(':hidden')) {
                $(this).siblings('ul').find('li:gt(9)').show();
                $(this).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收起');
                $(this).addClass('active');
            }
            else {
                $(this).siblings('ul').find('li:gt(9)').hide();
                $(this).html('查看更多');
                $(this).removeClass('active');
            }
        });
        var fMe = $(window).width();
        if (fMe <= 1024) {
            $('.f-email-item a').attr('href', 'javascript:;');
        }
        if (fMe <= 768) {}
    });
    var gj = new GetJob();
    gj.init();
    $('#jsform').validate({});
    $.extend($.validator.messages, {
        required: '必填!',
        minlength: '不能少于2个字符',
        equalTo: '请再次输入相同的值'
    });
    jQuery.validator.addMethod('mobile',
        function (value, element) {
            var mobile = /^1[3|4|5|7|8]\d {9}$/;
            return this.optional(element) || (mobile.test(value));
        },
        '手机格式不对');
    jQuery.validator.addMethod('email',
        function (value, element) {
            var mm = /^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z] {2,4}$|^1[3|4|5|7|8]\d {9}$/;
            return this.optional(element) || (mm.test(value));
        },
        '格式不对');
});
function GetJob() {
    var bindClick;
    var getCateData;
    var getJobData;
    var addCatHtml;
    var addJobHtml;
    this.init = function () {
        bindClick();
    };
    bindClick = function () {
        $('.city li').unbind().click(function () {
            getCateData($(this).children('a').attr('name'));
            $(this).addClass('active-re').siblings().removeClass('active-re');
            $('.cate-all').trigger('click');
        });
        $('.cate li').unbind().click(function () {
            cityAct = $('.city .active-re a').text();
            typeAct = $(this).children('a').text();
            getJobData(cityAct, typeAct);
            $(this).addClass('active-re').siblings().removeClass('active-re');
        });
    };
    getCateData = function (city) {
        $.ajax({
            async: false,
            type: 'post',
            url: 'index.php?m=search&c=index&a=ajaxtypeAct ',
            data: {
                'id': city
            },
            dataType: 'json',
            success: function (data) {
                addCatHtml(data);
                bindClick();
            },
            beforeSend: function () {},
            complete: function () {}
        });
    };
    getJobData = function (city, type) {
        $.ajax({
            async: false,
            type: 'post',
            url: 'index.php?m=search&c=index&a=ajax_content',
            data: {
                'city': city,
                'type': type
            },
            dataType: 'json',
            success: function (data) {
                addJobHtml(data);
            },
            beforeSend: function () {},
            complete: function () {}
        });
    };
    addCatHtml = function (data) {
        var htmlStr = '<li><span>类别：</span></li><li><a class="cate-all" href="javascript:;">全部</a></li>';
        for (var i = 0; i < data.length; i++) {
            htmlStr += '<li><a href="javascript:;">' + data[i]['title'] + '</a></li>';
        }
        $('.cate').html(htmlStr);
    };
    addJobHtml = function (data) {
        var htmlStr = '';
        for (var i = 0; i < data.length; i++) {
            htmlStr += '<div class="p-type-con"><h4 class="type-tit">'
                + data[i]['title'] + '</h4><p class="type-dd"><span>工作地点：'
                + data[i]['address'] + '</span><span>职位类别：' + data[i]['type']
                + '</span><span>更新时间：' + data[i]['inputtime']
                + '</span></p><div class="zw-text">'
                + data[i]['content'] + '</div><div class="zw-text">' + data[i]['content1']
                + '</div><div class="send-out"><p>发送简历至<a href="mailto: '
                + data[i]['email'] + '">'
                + data[i]['email'] + '</a></p></div></div>';
        }
        $('.p-type ').html(htmlStr);
    };
}

$(document).ready(function () {
    rzHeight();
    //  ImgOnload();
    // newsA();
    // subNav()

});
$(window).load(function () {
    // newsA();
    // subNav()
});

function ImgOnload() {
    var bImg;
    var isLoad = true;

    isImgLoad(function () {
        var ImgH = $('#banner-swiper').find('img').height();
    });
    function isImgLoad(callback) {
        $('#banner-swiper').find('img').each(function () {
            if (this.height === 0) {
                isLoad = false;
                return false;
                //  console.log(111);
            }
        });
        if (isLoad) {
            clearTimeout(bImg);
            callback();
            var mySwiper = new Swiper('#banner-swiper', {
                loop: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                pagination: '#bannerpagination',
                paginationClickable: true,
                calculateHeight: true,
                updateOnImagesReady: true,
                onSwiperCreated: function (swiper) {
                    $('.pagination span.swiper-active-switch').append('<em></em>');
                    $('.pagination span.swiper-active-switch em').animate({
                        left: '0px'
                    },
                    5000);
                },
                onSlideChangeEnd: function (swiper) {
                    $('.pagination span.swiper-active-switch').append('<em></em>').siblings().find('em').remove();
                    $('.pagination span.swiper-active-switch em').animate({
                        left: '0px'
                    },
                    5000);
                }
            });
            var pagWidth = Math.floor($('#bannerpagination').width());
            $('#bannerpagination').css('marginLeft', -(pagWidth / 2) + 'px');
            mySwiper.reInit();
            //  console.log(222);
        }
                        else {
            isLoad = true;
            bImg = setTimeout(function () {
                isImgLoad(callback);
            }, 500);
            //  console.log(333);
        }
    }
}

function rzHeight() {

    var tImg;
    var isLoad = true;

    isImgLoad(function () {
        var cH =  $('.hb-list').height();
        $('.hb-list .ab-con').css('height', cH);
    });

    function isImgLoad(callback) {
        $('.hb-list img').each(function () {
            if (this.height === 0) {
                isLoad = false;
                return false;
            }
        });
        if (isLoad) {
            clearTimeout(tImg);
            callback();
        }
                        else {
            isLoad = true;
            tImg = setTimeout(function () {
                isImgLoad(callback);
            }, 500);
        }
    }

}
/* * *
*12.12 修改解决方案详情页 query展示部分 每行按卡片最高高度排列整齐
*12.13 Successful Product Collaboration 展示部分 每行按卡片最高高度排列整齐
*--by zhanghua
*/
$(document).ready(function () {
    //  对 query 部分初始化高度
    function initIntroductionUl() {
        if ($('.recruit-con .introuse2').length !== 0) {
            if ($(window).width() > 768) {
                initHei('.recruit-con .introuse2');
            }
        }
    }
    //  对 success-pro 部分初始化高度
    function initSuccessUl() {
        var lenSuc = $('.recruit-con .success-pro li').length;
        if (lenSuc > 1) {
            if ($(window).width() > 768) {
                initHei('.recruit-con .success-pro');
            }
        }
    }
    //  初始化高度
    function initHei(str) {
        var queryBox = $(str);
        var lenBox = queryBox.length;
        for (var i = 0; i < lenBox; i++) {
            var ul = queryBox.eq(i).find('ul');
            var lis = ul.eq(0).find('li');
            var tempHight = 0;
            var lenLis = lis.length;
            var tempArr = [];// 每3个li存储在数组中
            for (var j = 0; j < lenLis; j++) {
                tempArr.push(lis.eq(j));
                if (j % 3 === 2) {
                    tempArr[0] = tempArr[0].height();
                    tempArr[1] = tempArr[1].height();
                    tempArr[2] = tempArr[2].height();
                    tempArr.sort(function (a, b) {
                        return b - a;
                    });
                    //  console.log(tempArr);
                    tempHight = tempArr[0];
                    lis.eq(j).css({'height': tempHight + 'px'});
                    lis.eq(j - 1).css({'height': tempHight + 'px'});
                    lis.eq(j - 2).css({'height': tempHight + 'px'});
                    tempArr.shift();
                    tempArr.shift();
                    tempArr.shift();
                }
                else if (j === lenLis - 1) {
                    for (var k = 0; k < tempArr.length; k++) {
                        tempArr[k] = tempArr[k].height();
                    }
                    if (tempArr.length === 2) {
                        tempArr.sort(function (a, b) {
                            return b - a;
                        });
                    }
                    tempHight = tempArr[0];
                    for (var m = 0; m < tempArr.length; m++) {
                        lis.eq(j - m).css({'height': tempHight + 'px'});
                    }
                }
            }
        }
    }
});

(function () {
    var component = window.location.hash.split('#');
    var path = component[component.length - 1];
    $(document).ready(function () {
        if (path === 'example' && $('#example')) {
            setTimeout(function () {
                var examTop = $('#example').offset().top;
                $('body,html').animate({
                    scrollTop: examTop
                }, 100);
                $('img.examload:last').load(function () {
                    var examTop2 = $('#example').offset().top;
                    $('body,html').animate({
                        scrollTop: examTop2
                    }, 100);
                });
            }, 1000);
        }
        if (path === 'd5' && $('#d5').hasClass('function')) {
            setTimeout(function () {
                var examTop3 = $('#d5').offset().top;
                $('body,html').animate({
                    scrollTop: examTop3
                }, 100);
                $('#d4 img:last').load(function () {
                    var examTop4 = $('#d5').offset().top;
                    $('body,html').animate({
                        scrollTop: examTop4
                    }, 100);
                });
                if (!$('.sub-nav').hasClass('fixed')) {
                    $('.sub-nav').addClass('fixed');
                    $('.sub-nav.fixed li').eq(4).addClass('on').siblings('li').removeClass('on');
                }
            }, 1000);
            if (!$('.sub-nav').hasClass('fixed')) {
                $('.sub-nav').addClass('fixed');
                $('.sub-nav.fixed li').eq(4).addClass('on').siblings('li').removeClass('on');
            }
        }
        if (path === 'd2' && $('#d2').hasClass('skill')) {
            if (!$('.temp-wrap .sub-nav').hasClass('fixed')) {
                $('.sub-nav').addClass('fixed');
                $('.sub-nav li').eq(1).addClass('on').siblings('li').removeClass('on');
            }
        }
    });
})();

// 行业解决方案落地页相关JS
(function () {
    function initForm() {
        $('[data-role="j-apply-cooperation-form"]').find('input, textarea').each(function () {
            this.value = '';
            $(this).siblings('.errmsg').hide();
            $(this).removeClass('error');
        });
    }
    function openModal() {
        $('.jh-at-win').fadeIn();
        $('[data-role="j-apply-cooperation-form-container"]').fadeIn();
        var position = $(window).scrollTop();
        $('body').addClass('forbidden-scroll').data('position', position);
        $('body').css({top: position * -1 + 'px'});
    }
    function closeModal() {
        $('.jh-at-win').fadeOut();
        $('[data-role="j-apply-cooperation-form-container"]').fadeOut();
        $('body').removeClass('forbidden-scroll');
        $('body').css({top: ''});
        $(window).scrollTop($('body').data('position'));
        initForm();
    }
    $('.industry').find('[data-role="j-apply-cooperation"]').click(function () {
        openModal();
    });
    $('.apply-cooperation-form').find('.close-btn').click(function () {
        closeModal();
    });

    function validForm(element) {
        var value = $.trim(element.value);
        if ($(element).parents('.form-item').attr('required') && !value) {
            $(element).siblings('.errmsg.invalid-msg').hide();
            $(element).siblings('.errmsg.required-msg').show();
            return false;
        }
        $(element).siblings('.errmsg.required-msg').hide();

        var name = $(element).attr('name');
        if (name === 'phone' && value) {
            $('input[name="phone"]').siblings('.errmsg.invalid-msg').hide();
        }
        if (name === 'phone' && !(/^(1(([358][0-9])|[4][1479]|[7][0135678]))\d{8}$/.test(value))) {
            $(element).siblings('.errmsg.invalid-msg').show();
            return false;
        }
        if (name === 'email' && !(/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(value))) {
            $(element).siblings('.errmsg.invalid-msg').show();
            return false;
        }
        $(element).siblings('.errmsg.invalid-msg').hide();
        return true;
    }

    $('[data-role="j-apply-cooperation-form"]').find('input, textarea').blur(function () {
        if (!validForm(this)) {
            $(this).addClass('error');
        }
        else {
            $(this).removeClass('error');
        }
    });

    $('[data-role="j-verify-form"]').click(function (e) {
        var $this = $(e.target);
        if ($this.attr('disabled')) {
            return;
        }
        var phone = $('input[name="phone"]').length && $('input[name="phone"]')[0].value;
        if (!phone) {
            $this.siblings('.errmsg.invalid-msg').show();
            return false;
        }
        $.ajax({
            type: 'get',
            url: '/didp/message/getverifycode?phone='
                + phone.trim(),
            dataType: 'json',
            success: function (json) {
                if (+json.status !== 0 || !json.data) {
                    $('[data-role="j-toast"]').show().find('.text').text(json.msg || '提交失败');
                    setTimeout(function () {
                        $('[data-role="j-toast"]').fadeOut();
                    }, 2e3);
                    return;
                }
                window.verifyKey = json.data.verifyKey;
                $this.attr('disabled', true);
                $this.css({
                    'cursor': 'not-allowed',
                    'width': '100px'
                });
                var time = 60;
                $this.text(time + '秒后可重新获取');
                var timer = setInterval(function () {
                    time--;
                    $this.text(time + '秒后可重新获取');
                }, 1e3);
                setTimeout(function () {
                    $this.attr('disabled', false);
                    $this.css({
                        'cursor': 'pointer',
                        'width': '85px'
                    });
                    clearInterval(timer);
                    $this.text('获取手机验证码');
                }, 6e4);
            }
        });
    });

    $('[data-role="j-submit-form"]').click(function () {
        var isValid = true;
        var params = {verifyKey: window.verifyKey};
        $('[data-role="j-apply-cooperation-form"]').find('input, textarea').each(function () {
            if (!validForm(this)) {
                isValid = false;
            }
            var key = $(this).attr('name');
            var value = $.trim(this.value);
            params[key] = value;
        });
        if (isValid) {
            $.ajax({
                type: 'post',
                url: '/didp/message/sendbdmsg',
                data: params,
                dataType: 'json',
                success: function (data) {
                    if (+data.status !== 0) {
                        $('[data-role="j-toast"]').show().find('.text').text(data.msg || '提交失败');
                        setTimeout(function () {
                            $('[data-role="j-toast"]').fadeOut();
                        }, 2e3);
                        return;
                    }
                    $('[data-role="j-toast"]').show().find('.text').text('提交成功');
                    setTimeout(function () {
                        $('[data-role="j-toast"]').fadeOut();
                    }, 2e3);
                    closeModal();
                },
                beforeSend: function () {},
                complete: function () {}
            });
        }
    });
})();
$(document).ready(function () {
    initdText();
    $(window).resize(function () {
        initdText();
    });
    function initdText() {
        if ($(window).width() < 767) {
            return false;
        }
        var dText = $('.d-banner-text');
        var dImg = $('.d-banner-text').parent();
        var dHei1;
        var dHei2;
        if (dText.length === 0) {
            return false;
        }
        dHei1 = Math.floor(dImg.width() * 0.45 / 0.867);
        dHei2 = dText.height();
        if (dHei1 > dHei2) {
            var destH = Math.abs(dHei1 - dHei2);
            dText.css({'paddingTop': destH / 2 + 10 + 'px'});
        }
        else {
            dText.css({'paddingTop': 0});
        }
    }
});