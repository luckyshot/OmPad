function supports_html5_storage() {try {return 'localStorage' in window && window['localStorage'] !== null;} catch (e) {return false;}}	
	
$(document).ready(function() {

	// Variables
	var t = $('#t'),
		files = 5;

	function countwords() {
		$('#words').html( t.html().split(/\s+/).length );
		var selObj = window.getSelection();
		if (selObj.toString()) {
			$('#words').html( selObj.toString().split(/\s+/).length + ' / ' + $('#words').html() );
		}
	}

	// Resize window
	$(window).resize(function() {resize();});
	function resize() {
		t.css("min-height", $(window).height()-140 );
	}
	resize();
	

	// Save text in file
	t.bind('input paste', function() {
		localStorage.setItem("ompad_t"+$('#files>li.selected').html(), t.html() );
		countwords();
	}).bind('mouseup', function(){ countwords(); });
	
	// Select file
	function selectfile(i) {
		if (!i) {i = 1;}
		t.html( localStorage.getItem("ompad_t"+i) ).focus();
		localStorage.setItem("ompad_page", i );
		$('#words').html( t.html().split(/\s+/).length );
	}
	
	/* File list and selection */
	for(i=1;i<=files;i++) {
		$('#files').append('<li title="File '+i+'">'+i+'</li>');
	}
	$('#files>li').click(function(){
		$('#files>li').removeClass('selected');
		$(this).addClass('selected');
		selectfile($(this).html());
	});
	
		
	/* Help */
	$('#help').click(function() { $('#box-help').fadeIn(); });
	$('#box-help').click(function() { $(this).fadeOut(); });
	
	
	// Style
	$('#style a').click(function(){
		localStorage.setItem("ompad_"+$(this).parent().attr('class'), $(this).attr('class') );
		load_styles();
		t.focus().scrollHeight;
		return false;
	});
	
	// Load styles
	function load_styles() {
		$('html')
			.removeClass()
			.addClass(localStorage.getItem("ompad_typography") )
			.addClass(localStorage.getItem("ompad_size") )
			.addClass(localStorage.getItem("ompad_color") )
			.addClass(localStorage.getItem("ompad_background") )
			.addClass(localStorage.getItem("ompad_width") );
	}
	load_styles();


	// WYSIWYG editor
	$('#controls a').click(function(e) {
		switch($(this).data('role')) {
			case 'h1':
			case 'h2':
			case 'h3':
			case 'h4':
			case 'h5':
			case 'h6':
			case 'p':
				document.execCommand('formatBlock', false, $(this).data('role'));
			break;
			default:
				document.execCommand($(this).data('role'), false, null);
			break;
		}
		t.focus().scrollHeight;
		return false;
	});


	// Select last active file
	selectfile(localStorage.getItem("ompad_page"));

	$('#files>li:eq('+(localStorage.getItem("ompad_page")-1)+')').addClass('selected');
	
	if (!t.html()) {t.html('<p>Welcome to OmPad, you can start typing here...</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus suscipit, sollicitudin odio vel, mattis quam. Etiam tincidunt aliquam dictum. Phasellus lectus felis, gravida non semper vel, ultrices vulputate nunc. Mauris viverra risus sit amet commodo sodales. Pellentesque turpis lectus, venenatis non ultrices quis, vestibulum vitae arcu. Morbi purus quam, varius a enim a, posuere vehicula quam. Donec fringilla orci ut mi euismod, in consectetur risus rhoncus.<br><br>Duis pellentesque rutrum fermentum. Duis aliquam in arcu ac varius. Proin aliquam, lorem a consequat porttitor, tortor nisi placerat turpis, eu auctor ligula dui ac justo. Donec commodo dui et condimentum imperdiet. Integer accumsan congue sem, a suscipit felis aliquet ac. Nullam sollicitudin gravida felis sit amet porttitor. Aenean vestibulum a ante vel porta. Proin nec bibendum augue. Etiam id felis vitae velit sagittis molestie ac sit amet quam. Duis interdum euismod ligula vel semper. Praesent ac erat pharetra, eleifend quam non, laoreet mi. Donec at rhoncus erat. Maecenas egestas libero id vehicula rhoncus. Sed vel urna at massa dignissim tincidunt in sed nulla. Phasellus sit amet neque auctor, euismod tellus eu, adipiscing arcu.</p>');}

	t.focus();
			
});
