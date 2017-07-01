window.onload = function(){
	function qm_appendStr(obj, html){
		var oDiv=document.createElement('div');
		oDiv.innerHTML=html;
		while(oDiv.childNodes.length){
			obj.appendChild(oDiv.childNodes[0]);
		}
	}
	function getByClassName(obj, sClass){
		var aEle = obj.getElementsByTagName('*');
		var i = 0;
		var aResult = [];
		for(i=0;i<aEle.length;i++){
			if(aEle[i].className == sClass){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}	
	var qingmingjie_str = '<div class="qmg_leaf_div">'+
			'<div class="qmg_leaf_acti"></div>'+
			'<div class="qmg_leaf_all">'+
			'<div class="qmg_leaf1"><img src="img/yezi.png" alt=""></div>'+
			'<div class="qmg_leaf2"><img src="img/yezi.png" alt=""></div>'+
			'<div class="qmg_leaf3"><img src="img/yezi.png" alt=""></div>'+
			'<div class="qmg_leaf4"><img src="img/yezi.png" alt=""></div>'+
			'<div class="qmg_leaf6"><img src="img/yezi.png" alt=""></div>'+
			'<div class="qmg_leaf7"><img src="img/yezi.png" alt=""></div>'+
			'<div class="qmg_leaf8"><img src="img/yezi.png" alt=""></div>'+
			'<div class="qmg_leaf9"><img src="img/yezi.png" alt=""></div>'+
			'<div class="qmg_leaf10"><img src="img/yezi.png" alt=""></div>'+
			'<div class="qmg_leaf11"><img src="img/yezi.png" alt=""></div>'+
			'</div>'+
		'</div>';
	qm_appendStr(document.getElementsByTagName('body')[0],qingmingjie_str);
	var qmgLeaf7 = getByClassName('qmg_leaf7')[0],
		qmgLeaf8 = getByClassName('qmg_leaf8')[0],
		qmgLeaf9 = getByClassName('qmg_leaf9')[0],
		qmgLeaf10 = getByClassName('qmg_leaf10')[0],
		qmgLeaf11 = getByClassName('qmg_leaf11')[0];
	/*ie leaf*/
	if(T.browser.ie){
		function bezier(curve, rate){
			if (!curve || !curve.length) return [];
			if (curve.length == 1) return [curve[0][0], curve[0][1]];
			if (curve.length == 2) return [
				curve[0][0] + (curve[1][0] - curve[0][0]) * rate,
				curve[0][1] + (curve[1][1] - curve[0][1]) * rate
			];
			var temp = [];
			for (var i = 1; i < curve.length; i++){
				temp.push(bezier([curve[i - 1], curve[i]], rate));
			}
			return bezier(temp, rate);
		}
		function rand_pm(obj,xy,rote){
			var pos = bezier(xy,rote);
				obj.style.right = parseInt(pos[0])  + 'px';
				obj.style.top = parseInt(pos[1])  + 'px';
		}
		setInterval(function(){
			rand_pm(qmgLeaf7,[[0,0],[150,92],[133,388],[416,380]],(+new Date) % 7000 / 7000);
			rand_pm(qmgLeaf8,[[1,37],[296,27],[84,154],[537,107]],(+new Date) % 4000 / 4000);
			rand_pm(qmgLeaf9,[[150,10],[296,27],[83,345],[562,292]],(+new Date) % 6000 / 6000);
			rand_pm(qmgLeaf10,[[150,10],[296,27],[83,345],[276,340]],(+new Date) % 5000 / 5000);
			rand_pm(qmgLeaf11,[[248,10],[462,142],[83,345],[459,251]],(+new Date) % 7000 / 7000);
		}, 30);
	}
}