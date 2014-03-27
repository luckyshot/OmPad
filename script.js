function supports_html5_storage() {try {return 'localStorage' in window && window['localStorage'] !== null;} catch (e) {return false;}}	
	
$(document).ready(function() {
	/*		Variables		*/
	var t = $('#t'),
		msgbox = $('#m'),
		// This is the list of active themes, 
		// if you add a new theme make sure to list it here'fire', 
		styles = ['default', 'white', 'ivory', 'sans', 'stone', 'paper', 'small', 'big', 'bigsans', 'haiku', 'code', 'night', 'hide'];

	function countwords() {
		$('#words').html( t.html().split(/\s+/).length );
		var selObj = window.getSelection();
		if (selObj.toString()) {
			$('#words').html( selObj.toString().split(/\s+/).length + ' / ' + $('#words').html() );
		}
	}

	/*		Save text		*/
	t.bind('input paste', function() {
		localStorage.setItem("ompad_t"+$('#files>li.selected').html(), t.html() );
		countwords();
	}).bind('mouseup', function(){ countwords(); });


	
	/*		Resize t		*/
	$(window).resize(function() {resize();});
	function resize() {
		t.css("min-height", $(window).height()-140 );
	}
	resize();
	
	/*		Themes		*/
	// List available styles
	for (var i = 0; i < styles.length; i++) {
		$('#themes').append('<li>'+styles[i]+'</li>');
	}
	
	$('#themes>li').click(function(){
		$('html').attr('class', 'theme '+$(this).html());
		localStorage.setItem("ompad_theme", $(this).html() );
		t.focus().scrollHeight;
	});
	
	
	function selectfile(i) {
		if (!i) {i = 1;}
		t.html( localStorage.getItem("ompad_t"+i) ).focus();
		localStorage.setItem("ompad_page", i );
		$('#words').html( t.html().split(/\s+/).length );
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

	if (!supports_html5_storage) {
		msgbox.html('Your browser does not support HTML5 (needed to save your work). Please upgrade to a modern browser').fadeIn();
	}
	
	// Load theme (if any)
	$('html').attr('class', 'theme '+localStorage.getItem("ompad_theme") );

	// Select last active page
	selectfile(localStorage.getItem("ompad_page"));

	$('#files>li:eq('+(localStorage.getItem("ompad_page")-1)+')').addClass('selected');
	
	if (!t.html()) {t.html('Welcome to OmPad, you can start typing here...<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus suscipit, sollicitudin odio vel, mattis quam. Etiam tincidunt aliquam dictum. Phasellus lectus felis, gravida non semper vel, ultrices vulputate nunc. Mauris viverra risus sit amet commodo sodales. Pellentesque turpis lectus, venenatis non ultrices quis, vestibulum vitae arcu. Morbi purus quam, varius a enim a, posuere vehicula quam. Donec fringilla orci ut mi euismod, in consectetur risus rhoncus.<br><br>Duis pellentesque rutrum fermentum. Duis aliquam in arcu ac varius. Proin aliquam, lorem a consequat porttitor, tortor nisi placerat turpis, eu auctor ligula dui ac justo. Donec commodo dui et condimentum imperdiet. Integer accumsan congue sem, a suscipit felis aliquet ac. Nullam sollicitudin gravida felis sit amet porttitor. Aenean vestibulum a ante vel porta. Proin nec bibendum augue. Etiam id felis vitae velit sagittis molestie ac sit amet quam. Duis interdum euismod ligula vel semper. Praesent ac erat pharetra, eleifend quam non, laoreet mi. Donec at rhoncus erat. Maecenas egestas libero id vehicula rhoncus. Sed vel urna at massa dignissim tincidunt in sed nulla. Phasellus sit amet neque auctor, euismod tellus eu, adipiscing arcu.');}

	t.focus();
			
});
