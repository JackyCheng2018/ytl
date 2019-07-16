$(function(){
	$(".nav_inner li").hover(function(){
		$(this).children("div").show();
		$(this).children(".nav_inner_a").addClass("nav_inner_a1 nav_inner_a2 nav_inner_a3 nav_inner_a4 nav_inner_a5 nav_inner_a6 nav_inner_a7");
	},function(){
		$(this).children("div").hide();
		$(this).children(".nav_inner_a").removeClass("nav_inner_a1 nav_inner_a2 nav_inner_a3 nav_inner_a4 nav_inner_a5 nav_inner_a6 nav_inner_a7");
		$("#nav1 .nav_inner li:eq(0) .nav_inner_a").addClass("nav_inner_a1 nav_inner_a2 nav_inner_a3 nav_inner_a4 nav_inner_a5 nav_inner_a6 nav_inner_a7");
		$("#nav2 .nav_inner li:eq(1) .nav_inner_a").addClass("nav_inner_a1 nav_inner_a2 nav_inner_a3 nav_inner_a4 nav_inner_a5 nav_inner_a6 nav_inner_a7");
		$("#nav3 .nav_inner li:eq(2) .nav_inner_a").addClass("nav_inner_a1 nav_inner_a2 nav_inner_a3 nav_inner_a4 nav_inner_a5 nav_inner_a6 nav_inner_a7");
		$("#nav4 .nav_inner li:eq(3) .nav_inner_a").addClass("nav_inner_a1 nav_inner_a2 nav_inner_a3 nav_inner_a4 nav_inner_a5 nav_inner_a6 nav_inner_a7");
		$("#nav5 .nav_inner li:eq(4) .nav_inner_a").addClass("nav_inner_a1 nav_inner_a2 nav_inner_a3 nav_inner_a4 nav_inner_a5 nav_inner_a6 nav_inner_a7");
		$("#nav6 .nav_inner li:eq(5) .nav_inner_a").addClass("nav_inner_a1 nav_inner_a2 nav_inner_a3 nav_inner_a4 nav_inner_a5 nav_inner_a6 nav_inner_a7");
		$("#nav7 .nav_inner li:eq(6) .nav_inner_a").addClass("nav_inner_a1 nav_inner_a2 nav_inner_a3 nav_inner_a4 nav_inner_a5 nav_inner_a6 nav_inner_a7");
	});
})