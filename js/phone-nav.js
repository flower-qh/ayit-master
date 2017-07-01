$(document).ready(function(){
	var flag = true;
	$("#phone_nav_log").click(function(){

		$("#phone_nav_ul").fadeToggle("slow");
		$(".navButton_line").fadeToggle("slow");
	})
	
	/*var flag = $(".sidebar_ul li").length;
	for(var i = 0;i<flag;i++){
		$(".sidebar_ul li").mouseover(function(){
			$(".sidebar_"+(i+1)+"_slide").css("display","block");
		})
	}*/
	$(".sidebar_ul li:first").mouseover(function(){
		$(".sidebar_1_slide").css("display","block");
	})
	$(".sidebar_ul li:first").mouseout(function(){
		$(".sidebar_1_slide").css("display","none");
	})
	$(".sidebar_ul li:eq(1)").mouseover(function(){
		$(".sidebar_2_slide").css("display","block");
	})
	$(".sidebar_ul li:eq(1)").mouseout(function(){
		$(".sidebar_2_slide").css("display","none");
	})
	$(".sidebar_ul li:last").mouseover(function(){
		$(".sidebar_3_slide").css("display","block");
	})
	$(".sidebar_ul li:last").mouseout(function(){
		$(".sidebar_3_slide").css("display","none");
	})

})
