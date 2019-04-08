function initRem(isFixHei) {
	var ch = document.documentElement.clientHeight || document.body.clientHeight
	var cw = document.documentElement.clientWidth  || document.body.clientWidth
	if(isFixHei) {
		document.documentElement.style.fontSize = (ch / ch_rem) + 'px'; //高适配    
	}
	else {
		document.documentElement.style.fontSize = (cw / cw_rem) + 'px'; //宽适配
	}
}
