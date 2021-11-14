let headerBg=document.getElementById("bg");
this.addEventListener('scroll', function(){
	console.log('111');
	headerBg.style.opacity=1 - +this.pageYOffset/550+"";
	headerBg.style.top=+this.pageYOffset+'px';
	headerBg.style.backgroundPositionY=- + +this.pageYOffset/2+'px';
})


