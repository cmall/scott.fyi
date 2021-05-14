function setCookie(name,value) {
		console.log('setting', name, value);
    var expires = "";
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
		console.log('getting', name);
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    console.dir(ca);
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
		console.log('erasing', name);
    document.cookie = name+'=; Max-Age=-99999999; path=/';  
    console.log(document.cookie);

}

function toggleMode() {
	body = document.getElementsByTagName('body')[0];
	body.classList.toggle('hc');
	console.log('toggle');
	if (body.classList.contains('hc')) {
		setCookie('hc',true);
	} else {
		eraseCookie('hc')
	}
}

document.addEventListener("DOMContentLoaded", function(event) { 
  var hc = getCookie('hc');
  console.log('result', hc);
  if (hc) {
		body = document.getElementsByTagName('body')[0];
		body.classList.toggle('hc');
  }
});