import $ from 'jquery';
import renderComment from '../tpl/commentContent.art';
import renderFirstBlock from '../tpl/firstBlock.art';
import renderSecondBlock from '../tpl/secondBlock.art';
import renderThirdBlock from '../tpl/thirdBlock.art';
import renderFourthBlock from '../tpl/fourthBlock.art';
import renderFifthBlock from '../tpl/fifthBlock.art';
import renderSixthBlock from '../tpl/sixthBlock.art';
import renderMainFoot from '../tpl/mainFoot.art';
import initReview from './tool/review';
import initTab from './tool/tab';
import initCarousel from './tool/arrowCarousel';
var api = API_URL;

$.get(`${api}/firstBlock`, data => {
    var rendedHTML = renderFirstBlock({data: data});
    $('#first_block').html(rendedHTML);
});
$.get(`${api}/remarks`, data=> {
    var renderHTML = renderComment({data:data});
    $('.vg_comment_content').html(renderHTML);
    initReview();
});
$.get(`${api}/secondBlock`, data=> {
    // data = {
    //     recommendTab: [
    //         [
    //             new Array(4),
    //             new Array(4)
    //         ],
    //         [
    //             new Array(4),
    //             new Array(4)
    //         ],
    //         [
    //             new Array(4),
    //             new Array(4)
    //         ]
    //     ],
    //     saleList: new Array(7)
    // }
    var renderHTML = renderSecondBlock({data});
    $('#second_block').html(renderHTML);
    var contentArr =$(".vg_recommend>div");
    var deleg = $(".vg_recommend_r1");
    var btnArr = $(".vg_recommend_r1>button");
    initTab(deleg,btnArr,contentArr);
});

$.get(`${api}/thirdBlock`, data => {
     data = {
            newsTab: [
                {
                    newsBlock1:[1,2,3],
                    newsBlock2: new Array(9)
                },
                {
                    newsBlock1:[2,3,4],
                    newsBlock2: new Array(9)
                }
            ],
         }
    var renderHTML = renderThirdBlock({data});
    $('#third_block').html(renderHTML);
    var contentArr =$(".vg_news>div");
    var deleg = $(".vg_news div.head_box");
    var btnArr = $(".vg_news div.head_box>button");
    initTab(deleg,btnArr,contentArr);
});

$.get(`${api}/fourthBlock`, data => {
    data = {
           clubTab: [
               new Array(11),
               new Array(8),
               new Array(7),
               new Array(9)            
           ]
        }
   var renderHTML = renderFourthBlock({data});
   $('#fourth_block').html(renderHTML);
   var contentArr =$(".vg_club_inner>div");
   var deleg = $(".vg_club_inner div.head_box");
   var btnArr = $(".vg_club_inner div.head_box>button");
   initTab(deleg,btnArr,contentArr);
   var clubTab = contentArr.slice(1,);
   //初始化第一个标签button页面的滑动效果
   initCarousel(
      $(clubTab[0]).children(".club_left_arrow"),
      $(clubTab[0]).children(".club_right_arrow"),
      $(clubTab[0]).children(".vg_club_content")
    );     
    
   btnArr.click(function(e){
       //根据点击的button在btnArr中的index，通过index初始化相应的页面中的滑动效果
       var target = e.target;
    //    console.log("target",target);
    //    console.log("target.tagName",target.tagName)
       var index = 0;
       if(target.tagName.toUpperCase() != "BUTTON") {
            target = $(target).parents(".vg_club_inner div.head_box>button");
            target = target[0]; 
        }
        if(target.tagName.toUpperCase() == "BUTTON") {
            index = btnArr.index(target);
            console.log("index",index);
            initCarousel(
                $(clubTab[index]).children(".club_left_arrow"),
                $(clubTab[index]).children(".club_right_arrow"),
                $(clubTab[index]).children(".vg_club_content")     
             );
       }
    });
});
$.get(`${api}/fifthBlock`, data => {
    data = {
            bigColum:new Array(4) ,
            smallColum:new Array(16) 
        }
   var renderHTML = renderFifthBlock({data});
   $('#fifth_block').html(renderHTML);
});
$.get(`${api}/sixthBlock`, data => {
    data = {
            magazine:new Array(2) 
        }
   var renderHTML = renderSixthBlock({data});
   $('#sixth_block').html(renderHTML);
});
$.get(`${api}/mainFoot`, data => {
   var renderHTML = renderMainFoot({data});
   $('#main_foot').html(renderHTML);
});