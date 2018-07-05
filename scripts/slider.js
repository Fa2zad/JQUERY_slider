$(document).ready(function(){

    //alert("Aaa");
    var flagWait = false;
    var slideFirst = 0;
    var slideLast = 0;
    var marginLeftValue = 0;
    var moveValue = 160;



    var rightArrow = $("#arrowRightIcon");
    var leftArrow = $("#arrowLeftIcon");

    var sliderImages = $("#sliderImages");
    var leftValue = sliderImages.position().left;
    var ulWidth = sliderImages.width();
    var railWidth = $("#sliderRail").width();
    var li = sliderImages.children();
    var length = li.children().length;

    var oldX;
    var newX;
    var isDrag = false;


    slideLast = length-1;
    rightArrow.on("click",function () {
        slide("right");   
    });
    leftArrow.on("click",function () {
        slide("left");   
    });



    $(sliderImages).on( "mousedown", function( event ) {

        oldX = event.pageX;
        isDrag = true;
    });

    $(sliderImages).on("mouseup", function (event) {

        sliderImages.css("cursor", "auto");
        isDrag = false;
    });
    $(sliderImages).on("mousemove", function (event) {
        sliderImages.css("cursor", "ew-resize");
        
        if (isDrag) {
            isDrag = false;
            newX = event.pageX;
            sliderDrag(oldX, newX);
            setTimeout(() => {
                isDrag= true;
            }, 200);
        }
    });

///--------=== slide function ===---------///   
///          -to sliding image-           ///
///---------------------------------------///  
    function slide(direction) {
        leftValue = sliderImages.position().left;

        if ((direction == "right") && !flagWait) {
            checkWidth(direction);

            sliderImages.css("transform", "translate(" + Number(parseInt(leftValue) - moveValue) +"px)");
            flagWait = true;
            
            setTimeout(() => {
                flagWait = false;
            }, 500);
        } else if ((direction == "left") && !flagWait) {
            checkWidth(direction);

            setTimeout(() => {
                sliderImages.css("marginLeft"   , 0 );
                sliderImages.css("transition-duration","0.5s");
                
            }, 10);

            flagWait = true;

            setTimeout(() => {
                flagWait = false;
            }, 500);
        }
    }

///-----=== checkWidth function ===-------///   
///      -calling by slide function-      ///
///---------------------------------------///  
    function checkWidth(direction) {
        if (direction == "right") {

            li = sliderImages.children();
            var firstImage = li[slideFirst].outerHTML;

            if ((Math.abs(leftValue) + railWidth) >= ulWidth - moveValue) {
                sliderImages.append(firstImage);
                slideFirst++;
            }
               

        } else if (direction == "left") {
                
            li = sliderImages.children();

            var lastImage = li[slideLast].outerHTML;
            if (leftValue >= 0) {
                sliderImages.prepend(lastImage);
                li[slideLast].remove();
                marginLeftValue -= moveValue;
                sliderImages.css("transition-duration","0s");
                
                sliderImages.css("marginLeft"   , -moveValue );
            }else{
                sliderImages.css("transform", "translate(" + Number(parseInt(leftValue) + moveValue) +"px)");
            }
            

                    
                    
        }
        

    }


///------=== sliderDrag function ===------///   
///        -to slide by draging-          ///
///---------------------------------------/// 
    function sliderDrag(oldx, newx) {
        

        if (newx - oldx > 20) {
            oldX = newX;
            slide("left");
        } else if(oldx - newx > 20) {
            oldX = newX;
            slide("right");
        }
        
    }


});
 
