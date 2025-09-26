// GNB
$("#gnb .dep1>li").hover(
  function () {
    $(this).children(".dep2_wrap").stop().show();
  },
  function () {
    $("#gnb .dep2_wrap").stop().slideUp();
  }
);

//수량 옵션
count_number = {
  init: function () {
    this.action();
  },
  action: function () {
    var $ele = {
      btn: $("._count :button"),
    };
    $ele.btn.on({
      click: function (e) {
        e.preventDefault();
        var $count = $(this).parent("._count").find(".inp");
        var now = parseInt($count.val());
        var min = 1;
        var max = 999;
        var num = now;
        if ($(this).hasClass("minus")) {
          var type = "m";
        } else {
          var type = "p";
        }
        if (type == "m") {
          if (now > min) {
            num = now - 1;
          }
        } else {
          if (now < max) {
            num = now + 1;
          }
        }
        if (num != now) {
          $count.val(num);
        }
      },
    });
  },
};
$(function () {
  if ($("._count :button").length > 0) {
    count_number.init();
  }
});
