import $ from 'jquery';

export default function(){
    $(".comment_toggle_btn").click(function() {
        $(".vg_comment_page").toggle();
    });
    // 评论手动滚动
    var comment = $(".vg_comment_content");
    var toLeft = $(".comment_to_left");
    var toRight = $(".comment_to_right");
    var parentWidth = comment.width();
    var childWidth = $(".vg_comment_content>div").width();
    var num = parseInt(parentWidth/childWidth);
    var i =0;
    var len = $(".vg_comment_content>div").length;
    var totalWidth = len*childWidth;
    comment.css("width",totalWidth+"px")

    toRight.click(function(){
        if(num == (len-i) ){
            return ;
        }
        ++i;
        var width = -childWidth*i;
        comment.css("left",width+"px");
    });
    toLeft.click(function(){
        if(i == 0){
            return ;
        }
        --i;
        var width = -childWidth*i;
        comment.css("left",width+"px");
    });
};
