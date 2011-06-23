<?php
$benchmark_time = time()+ microtime();
/*	
 * OmPad
 * Version 1.0
 * by Xavi Esteve
 * Last update: 23 June 2011
 */
define("APP_URL", "http://xaviesteve.com/pro/ompad"); // no trailing slash
define("APP_TITLE", "OmPad");
define("APP_SLOGAN", "Online notepad");
define("APP_AUTHOR", "Xavi Esteve");
define("APP_AUTHOR_URL", "http://xaviesteve.com/");

date_default_timezone_set('Europe/London');
error_reporting(E_STRICT);
ob_start("ob_gzhandler");


?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDUvMTIvMTG1kCgrAAACj0lEQVQ4jY2TTUhUcRTFfw2GL8soCKwocxyGcRKMTM2iKMraRDCaFQNaUYuICBeZFrUqahFFrVuYEvRFVMtKi4Iox6CihWNRGvjeTE704Xt+PCfitFCfE7bowB/u4pzLveee/wxJIgNfBgYwDIN4PE6s6xUAqyvKCYfDuK7Lwry8TDpZk0U6nWZkdJQLFy9x9/59/oWaSIRTJ08wyzDIzs4GYIYkua5Lb18f0bo9OI4DQOXqCk9o2w7d8TgAubm53LjWRmFhIYZhgCQNpFIqKS2TPxjSmbPnZNu2TNNSS2ubOmNdkiTTtBStq5c/GFJJaZkSiaQkiVQqpcamZvmDIbW0tnnkFavK5Q+G5A+GFK2r1ySONR+XPxhSY1OzksmksG1b/mBI6zdumkbKfHfu3pMk2bbtNR8cHJTvRWcnADtqqr2dO2Nd0wxsb+/wPNhatRmAl7EYvp6e9wAsD4c9smlZ0xrYjj1e/B7h9OBKnq5opKfn/dQZ/wsj/fC5FWNsLvnvCtnn+4ivqCgEQKxrauzME06iuCAXPlyEb29g1x1Y3sHM9A98aysrAXg0sSPAlqqqv8S1GxZycvso/PwEdgKcBFcX3ybdehSf67rsqI5gWhZNx0+MC2qqvSkaags4f2AJOBbYFjgWTTfH6J6zl+Hh4fEgJRJJL0gHDx2WaVqSpJ9vL0vPd0oPN0r3ijXUskjRTUtVUlqmftOUJE1FubeXaP1eL8qnGtawv7YAXrfDyFesxHcO3ppD/+gCrk9EeZZh4AMwDINAIMCzJx3URCIAVFVkQc4v8OcT/5Ri25X5FK3dzeOHDwhMiGHiM2Ua1m+azM7J4fbVI0TXuXyw5kFelEC4FGdoiGX5+X8Z/Ae7x21ofSb0KQAAAABJRU5ErkJggg%3D%3D">
<title><?=APP_TITLE?> - <?=APP_SLOGAN?></title>
<style type="text/css" id="default">
html{color:#000;background:#FFF;}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td{margin:0;padding:0;}table{border-collapse:collapse;border-spacing:0;}fieldset,img{border:0;}address,caption,cite,code,dfn,em,strong,th,var,optgroup{font-style:inherit;font-weight:inherit;}del,ins{text-decoration:none;}li{list-style:none;}caption,th{text-align:left;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}q:before,q:after{content:'';}abbr,acronym{border:0;font-variant:normal;}sup{vertical-align:baseline;}sub{vertical-align:baseline;}legend{color:#000;}input,button,textarea,select,optgroup,option{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;}input,button,textarea,select{*font-size:100%;}/* Copyright (c) 2010, Yahoo! Inc. All rights reserved. Code licensed under the BSD License: http://developer.yahoo.com/yui/license.html version: 2.8.1 */

html{background:#fbfbfb;font-family:'Helvetica Neue',sans-serif;}

#menu{border-top:5px solid #999;color:#666;font-size:11px;font-weight:900;height:15px; overflow:hidden;position:absolute;top:0;left:10px;padding:0 10px 10px 10px;opacity: 0.6;width:50px;}
	#menu:hover,#menu:focus {height:auto;background:#fbfbfb;padding:0 20px 40px 20px;left:0;}
	
#logo {color:#999;cursor:default;letter-spacing:-1px;margin:0 0 10px 0;text-align:center;}

#menu #css>li {cursor:pointer;line-height:1.2em;}
#menu #css>li:hover {color:#000;}

#files {position:absolute;left:80px;bottom:0;}
#files>li {border-top:10px solid #ccc;margin-left:10px;display:inline-block;font-size:0;color:#ccc;width: 100px;vertical-align: top;opacity:.6;cursor:pointer;}
#files>li.selected {border-top:15px solid #ccc;opacity:.7;cursor:default;}

#t{background:transparent;border:none;color:#222;display:block;font-family:Garamond,serif;font-size:1.2em;height:500px;line-height:1.6em;margin:0 auto;padding:2em;width:40em;outline: none;}
#m{background: none repeat scroll 0 0 #FEFEA3;border: 1px solid #FFE067;border-radius: 5px 5px 5px 5px;color: #333;font-size: 12px;font-weight: 700;left: 50%;margin-left: -300px;opacity: 0.95;padding: 5px;position: absolute;text-align: center;top: 5px;width: 600px;}

#topnav {position:absolute;top:0;right:10px;}
#topnav li {display: inline-block;font-size: 10px;margin-left: 1em;opacity: 0.5;}
#topnav li a {color: #000;text-decoration:none;}

#box-help {background: #FBFBFB;border: 5px solid #EEE;cursor:pointer;display:none;border-radius: 20px;margin: 30px auto;opacity: 0.9;padding: 20px;width: 40%;position:absolute;left:30%;top:40px;}
	#box-help h1 {font-weight: 900;font-size:32px;text-align:center;}
	#box-help h2 {font-weight: 900;margin: 1em 0 0.3em;}
	#box-help p {font-size: 12px;line-height: 1.6em;}

</style>
<style id="template"></style>
</head>







<body>

<div id="wrap">

	<div id="menu">
		<h1 id="logo"><?=APP_TITLE?></h1>
		<ul id="css"></ul>
	</div>
	<ul id="files"></ul>
	
	<textarea id="t"></textarea>

	<div id="m">Loading...</div>
	
	<ul id="topnav">
		<li><a href="#" id="customcss" title="Custom CSS">CSS</a></li>
		<li><a href="#" id="email" title="Gmail this note">Email it</a></li>
		<li><a href="#" id="retweet" title="Tell your followers about <?=APP_TITLE?>">Retweet</a></li>
		<li><a href="#" id="help" title="What is <?=APP_TITLE?>?">About</a></li>
	</ul>
	
	<div id="box-help" title="Click to hide">
		<h1><?=APP_TITLE?></h1>
		<h2>What is <?=APP_TITLE?>?</h2>
		
		<p><?=APP_TITLE?> is a notepad to store notes, texts or even poems. It is focused in simplicity and speed for quick note taking and instant inspiration. You can choose different themes to the left and you have up to 5 note slots to save different topics. Go full screen and start typing!</p>
		
		<h2>About the app</h2>
		<p><?=APP_TITLE?> is build with HTML5, CSS3 and jQuery. It is a great example on how modern websites can be so simple and tiny yet so functional. <?=APP_TITLE?> is a one-file app. Great for students and curious developers. You can grab the code and create your own version and styles. All the notes and settings are saved through HTML5 storage, this allows you to use <?=APP_TITLE?> also while being offline.</p>
		<h2>Questions &amp; Contact</h2>
		<p>Got any questions, ideas or suggestions? Contact <a href="http://xaviesteve.com/contact-me/">Xavi</a>.</p>
	</div>

</div><!--/wrap-->
	









<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript">
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
		$('#css').append('<li title="File '+i+'">'+i+'</li>');
	}
	
	$('#css>li').click(function(){
		$('#template').html(style[$(this).html()]);
		localStorage.setItem("css", $(this).html() );
		textarea.focus().scrollHeight;
	});
	
	
	function selectfile(i) {
		textarea.val( localStorage.getItem("t"+i) ).focus();
	}
	
	
	
	
	
	
	/* Top nav actions */

	/* Email */
	$('#email').click(function() {
		popw='';
		Q = textarea.val();
		popw = window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=' + escape('<?=APP_TITLE?>') + '&body=' + escape(Q) + '&zx=RANDOMCRAP&shva=1&disablechatbrowsercheck=1&ui=1','gmailForm','scrollbars=yes,width=680,height=510,top=175,left=75,status=no,resizable=yes');
		
		if (!document.all) T = setTimeout('popw.focus()',50);
		void(0);
		
		return false;
	});
	
	/* Retweet */
	$('#retweet').click(function() {
			f = 'http://twitter.com/home?status='+encodeURIComponent('<?=APP_TITLE?> - <?=APP_SLOGAN?> <?=APP_URL?> via @xaviesteve');
			a=function(){
				if(!window.open(f,'_blank')) location.href=f;
			};
			if(/Firefox/.test(navigator.userAgent)){
				setTimeout(a,0);
			}else{
				a();
			}
	});
	
	/* Help */
	$('#help').click(function() { $('#box-help').fadeIn(); });
	$('#box-help').click(function() { $(this).fadeOut(); });
	
	
	
	/* File list and selection */
	for(i=1;i<=5;i++) {
		$('#files').append('<li>'+i+'</li>');
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
	selectfile(1);
	$('#files>li:first-child').addClass('selected');
	textarea.focus();
	
	if (!textarea.val()) {textarea.val('Welcome! Start typing here...');}
		
});
</script>
<!--GA-->
</body>
</html><?php
$benchmark_totaltime = time()+microtime() - $benchmark_time;
echo '<!--'.$benchmark_totaltime.'-->';

