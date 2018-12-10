//Some JS
$('.another__benefit , .another__limitation').click(function(){

	$(this).next('.another__list').toggleClass('dis__block');

	if ($(this).next('.another__list').hasClass('dis__block')) {
		$(this).find('.another__plus').text('-');
	} else {
		$(this).find('.another__plus').text('+');
	}

});

$('.stat__info').mCustomScrollbar({
    axis: 'y'
});
