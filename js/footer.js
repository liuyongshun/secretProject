/**
 * Created by Administrator on 2017/10/16.
 */

$(document).ready(function(){
//添加底部导航;

    $(".commonFooter").append('    <footer class="m-tabbar"><a class="tabbar-item" href="/"><img class="l-nav-icon active f" src="./images/event.png">\
        <span class="tabbar-txt">约战</span></a><a href="#" class="tabbar-item"><img class="l-nav-icon s" src="./images/ranking.png">\
        <span class="tabbar-txt">排行</span></a><a href="#" class="tabbar-item"><img class="l-nav-icon t" src="./images/shop.png"><span class="tabbar-txt">商城</span>\
        </a><a class="tabbar-item" href="../myIndex.html"><img class="l-nav-icon fo" src="./images/my.png"><span class="tabbar-txt">我的</span></a></footer>')


    var $footer = $('.commonFooter').attr('data-footer');
    var imgUrl = "./images/event_hill.png";
    if($footer == 0)$(".f").attr("src","./images/event_hill.png");
    if($footer == 1)$(".s").attr("src","./images/ranking_hill.png");
    if($footer == 2)$(".t").attr("src","./images/shop_hill.png");
    if($footer == 3)$(".fo").attr("src","./images/my_hill.png");
})