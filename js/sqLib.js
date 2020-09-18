/**
 * Created by sq on 15/10/23.
 */
var sqLib = (function() {
    //initialize tab
    //tab切换
    var initTab = function($tabCtrlContainer, $tabContent) {
        $tabCtrlContainer.children().hover(function() {
            var $this = $(this);
            var targetContentId = $this.attr('data-target');
            var $target = $('#' + targetContentId);
            $tabCtrlContainer.children().removeClass('current');
            $this.addClass('current');
            $tabContent.children().removeClass('active');
            $target.addClass('active');
        },function() {
        });
        $tabCtrlContainer.children().eq(0).trigger('hover');
    };
    //手风琴
    var initAccordion = function($accordion){
        $accordion.find('.accordion-panel-heading').on('click',function(){
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).siblings('.accordion-panel-content').slideUp('slow');
            }
            else {
                $accordion.find('.accordion-panel-heading').removeClass('active');
                $accordion.find('.accordion-panel-content').slideUp('slow');
                $(this).addClass('active');
                $(this).siblings('.accordion-panel-content').slideDown('slow');
            }
        });
    };
    //省市二级联动
    var provinceCity = function($province,$city){
        for(var i = 0; i < $province.length; i++){
            $('<option>' + $province[i] + '</option>')
                .appendTo($province)
                .val($province[i]);
        }
        $province.on('change',function() {
            //当前选中的省的值
            var citySelected = $province.find('option:selected').val();
            //选中省的市的数组
            var changeCity = $city[citySelected];
            $().empty();
                for(var i = 0; i < changeCity.length; i++){
                $('<option>' + changeCity[i] + '</option>')
                    .appendTo($city)
                    .val(changeCity[i]);
            }
        });
    };

    return{
        initTab: initTab,
        initAccordion: initAccordion,
        provinceCity: provinceCity
    };
})();