
if(matchMedia("(max-width:576px)").matches)
{
  $('.logo_img').attr("src","../static/img/logo_black.svg").fadeIn();
  $('.menu_bar').attr("style",'visibility : hidden');
  $('.direction img').attr("src","../static/img/mobile_dir.svg").fadeIn();
  $('.map_web').attr("style",'width:500px');
  $('.map_web').attr("style",'height:250px');


}

else
{
  $(document).ready(function(){
      $('.bar').attr('style', 'background-color: rgba(0,0,0,0) !important');
      $('.menu').attr('style', 'color:white !important');
      $('.hd').css("background-color","rgba(0,0,0,0)");

      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
          $('.bar').attr('style', 'background-color: whitesmoke !important');
          $('.menu').attr('style','color:black !important')
          $('.hd').css("background-color","whitesmoke");
          $('.logo_img').attr("src","../static/img/logo_black.svg").fadeIn();
  
        }
        else{
          // console.log('hey')
          $('.bar').attr('style', 'background-color: rgba(0,0,0,0) !important');
          $('.menu').attr('style', 'color:white !important');
          $('.hd').css("background","rgba(0,0,0,0)");
          $('.logo_img').attr("src","../static/img/logo_white.svg").fadeIn();

        }
      })
    })
}
