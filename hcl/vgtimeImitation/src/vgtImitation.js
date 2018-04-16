import './vgtImitation.less';
import './js/render';
// import './js/tool/tab';
// import './js/tool/arrowCarouse';
import $ from 'jquery';

$(document).ready(function(){
    
    $(".vg_column_search_btn").mouseover(function(){
        $(".vg_column_search_content").css("width","400px");
        $(".vg_column_search_content").css("opacity","1");        
    });
    $(".vg_column_nav a:nth-of-type(4").mouseenter(function(){
        $(".vg_column_nav_extend").show();
    });
    $(".vg_column_nav_extend,.vg_column_nav a:nth-of-type(4)").mouseleave(function(){
        $(".vg_column_nav_extend").hide();
        $(".vg_column_nav_extend").mouseenter(function(){
            $(".vg_column_nav_extend").show();
        });
    });

// 在元素以外点击使元素隐藏
    (function(){
        // 判断e.target是否同一节点或者子节点
        function isParent(node,parentNode) {
            while(node != undefined && node != null && node.tagName.toUpperCase() != 'BODY') {
            
                if( node == parentNode) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
         };
        //  注意body的高度，登陆界面外点击以隐藏登陆界面
        $("body").on("click",function(e){
            var target = e.target;
            var login_page = $(".vg_login_page");
            var login_btn = $(".vg_login_btn");
            var isP_lp = isParent(target,login_page[0]);
            var isP_lb = isParent(target,login_btn[0]);
            if(!isP_lp && !isP_lb) {
                login_page.css("width","0px"); 
                login_page.css("opacity","0");
                login_btn.css("background-color","#f6fcf6");
            }
        });

        // $("body").on("click",function(e){
        //     var target = e.target;console.log("target:",target)
        //     var login_page = $(".vg_login_page");console.log("login_page:",login_page)
        //     var login_btn = $(".vg_login_btn");console.log("login_btn:",login_btn)
        //     var isP_lp = isParent(target,login_page[0]);console.log("isP_lp:",isP_lp)
        //     var isP_lb = isParent(target,login_btn[0]);console.log("isP_lb:",isP_lb)
        //     if(!isP_lp && !isP_lb) {
        //         login_page.css("width","0px"); 
        //         login_page.css("opacity","0");
        //         login_btn.css("background-color","#f6fcf6");
        //     }
        // });

    })();
    
(function(){
    var toggle_btn = $(".comment_toggle_btn");
    var ball = $(".comment_toggle_btn>div:nth-of-type(3)");
    
    toggle_btn.click(function(){     
        var left = ball.css("left");
        if ( left =="2px") {
            toggle_btn.css("background-color","#50E3C2");
            ball.css("left","20px");
        }
        if ( left =="20px") {
            toggle_btn.css("background-color","#F56467");
            ball.css("left","2px");        
        }
    });
})();

(function(){   
    var toggle_btn =$(".cookie_toggle_btn");
    var ball =$(".cookie_toggle_btn>div:nth-of-type(3)");
    
    toggle_btn.click(function(){
        var left = ball.css("left");
        if ( left =="2px") {
            toggle_btn.css("background-color","#50E3C2");
            ball.css("left","20px");
        }
        if ( left =="20px") {
            toggle_btn.css("background-color","#F56467");
            ball.css("left","2px");        
        }
    });
})();
    
(function(){

    var login_page = $(".vg_login_page");
    var login_btn = $(".vg_login_btn");
    login_btn.click(function(){
        var opacity = login_page.css("opacity");
      if (opacity == "0") {
          login_btn.css("background-color","#f6fcf6");
          login_page.css("width","450px"); 
          login_page.css("opacity","1");
      }
      if (opacity == "1") {
          login_btn.css("background-color","#F0F0F0");        
          login_page.css("width","0px"); 
          login_page.css("opacity","0");
      }          
    })
  })();

(function(){
    // 顶部与左侧 在scroll事件下的CSS位置改变
    window.onscroll = function(){
        var sTop = document.documentElement.scrollTop;
        if(sTop >= 30) {
            $(".header").css("position","fixed");
            $(".vg_link").css("display","none");
            $(".vg_aside").css("top","50px");
            $(".main_body").css("margin-top","101px");
        }
        else{
            $(".header").css("position","relative");
            $(".vg_link").css("display","block");
            $(".vg_aside").css("top","81px");
            $(".main_body").css("margin-top","20px");            
        }
    
}
})();
});

  