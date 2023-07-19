if(matchMedia("(max-width:576px)").matches)
{
    $('.logo_img').attr("src","../static/img/logo_black.svg").fadeIn();
    $('.menu_bar').attr("style",'visibility : hidden');
    $('.title img').attr("src","../static/img/mobile_titlebook.svg").fadeIn();

}
else
{
    $(document).ready(function(){
        console.log('hi');
        $('.menu_bar').attr("style",'visibility : visible');
        $('.ham-btn').attr("style",'visibility : hidden');
        $('.ham-con').attr("style",'visibility : hidden');
    })
}