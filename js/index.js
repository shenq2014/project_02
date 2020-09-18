$(function(){
    var direction = 'left';
    var scolling = false;
    $('.control-left').on('click',function(){
        direction = 'left';
        /*clearInterval(leftInterval);*/
        controlLeft();
    });
    $('.control-right').on('click',function(){
        direction = 'right';
       /* clearInterval(leftInterval);*/
        controlRight();
    });
    function controlLeft() {
        if(!scolling) {
            scolling = true;
            $('.lis li:first').clone().appendTo('.lis');
            $('.lis').animate({left: -$('.lis li').width() + 'px'}, 'slow', function () {
                $('.lis li:first').remove();
                $('.lis').css('left', 0);
                scolling = false;
            });
        }
    }
    function controlRight() {
        if(!scolling) {
            scolling = true;
            $('.lis').css('left', -$('.lis li').width() + 'px');
            $('.lis li:last').clone().prependTo('.lis');
            $('.lis').animate({left: 0}, 'slow', function () {
                $('.lis li:last').remove();
                scolling = false;
            });
        }
    }
    var leftInterval;
    function mySetInterval(){
        leftInterval = setInterval(function(){
            if(direction == 'left'){
                controlLeft();
            }
            else{
                controlRight();
            }
        }, 2000);
    }
    mySetInterval();
    $('.lis').hover(function() {
        if(leftInterval)
            clearInterval(leftInterval);
    },function() {
        mySetInterval();
    });

    sqLib.initTab($('.tab1'), $('.tab2'));
    //放大
    var addCut = 20;
    $('.circle img').load(function() {
        $('.circle img').each(function() {
            $(this).data('size', {
                width: $(this).width(),
                height: $(this).height(),
                left: $(this).position().left,
                top: $(this).position().top
            });
        });
        $('.circle img').hover(function () {
            var size = $(this).data('size');
            $(this).stop().animate({
                width: size.width + addCut + 'px',
                height: size.height + addCut + 'px',
                left: size.left - addCut/2 + 'px',
                top: size.top - addCut/2 + 'px'
            }, 'fast');
        }, function () {
            var size = $(this).data('size');
            $(this).stop().animate({
                width: size.width + 'px',
                height: size.height + 'px',
                left: size.left + 'px',
                top: size.top + 'px'
            }, 'fast');
        });
    });

});
