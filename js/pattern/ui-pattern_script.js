$(function () {
  $(".sitemap").on("click", function () {
    $("#nav_all").addClass("active");
  });
});

$(function () {
  $("#nav_all .close").on("click", function () {
    $("#nav_all").removeClass("active");
  });
});

$(function () {
  $("#gnb").mouseenter(function () {
    $("#header").addClass("active");
  });
});

$(function () {
  $("#gnb").mouseleave(function () {
    $("#header").removeClass("active");
  });
});

$(function () {
  $(".language_button").click(function () {
    $("language_list").show();
  });
});

$(function () {
  $(".language_list li").click(function () {
    $(".language_list").hide();
  });
});
