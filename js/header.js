$(document).ready(function(){
    const  $menu= $('.item')
    const submenu = $('.item div')
    console.log(submenu)
    let headerHeight = $('.header').outerHeight();

    $.each($menu,function(index,item){
        if(index==1 || index ==2 |index==3){
            $(this).mouseenter(function(){
                let subHeight = $(this).find('div').outerHeight();
                console.log(subHeight)
                $('.header').stop().animate({height: headerHeight + subHeight+'px'},100)                
                $(this).find('div').stop().show(200);
            });
            $(this).mouseleave(function(){
                $('.header').stop().animate({height: headerHeight+'px'},50)
                $(this).find('div').stop().hide(150);
            })  
        } else{}
    })
})