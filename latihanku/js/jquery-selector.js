$(document).ready(function(){
	$("#sembunyi_semua").click(function(){
		$("*").hide();
	});
	$("#sembunyi_ini").click(function(){
		$(this).hide();
	});
	$("button .penting").click(function(){
		$("p .penting").hide();
	});
	$("button#pertama").click(function(){
		$("p:first").hide();
	});
	$("span.baris1").click(function(){
		$("tr:first").hide();
	});
	$("a#baris1semua").click(function(){
		$("tr:first-child").hide();
	}) 
	$("strong").click(function(){
		$("tr:even").css("background-color","yellow");
		$("tr:odd").css("background-color","aqua");
	});
});