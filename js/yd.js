window.onload = function(){
	var cloudimg = document.getElementById("cloudDiv");
	//设置div起始点坐标
	var cloudx = 0,
		cloudy = 0;
	//设置div行进速度
	var cloudxSpeed = 1,
		cloudySpeed = 1;
	//设置图片移动
	var cloudw = document.body.clientWidth - 200,
		cloudh = document.body.clientHeight - 100;
	
	var cloudtimer = null;
	function clouddiv() {
		//比较图片是否到达边界，如查到达边界 改变方向;如未到达边界
	if(cloudx > cloudw || cloudx < 0) cloudxSpeed = -cloudxSpeed;
		if(cloudy > cloudh || cloudy < 0) 
		{
			cloudySpeed = -cloudySpeed;
		}

		cloudx += cloudxSpeed;
		cloudy += cloudySpeed;

		//设置坐标值，起始坐标+速度
		cloudimg.style.top = cloudy + "px";
		cloudimg.style.left = cloudx + "px";
		cloudtimer = setTimeout("clouddiv()", 10);
	}
	clouddiv();
	cloudimg.onmouseover = function(){
		clearInterval(cloudtimer);
	}
	cloudimg.onmouseout = function(){
		clouddiv();
	}
	
})
