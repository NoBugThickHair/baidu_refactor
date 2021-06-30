/**
 * Created by Administrator on 2017/2/20.
 */


// 下拉框展示功能
$(".camNavUl > li > a").hover(function () {
    $(this).find('.iconfont').html('&#xe76d;');
    $(this).next(".navBox").show();
    $(this).addClass('hover');
}, function () {
    $(this).find('.iconfont').html('&#xe771;');
    $('.navBox').hide();
    $(this).removeClass('hover');

});
$(".nav li > a").hover(function () {
    $(this).next("div").show();
    var bool = $(this).next("div").hasClass('menu-list');
    if (bool) {
        $(this).css({
            "border-radius": "10px",
            "border-bottom-right-radius": "0",
            "border-bottom-left-radius": "0",
            "background-color": "#1d56d8"
        })
    }
    $(this).css({
        "background-color": "#1d56d8"
    })

}, function () {
    $(this).next("div").hide();
    $(this).css({
        "border-radius": "10px",
    });
    if ($(this).hasClass('hover') === false) {
        $(this).css({
            "background-color": "transparent"
        });
    }
});

$(".menu-list").hover(function () {
    $(this).show();
    $(this).prev('a').css({
        "border-radius": "10px",
        "border-bottom-right-radius": "0",
        "border-bottom-left-radius": "0",
        "background-color": "#1d56d8"
    })
}, function () {
    $(this).hide();
    $(this).prev('a').css({
        "border-radius": "10px",

    });
    if ($(this).prev('a').hasClass('hover') === false) {
        $(this).prev('a').css({
            "background-color": "transparent"
        });
    }
});

//遮罩效果
$(".navBox").hover(function () {
    $(this).prev('a').find('.iconfont').html('&#xe76d;');
    $(this).show();
    $(this).prev('a').addClass('hover');
}, function () {
    $(this).prev('a').find('.iconfont').html('&#xe771;');
    $(this).hide();
    $(this).prev('a').removeClass('hover');
});

$('.showList').on('mouseenter', '.col', function () {
    $(this).find(".card").show();
});

$('.showList').on('mouseleave', '.col', function () {
    $(this).find(".card").hide();
});




var copyright = new Date();//取得当前的日期
var update = copyright.getFullYear();//取得当前的年份
var footerObj = document.getElementById('timeYeat');
footerObj.innerHTML = update;

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?e67fe43062fb1b2232ebb864a5ab6297";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();