/**
 * Created by Administrator on 2017/2/20.
 */
$(".camNavUl > li > a").hover(function(){
    $(this).find('.iconfont').html('&#xe76d;');
    $(this).next(".navBox").show();
    $(this).addClass('hover');
},function(){
    $(this).find('.iconfont').html('&#xe771;');
    $('.navBox').hide();
    $(this).removeClass('hover');

});
$(".nav li > a").hover(function(){
    $(this).next("div").show();
    var bool = $(this).next("div").hasClass('menu-list');
    if(bool){
        $(this).css({
            "border-radius": "10px",
            "border-bottom-right-radius" : "0",
            "border-bottom-left-radius" : "0",
            "background-color": "#1d56d8"
        })
    }
    $(this).css({
        "background-color": "#1d56d8"
    })

},function(){
    $(this).next("div").hide();
    $(this).css({
        "border-radius": "10px",
    });
    if($(this).hasClass('hover') === false){
        $(this).css({
            "background-color": "transparent"
        });
    }
});

$(".menu-list").hover(function(){
    $(this).show();
    $(this).prev('a').css({
        "border-radius": "10px",
        "border-bottom-right-radius" : "0",
        "border-bottom-left-radius" : "0",
        "background-color": "#1d56d8"
    })
},function(){
    $(this).hide();
    $(this).prev('a').css({
        "border-radius": "10px",

    });
    if($(this).prev('a').hasClass('hover') === false){
        $(this).prev('a').css({
            "background-color": "transparent"
        });
    }
});

$(".navBox").hover(function(){
    $(this).prev('a').find('.iconfont').html('&#xe76d;');
    $(this).show();
    $(this).prev('a').addClass('hover');
},function(){
    $(this).prev('a').find('.iconfont').html('&#xe771;');
    $(this).hide();
    $(this).prev('a').removeClass('hover');
});

$('.showList').on('mouseenter','.col',function(){
    $(this).find(".card").show();
});

$('.showList').on('mouseleave','.col',function(){
    $(this).find(".card").hide();
});

$('.showList').on('click','.col .blockClick',function(){
    var showId = $(this).parent().find('.btn_praise').attr('data-id');
    window.location.href = "/show/view/"+showId;
});

$('.authorNewList').on('click','.col',function(){
    var authorId = $(this).find('.blockClick').attr('data-id');
    window.location.href = "/author/author_info/"+authorId;
});


// $('.authorList .col .blockClick').click(function(){
//     var authorId = $(this).attr('data-id');
//     window.location.href = "/author/author_info/"+authorId;
// });

$('.showList').on('click','.indexSlide',function(){
    window.location.href = "http://baidulogo.bj.bcebos.com/event_file/201907091152216875.rar";
});

$('.eventWorkList .col').hover(function () {
    $(this).find(".card").show();
},function () {
    $(this).find(".card").hide();
});

$('.authorNewList .col').hover(function () {
    $(this).find(".info").show();
},function () {
    $(this).find(".info").hide();
});

$(".btn_top").click(function () {
    var speed = 200;
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
});

$('.share span,.shareTools .item').hover(function () {
    $(this).addClass('hover');
},function () {
    $(this).removeClass('hover');
});

$('.userTools').hover(function () {
    $(this).addClass('hover');
},function () {
    $(this).removeClass('hover');
});

// $('.contentTools span').hover(function () {
//     $(this).addClass('hover');
// },function () {
//     $(this).removeClass('hover');
// });

