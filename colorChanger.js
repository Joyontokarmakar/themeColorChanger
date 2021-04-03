////javascript
//const theme_color = document.getElementsByClassName('colors');
//
//let i;
//for(i = 0;i<colors.length;i++){
//    colors[i].addEventListener('click', changecolor);
//}
//
//function changecolor(){
//    let theme_change_color = this.getAttribute('data-color');
//    document.documentElement.style.setProperty('--theme_change_color', theme_change_color);
//}



//jQuery
$('.theme_color').each(function(){
	$(this).click(function(){
		let theme_change_color = $(this).attr('data-color');
		document.documentElement.style.setProperty('--theme_change_color', theme_change_color);
	});
});