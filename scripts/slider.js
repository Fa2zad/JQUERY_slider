$(document).ready(function(){

    //alert("Aaa");
    var flagWait = false;
    var slideFirst = 0;
    var slideLast = 0;



    var rightArrow = $("#arrowRightIcon");
    var leftArrow = $("#arrowLeftIcon");

    var sliderImages = $("#sliderImages");
    var leftValue = sliderImages.position().left;
    var ulWidth = sliderImages.width();
    var railWidth = $("#sliderRail").width();
    var li = sliderImages.children();
    var length = li.children().length;
    slideLast = length-1;
    rightArrow.on("click",function () {
        slide("right");   
    });
    leftArrow.on("click",function () {
        slide("left");   
    });

///--------=== slide function ===---------///   
///          -to sliding image-           ///
///---------------------------------------///  
    function slide(direction) {
        //alert(direction);
        //alert(leftValue);
        leftValue = sliderImages.position().left;

        if ((direction == "right") && !flagWait) {
            checkWidth(direction);

            sliderImages.css("transform", "translate(" + Number(parseInt(leftValue) - 160) +"px)");
            flagWait = true;

            setTimeout(() => {
                flagWait = false;
            }, 500);
        } else if ((direction == "left") && !flagWait) {
            checkWidth(direction);

            sliderImages.css("transform", "translate(" + Number(parseInt(leftValue) + 160) +"px)");
            flagWait = true;

            setTimeout(() => {
                flagWait = false;
            }, 500);
        }
    }



    function checkWidth(direction) {
        if (direction == "right") {
            //if ((Math.abs(leftValue) + railWidth) >= ulWidth - 160) {

                li = sliderImages.children();
                var firstImage = li[slideFirst].outerHTML;
                sliderImages.append(firstImage);

                    //$(li[0]).animate({width: '0'}, 500);
                    //setTimeout(() => {
                        //$(li[0]).remove();
                    //}, 500);

                slideFirst++;
                // return 160;

            // }else{
            //     return 160;
            //}
            
        } else if (direction == "left") {
            //if (leftValue  >= 0) {
                
                li = sliderImages.children();

                    //$(li[length-1]).animate({width: '0'}, 0);
                    alert(slideLast);
                    var lastImage = li[slideLast].outerHTML;

                    sliderImages.prepend(lastImage);

                    li = sliderImages.children();
                    //$(li[0]).animate({width: '160'}, 500);
                    //setTimeout(() => {
                        //$(li[length]).remove();
                    //}, 500);

                    //slideLast--;
                    //if (slideLast < 0 ) {
                        //slideLast = length-1;
                    //}
            //     return 160;
            // }else{
            //     return 160;
             //}
        }
        

    }


});
 
