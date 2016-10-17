window.addEventListener("load", function(){
	document.querySelector("main").addEventListener("mousemove", function(e){
		this.scrollTo(e.clientX,0);
	document.querySelector("main[data-map] > *").style.left = 0-e.clientX+"px";
	});
	document.querySelector("main").addEventListener("touchmove", function(e){
		e.preventDefault();
		this.scrollTo(e.changedTouches[0].clientX,0);
	});
});