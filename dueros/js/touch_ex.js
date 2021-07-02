// JavaScript Document
 /**
   * 触摸事件 侦听某个页面元素的触摸事件 传入触摸的方向
   * @param  {元素}   el       要使用touch事件的元素
   * @param  {function} callback 回调函数 
   * @return {none}            none
   */
  function touch(el,callback){
    var startX, startY, moveEndX, moveEndY, X, Y,scrollDirection;

    $(el).on("touchstart", function(e) {
        // e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
        // startX = e.changedTouches[0].pageX,
        // startY = e.changedTouches[0].pageY;
    });

    $(el).on("touchend", function(e) {
        // e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        // moveEndX = e.changedTouches[0].pageX,
        // moveEndY = e.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;
        
        if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
          if(Math.abs(X)>30){
            scrollDirection = 'right';
          }

        }
        else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
          if(Math.abs(X)>30){
            scrollDirection = 'left';
          }
            
        }
        else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
          if(Math.abs(Y)>30){
            scrollDirection = 'down';
          }
        }
        else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
          if(Math.abs(Y)>30){
            scrollDirection = 'top';
          }
        }
        else{
            // alert("just touch");
        }

        if(scrollDirection&&scrollDirection!=''){
          callback(el,scrollDirection);
          scrollDirection='';
        }
    });
  }


  /**
   * 用法1

  function scrollMove(el,scrollDirection){

      var sl = $(el).scrollLeft();

      if(scrollDirection=='left'){
        sl+=50;
        $(el).scrollLeft(sl);
      }

      if(scrollDirection=='right'){
        sl-=50;
        $(el).scrollLeft(sl);
      }
  }

  var touch_el = $('.section-cont-box-warp');

  touch(touch_el,scrollMove);
  */
