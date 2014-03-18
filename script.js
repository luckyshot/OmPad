function supports_html5_storage() {try {return 'localStorage' in window && window['localStorage'] !== null;} catch (e) {return false;}}	
	
$(document).ready(function() {
	/*		Variables		*/
	textarea = $('#t');
	msgbox = $('#m');
	var style = [];
	style['default'] = "";
	
	style['ivory'] = "html{background:#fdfdfa;} #t{line-height:155%;font-size:1.2em;font-family: Georgia,serif;color: #080000;} #t:first-letter{font-size:3em;}";
	style['sans'] = "html{background:#fdfdfa;} #t{line-height:155%;font-size:1.2em;font-family: 'Helvetica Neue',sans-serif;color: #0c0808;} ";

	style['warm'] = "html{background:#FFEDC9;} #t{color:#4E4E4E;} ";
	style['grey'] = "html{background:#aaa;} #t{color:#666;} ";

	style['paper'] = "html{background:#9aa3af;} h1{color:#ccc;} #t{background: none repeat scroll 0 0 #FEFEFE;box-shadow: 1px 2px 5px #333;color: #333;font-size: 20px;margin-top: 20px;padding: 60px;width: 820px;} ";

	style['big'] = "#t{color:#111131;font-size:2em;width:80%;}";
	style['bigsans'] = style['big']+"#t{font-family: 'Helvetica Neue',sans-serif;}";

	style['haiku'] = "#t{font-size:2em;text-align:center;width: 20em;}";

	style['code'] = "html{background:#313131;} #t{color: #f7c500;font-family: monospace;font-size: 13px;width: 960px;} ";

	style['night'] = style['ivory']+"html{background:#222;}#t{color:#aaa;}";
	style['nightsans'] = style['sans']+"html{background:#222;}#t{color:#aaa;}";

	style['tinyscreen'] = "#t{font-family:sans-serif;font-size:1.6em;width:98%;margin-top:10px;padding:1%;}";
	
	style['hide'] = "#t{display:none;}";
	
	
	/*		Save text		*/
	textarea.bind('input paste', function() {
		localStorage.setItem("t"+$('#files>li.selected').html(), textarea.val() );
	});
	
	
	/*		Resize textarea		*/
	$(window).resize(function() {resize();});
	function resize() {
		textarea.height( $(window).height()-140 );
	}
	resize();
	
	/*		Style changing		*/
	/*		List available styles		*/
	for (i in style){
		$('#css').append('<li>'+i+'</li>');
	}
	
	$('#css>li').click(function(){
		$('#template').html(style[$(this).html()]);
		localStorage.setItem("css", $(this).html() );
		textarea.focus().scrollHeight;
	});
	
	
	function selectfile(i) {
		textarea.val( localStorage.getItem("t"+i) ).focus();
		localStorage.setItem("page", i );
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
		$('#template').html( style[localStorage.getItem("css")] );
	}else{
		msgbox.html('Your browser does not support HTML5 (needed to save your work). Please upgrade to a modern browser').fadeIn();
	}
	selectfile(localStorage.getItem("page"));
	$('#files>li:eq('+(localStorage.getItem("page")-1)+')').addClass('selected');
	textarea.focus();
	
	if (!textarea.val()) {textarea.val('Welcome! Start typing here...');}
			
});
