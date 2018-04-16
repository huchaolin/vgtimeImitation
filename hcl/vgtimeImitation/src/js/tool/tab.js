
import $ from 'jquery';


export default  function tab(deleg,btnArr,contentArr){
        var len = btnArr.length;
        var lastBtn=[{}];
        var lastContent =[{}];
        lastContent.push(contentArr[1]); 
        lastBtn.push(btnArr[0]); 

        deleg.click(function(e){
            e.preventDefault();            
            var target = e.target;

            while ( target != deleg[0]) {
                 if( target.tagName.toUpperCase() == "BUTTON") {
                    if(lastBtn.length > 0) {
                        lastBtn.pop().className ="btn_style";
                    }
                    if(lastContent.length > 0) {
                        $(lastContent.pop()).hide();
                    }
                    target.className ="btn_click_style";
                    lastBtn.push(target); 
                    var index = btnArr.index(target);
                        index++;
                    $(contentArr[index]).show();
                    lastContent.push(contentArr[index]);
                    return; 
                 }
                 else {
                     target = target.parentNode;
                 }
            }
        });
}
     
      


