$(document).ready(function(){
    // header hide
    $(window).scroll(function(event){
        let st = $(this).scrollTop()
        console.log(st)
        if(st>768){
            $('.header').addClass('hide')
            $('.mb_bt').addClass('hide')
        }else{
            $('.header').removeClass('hide')
            $('.mb_bt').removeClass('hide')
        }
    })
})

// 모바일 메뉴 버튼
$('.mb_bt').click(function(e){
	e.preventDefault()
	$('.mb_bt').toggleClass('mb_bt_open')
	$('.mb_menu_mask').toggleClass('mb_menu_mask_active')
	$('.mb_nav').toggleClass('mb_nav_open')
	$('.mb_menu>li').height(50)
})

// 화면 사이즈 체크
$(window).resize(function(){
	let temp = $(window).width()
	if(temp > 768){
		$('.mb_bt').removeClass('mb_bt_open')
		$('.mb_menu_mask').removeClass('mb_menu-mask_active')
		$('.mb_nav').removeClass('mb_nav_open')
	}else{}
})

// 모바일 메뉴 펼치기 기능
// 1. 모바일 메뉴 불러오기
const mb_mainmenu = $('.mb_mainmenu')
// 2. 모바일 서브메뉴 불러오기
const mb_submenu = $('.mb_submenu')
// 3. 펼쳐진 서브메뉴의 높이값
let mb_submenu_height = []
// 4. 높이값 계산을 실행
// 배열명.forEach(function(item, index){할일});
$.each(mb_submenu, function(index){
	// 각각의 .mb_submenu로 가서
	// li의 개수를 파악한다.
	let count = $(this).find('li').length
	// 최종 결과 저장 (51px * count + 22)
	mb_submenu_height[index] = 50*count+20
})
// console.log(mb_submenu_height)
let mb_li = $('.mb_menu > li')
$.each(mb_mainmenu, function(index){
	$(this).click(function(e){
		e.preventDefault()
		// mb-mainmenu-open이 있으면 펼치고 없으면 닫기
		$(this).toggleClass('mb_mainmenu_open')
		let active = $(this).hasClass('mb_mainmenu_open')
		if(active) {
			// 해당 되는 (클릭된) li>a(depth1)의 ul의 높이값을 temp에 저장
			let temp = mb_submenu_height[index]
			// 해당 요소에 높이 부여
			mb_li.eq(index).height(temp+50)
			mb_li.eq(index).siblings().height(50)
			$(this).toggleClass('mb_mainmenu_open')
		}else {
			// 클릭이 안 된 경우
			mb_li.eq(index).height(50)
		}
	})
})

// header 속성
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
                $('.header').stop().animate({height: headerHeight+'px'},100)
                $(this).find('div').stop().hide(150);
            })  
        } else{}
    })
})

// products tab-menu
$(function(){
	var tabAnchor = $('.selector li'),
		tabPanel = $('.tabs_panel')
	
	tabAnchor.on('click', function(e){
		e.preventDefault()
		tabAnchor.find('a').removeClass('active')
		$(this).find('a').addClass('active')
	
		tabPanel.hide()
		tabPanel.eq($(this).index()).show()
	})
	tabAnchor.eq(0).trigger('click')
})

$(document).ready(function(){
	$('.flip').mouseenter(function(){
		$(this).addClass('animate__flipInY')
	});
	// $('.flip').mouseout(function(){
	// 	$(this).removeClass('animate__flipInY')
	// });
})

// swiper slide 설정
var swiper = new Swiper(".pc_banner", {
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	dynamicBullets: true,
	},	
	autoplay: {
	delay: 5000,
	disableOnInteraction: false,
	},
	loop: true
});

var swiper = new Swiper(".autoslide", {
	spaceBetween: -250,
	slidePerView: 'auto',
	centeredSlides: false,
	autoplay: {
	delay: 0,
	disableOnInteraction: false,
	},
	speed: 5000,
	loop: true,
	loopAdditionalSlides: 1,
	simulateTouch: false
});

var swiper = new Swiper(".creaditionSwiper", {
	slidesPerView: 2,
	centeredSlides: true,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});