
$(window).scroll(function() {
    if($(this).scrollTop() > 100) {
        $('.navbar').removeClass('navbar-transparent');
    } else {
        $('.navbar').addClass('navbar-transparent');
    }
});
// (function(){
//   $(window).scroll(function () {
//       var top = $(document).scrollTop();
//       $('.fluid-bg').css({
//         'background-position': '0px -'+(top/3).toFixed(2)+'px'
//       });
//       if(top > 50)
//         $('.navbar').removeClass('navbar-transparent');
//       else
//         $('.navbar').addClass('navbar-transparent');
//   }).trigger('scroll');
// })();


