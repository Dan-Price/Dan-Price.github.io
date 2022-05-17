for (i = 0; i < document.querySelectorAll('script').length; i++) {
	document.body.innerHTML+="<iframe src=" + document.querySelectorAll('script')[i].src + " />";
}