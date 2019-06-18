$(function(){
	console.log("Hello WOrld");
	$(".dark-theme-toggler").click(function(){
		if($("body").hasClass("dark-mode-on")){
			$("body").removeClass("dark-mode-on").addClass("light-mode-on");
			$(this).text("toggle_off");
		}else{
			$("body").addClass("dark-mode-on").removeClass("light-mode-on");
			$(this).text("toggle_on");
		}
	});
});
