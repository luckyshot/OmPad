function supports_html5_storage() {try {return 'localStorage' in window && window['localStorage'] !== null;} catch (e) {return false;}}	
	
$(document).ready(function() {
	/*		Variables		*/
	var textarea = $('#t'),
		msgbox = $('#m'),
		// This is the list of active themes, 
		// if you add a new theme make sure to list it here'fire', 
		styles = ['default', 'ivory', 'sans', 'stone', 'paper', 'big', 'bigsans', 'haiku', 'code', 'night', 'hide'];

	/*		Save text		*/
	textarea.bind('input paste', function() {
		localStorage.setItem("ompad_t"+$('#files>li.selected').html(), textarea.val() );
	});
	
	
	/*		Resize textarea		*/
	$(window).resize(function() {resize();});
	function resize() {
		textarea.height( $(window).height()-140 );
	}
	resize();
	
	/*		Style changing		*/
	/*		List available styles		*/
	for (var i = 0; i < styles.length; i++) {
		$('#css').append('<li>'+styles[i]+'</li>');
	}
	
	$('#css>li').click(function(){
		$('html').attr('class', 'theme '+$(this).html());
		localStorage.setItem("ompad_css", $(this).html() );
		textarea.focus().scrollHeight;
	});
	
	
	function selectfile(i) {
		if (!i) {i = 1;}
		textarea.val( localStorage.getItem("ompad_t"+i) ).focus();
		localStorage.setItem("ompad_page", i );
	}
	
	
		
	/* Help */
	$('#help').click(function() { $('#box-help').fadeIn(); });
	$('#box-help').click(function() { $(this).fadeOut(); });
	
	
	
	/* File list and selection */
	for(i=1;i<=5;i++) {
		$('#files').append('<li title="File '+i+'">'+i+'</li>');
	}
	$('#files>li').click(function(){
		$('#files>li').removeClass('selected');
		$(this).addClass('selected');
		selectfile($(this).html());
	});
	
	/* Start app */
	msgbox.fadeOut();
	
	if (supports_html5_storage) {
		$('html').attr('class', 'theme '+localStorage.getItem("ompad_css") );
	}else{
		msgbox.html('Your browser does not support HTML5 (needed to save your work). Please upgrade to a modern browser').fadeIn();
	}
	selectfile(localStorage.getItem("ompad_page"));
	$('#files>li:eq('+(localStorage.getItem("ompad_page")-1)+')').addClass('selected');
	textarea.focus();
	
	if (!textarea.val()) {textarea.val('Welcome! Start typing here...');}
			
});
