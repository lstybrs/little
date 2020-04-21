$(function () {

  var $js_tab = $('[js-tab]');
  $js_tab.each(function () {
    $(this).tab();
  });

  var $mainCont_item = $('[js-move]');

  $('#backTop').backTop();

    var main_w = $mainCont_item.width();
    var $sideBar = $('#sideBar');
    var sideBar_w = $sideBar.width();

  $(window).resize(function () {
    if ($(window).width() <= main_w) {
      $sideBar.css({left: 'auto', right: 0});
    } else {
      $sideBar.css({left: widthChanged($(this).width()), right: 'auto'});
    }
  });
});

;(function ($, window, document) {

  $.fn.slider = function (obj) {
    var $oSlider = obj;

    function sliderChange(curIndex) {
      $slider_item.eq(curIndex).animate({left: 0});
    };
  };

  $.fn.tab = function () {
    var $tabBtn_wrapper = this.find('.tab-title');
    var $tab_btn = $tabBtn_wrapper.find('a');
    var $tab_cont = this.find('.tab-cont__item');
    var $tab_wrapper = $tab_cont.parent();

    var week_default = ['最新', '一', '二', '三', '四', '五', '六', '日'];
    var week_arr = ['最新', '周一', '周二', '周三', '周四', '周五', '周六', '周日'];


    $tab_btn.click(function () {
      var index = $(this).index();

      $tab_btn.removeClass('cur');  
      $(this).addClass('cur');

      if ($tab_wrapper.hasClass('tab-cont')) {
        $tab_wrapper.animate({marginLeft: -index * 260});
      } else {
        $tab_cont.removeClass('tab-cont__cur');
        $tab_cont.eq(index).addClass('tab-cont__cur');
      }

      if ($tabBtn_wrapper.hasClass('week-tab')) {
        $tab_btn.each(function (i) {
          $(this).text(week_default[i]);
        });

        $(this).text(week_arr[index]);
      }

      return false;
    });
  };

  $.fn.backTop = function () {
    var $elem = this;
    var $doc = $(document.body);
    var client_h = $(window).height();

    $elem.click(function () {
      $doc.animate({scrollTop: 0});
    });
  }

})(window.jQuery, window, document);