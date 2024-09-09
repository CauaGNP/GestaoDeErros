let isReCaptchaOpen = false;

const onClick = () => {
	isReCaptchaOpen = true;
	document.getElementById('main').classList.add('blur');
	document.getElementById('reCaptcha').style.visibility = "initial";
}

const onChange = () => {
	setTimeout(() => {
		isReCaptchaOpen = false;
		document.getElementById('main').classList.remove('blur');
		document.getElementById('checkbox').checked = false;
		document.getElementById('reCaptcha').style.visibility = "hidden";
		document.getElementById('span').style.opacity = "1";

		setTimeout(() => {
			document.getElementById('span').style.opacity = "0";
		}, 2000)
	}, 3000)
}