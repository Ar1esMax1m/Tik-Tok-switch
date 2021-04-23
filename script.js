 function next() {
	document.getElementsByClassName("tiktok-1vl5ahs-BasicButtonContainer-VideoSwitch")[0].click();
	
	setTimeout(update, 500);
}

function dur() {
	let video = document.getElementsByClassName("tiktok-fxaouj-BasicVideo")[0];
	let duration = video.duration * 1000;
	
	return duration;
}

async function update(){
	setTimeout(next, dur());
}

update();