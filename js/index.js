$(function(){
	$(".out").fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4'],
		navigation: true,
        navigationTooltips:['登录百度舆情','领先：数据收集与处理','全面：舆情分析逻辑与架构','专业：专业数据可视化'],
        afterLoad: function(anchorLink, index){
        	console.log(index);
			if(index==1){
				$('.section').eq(0).attr("id","active");
			}else{
				$('.section').eq(0).removeAttr("id");
			}
			if(index==2){
				$('.section').eq(1).attr("id","active");
			}else{
				$('.section').eq(1).removeAttr("id");
			}
			if(index==3){
				$('.section').eq(2).attr("id","active");
			}else{
				$('.section').eq(2).removeAttr("id");
			}
			if(index==4){
				$('.section').eq(3).attr("id","active");
			}else{
				$('.section').eq(3).removeAttr("id");
			}
		}
	});
	var arrow=$(".arrow");
	arrow.click(function(){
		$.fn.fullpage.moveSectionDown();
	});
	
})