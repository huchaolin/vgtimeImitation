import $ from 'jquery';
export default function(leftArrow, rightArrow, moveBox) {
    // console.log("leftArrow",leftArrow)
    // console.log("rightArrow",rightArrow)
    // console.log("moveBox",moveBox)
    moveBox.css("margin-left",0+ "px");
    // 重置每个标签页的为最初的位置↑
    leftArrow.hide();
    rightArrow.show();
    //重置箭头的初始状态
    var index = 0;
    // moveBox = ".vg_club_content"
    var child=  moveBox[0].children,
        childWidth = parseInt($(child[0]).css("width")),
        childNum = child.length,
        childMarginLeft = parseInt($(child[0]).css("margin-left")),
        childMarginRight = parseInt($(child[0]).css("margin-right")), 
        childRealWidth = childWidth + childMarginLeft + childMarginRight,
        totalWidth = childNum*childRealWidth;
        moveBox.width(totalWidth + "px");
        // console.log("childMarginLeft",childMarginLeft);
        //重置盒子宽度为总子元素宽度↑
        // 计算可视框宽度以及能放下几个元素↓
    var visibleBox = moveBox[0].parentNode,
        visibleWidth = $(visibleBox).width(),
        visibleNum = parseInt(visibleWidth/childRealWidth);
     leftArrow.click(function() {
        index--;
        var lenth = -index*childRealWidth;
        moveBox.css("margin-left",lenth + "px");
        if (index < (childNum - visibleNum)) {
            rightArrow.show();
        }
        if (index == 0) {
           leftArrow.hide();
           return;
         }
     });
     rightArrow.click(function() {
         index++;
         var lenth = -index*childRealWidth;
         moveBox.css("margin-left",lenth + "px");
         if (index >0) {
             leftArrow.show();
         }
         if (index == (childNum - visibleNum)) {
            rightArrow.hide();
            return;
          }
     });
}