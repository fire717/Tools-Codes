###自动新增函数 不覆盖前面的

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
