// alert("file is working");
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 500);
});
