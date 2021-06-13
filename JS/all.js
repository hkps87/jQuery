$(function(){
	$('.back_top').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300 ){
			$('.back_top').fadeIn(222);
		} else {
			$('.back_top').stop().fadeOut(222);
		}
	}).scroll();
});

var VisibleMenu = ''; // 記錄目前顯示的子選單的 ID

// 顯示或隱藏子選單
function switchMenu( theMainMenu, theSubMenu, theEvent ){
    var SubMenu = document.getElementById( theSubMenu );
    if( SubMenu.style.display == 'none' ){ // 顯示子選單
        SubMenu.style.minWidth = theMainMenu.clientWidth; // 讓子選單的最小寬度與主選單相同 (僅為了美觀)
        SubMenu.style.display = 'block';
        hideMenu(); // 隱藏子選單
        VisibleMenu = theSubMenu;
    }
    else{ // 隱藏子選單
        if( theEvent != 'MouseOver' || VisibleMenu != theSubMenu ){
            SubMenu.style.display = 'none';
            VisibleMenu = '';
        }
    }
}

// 隱藏子選單
function hideMenu(){
    if( VisibleMenu != '' ){
        document.getElementById( VisibleMenu ).style.display = 'none';
    }
    VisibleMenu = '';
}