// 展示列表 点赞按钮
$('.showList').on('click','.col .btn_praise',function(){
    var id = $(this).attr('data-id');
    var type = $(this).attr('data-type');
    $(".mask").remove();
    var parse = $(this).parent().parent().find('.praiseNo');
    var parseNo = parse.html();
    $.ajax({
        type: 'POST',
        url: '/index.php/praise',
        dataType: 'json',
        data: {'id': id, 'type': type, 'csrf_test_name': getCookie("csrf_cookie_name")},
        success: function (data){
            if(data.code == 203){
                $('body').after('<div class="mask"><span>' + data.message + '</span></div>');
                $(".mask").delay(1000).fadeOut(2000);
            }
            if(data.code == 200){
                parse.html(parseInt(parseNo)+1);
                $('body').after('<div class="mask"><span>' + data.message + '</span></div>');
                $(".mask").delay(1000).fadeOut(2000);
            }
        }
    });
});
// 活动作品 点赞按钮
$('.workTools').on('click','.btn_praise',function(){
    var id = $(this).attr('data-id');
    var type = $(this).attr('data-type');
    $(".mask").remove();
    var parse = $(this).parent().parent().find('.praiseNo');
    var parseNo = parse.html();
    $.ajax({
        type: 'POST',
        url: '/index.php/praise',
        dataType: 'json',
        data: {'id': id, 'type': type, 'csrf_test_name': getCookie("csrf_cookie_name")},
        success: function (data){
            if(data.code == 203){
                $('body').after('<div class="mask"><span>' + data.message + '</span></div>');
                $(".mask").delay(1000).fadeOut(2000);
            }
            if(data.code == 200){
                parse.html(parseInt(parseNo)+1);
                $('body').after('<div class="mask"><span>' + data.message + '</span></div>');
                $(".mask").delay(1000).fadeOut(2000);
            }
        }
    });
});
// $('.btn_praise').click(function(){
//     var id = $(this).attr('data-id');
//     var type = $(this).attr('data-type');
//     $(".mask").remove();
//     var parse = $(this).parent().parent().find('.praiseNo');
//     var parseNo = parse.html();
//     $.ajax({
//         type: 'POST',
//         url: '/index.php/praise',
//         dataType: 'json',
//         data: {'id':id,'type':type},
//         success: function (e){
//             if(e.error){
//                 $('body').after('<div class="mask">您已经赞过了</div>');
//                 $(".mask").delay(1000).fadeOut(2000);
//             }
//             if(e.msg==0){
//                 parse.html(parseInt(parseNo)+1);
//                 $('body').after('<div class="mask">点赞成功</div>');
//                 $(".mask").delay(1000).fadeOut(2000);
//             }
//         }
//     });
// });

// 展示详情页面 点赞按钮
$('.praise').click(function(){
    var obj = $(this);
    $(".mask").remove();
    var id = obj.attr('data-id');
    var type = obj.attr('data-type');
    var parse = obj.find('p');
    var parseNo = parse.attr('data-no');
    $.ajax({
        type: 'POST',
        url: '/index.php/praise',
        dataType: 'json',
        data: {'id': id, 'type': type, 'csrf_test_name': getCookie("csrf_cookie_name")},
        success: function (data){
            if(data.code == 203){
                $('body').after('<div class="mask"><span>' + data.message + '</span></div>');
                $(".mask").delay(1000).fadeOut(2000);
            }
            if(data.code == 200){
                parse.attr('data-no',parseInt(parseNo)+1);
                parse.html(parseInt(parseNo)+1);
                obj.find('span').addClass('hover');
                $('body').after('<div class="mask"><span>' + data.message + '</span></div>');
                $(".mask").delay(1000).fadeOut(2000);
            }
        }
    });
});

// 收藏按钮
$('.collect').click(function(){
    var obj = $(this);
    $(".mask").remove();
    var id = obj.attr('data-id');
    var type = obj.attr('data-type');
    $.ajax({
        type: 'POST',
        url: '/index.php/favorite',
        dataType: 'json',
        data: {'id': id, 'type': type, 'csrf_test_name': getCookie("csrf_cookie_name")},
        success: function (data){
            if(data.code == 200){
                obj.find('span').addClass('hover');
            }
            $('body').after('<div class="mask"><span>' + data.message + '</span></div>');
            $(".mask").delay(1000).fadeOut(2000);
        }
    });
});

// 删除收藏按钮
$('.btn_del_favorite').click(function(){
    var obj = $(this);
    var id = obj.attr('data-id');
    var type = obj.attr('data-type');
    var url = obj.attr('data-url');
    $.ajax({
        type: 'POST',
        url: '/index.php/favorite/del',
        dataType: 'json',
        data: {'id': id, 'type': type, 'csrf_test_name': getCookie("csrf_cookie_name")},
        success: function (data){
            if(data.code == 200){
                obj.parent().parent().remove();
            }
            $('body').after('<div class="mask"><span>' + data.message + '</span></div>');
            $(".mask").delay(1000).fadeOut(2000);
        }
    });
});


function searchFunc(){
    var world = $.trim($(".ipt_key").val());
    if(world == '' || world == null){
        alert("关键词不能为空！");
        return false;
    }
    return true;
}
function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

var copyright = new Date();//取得当前的日期
var update = copyright.getFullYear();//取得当前的年份
var footerObj = document.getElementById('timeYeat');
footerObj.innerHTML = update;

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?e67fe43062fb1b2232ebb864a5ab6297";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();