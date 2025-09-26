$("#gnb .dep1>li").hover(
  function () {
    $(this).children(".dep2_wrap").stop().show();
  },
  function () {
    $("#gnb .dep2_wrap").stop().slideUp();
  }
);
