let headerBgq=document.getElementById("bgq");
this.addEventListener('scroll', function(){
	console.log('111');
	headerBgq.style.opacity=1 - +this.pageYOffset/550+"";
	headerBgq.style.top=+this.pageYOffset+'px';
	headerBgq.style.backgroundPositionY=- + +this.pageYOffset/2+'px';
})

