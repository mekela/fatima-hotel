$(document).ready(function() {
	//dropdown
	$( ".header__lang-active" ).click(function() {
		$( ".header__lang-list" ).slideToggle( "fast" );
	});
	$( ".header__trigger" ).click(function() {
		$( ".header__main" ).slideToggle( "fast" );
	});
	$( ".header__close" ).click(function() {
		$( ".header__main" ).slideToggle( "fast" );
	});

	//accordion
	$( ".sidebar__acc-trigger" ).click(function() {
		$(this).next( ".sidebar__acc-content" ).slideToggle( "fast" );
	});

	//datepicker
	$('.datepicker-here').datepicker({
		language: 'en'
	})
});