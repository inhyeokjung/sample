$("#nav>ul>li").mouseover(function(){
    $("#nav>ul>li>ul").stop().slideDown();
    $("#nav_bg").stop().slideDown();
});
$("#nav>ul>li").mouseout(function(){
    $("#nav>ul>li>ul").stop().slideUp();
    $("#nav_bg").stop().slideUp();
});

/*bx 슬라이더*/

let now = 0;
let imgCnt = 2;


slideStart();

function slideStart(){
    setInterval(slideShow,3000);
};


function slideShow(){
    now=now==imgCnt? now=0:++now;
    
    $("#slider>img").eq(now-1).css({
        "margin-left":"-1200px",
        "transition":"all 1s"
    });
    $("#slider>img").eq(now).css({
        "margin-left":"0px",
        "transition":"all 1s"
    });
    
    if(now==0){
        $("#slider>img").eq(1).css({
            "margin-left":"1200px",
            "transition":"none"
        });
    }
    if(now==1){
        $("#slider>img").eq(2).css({
            "margin-left":"1200px",
            "transition":"none"
        });
    }
    if(now==2){
        $("#slider>img").eq(0).css({
            "margin-left":"1200px",
            "transition":"none"
        });
    }
}


$("#click_pop").click(function(){
    $("#popup").css({
        "display":"block"
    });
});

$("#close").click(function(){
    $("#popup").css({
        "display":"none"
    });
});











