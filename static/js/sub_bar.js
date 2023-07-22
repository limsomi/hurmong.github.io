if(matchMedia("(max-width:576px)").matches)
{
    $('.logo_img').attr("src","../static/img/logo_black.svg").fadeIn();
    $('.menu_bar').attr("style",'visibility : hidden');
    $('.direction img').attr("src","../static/img/mobile_dir.svg").fadeIn();
    $('.title img').attr("src","../static/img/mobile_title.svg").fadeIn();
    $('.info img').attr("src","../static/img/mobile_info2.svg").fadeIn();
    
}
else
{
    $(document).ready(function(){
        $('.menu_bar').attr("style",'visibility : visible');
        $('.ham-btn').attr("style",'visibility : hidden');
        $('.ham-con').attr("style",'visibility : hidden');
    })
}