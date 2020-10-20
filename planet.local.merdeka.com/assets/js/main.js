/*
 * Bismillahirrahmanirrahim...       
 * */

var ireporter_base_url = 'http://planet.local.merdeka.com/';
//~ var ireporter_base_url = 'https://planet-dev.merdeka.com/';


function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
cprofilbackground = readCookie('profil_background');
if(cprofilbackground){
	cprofilbackground = decodeURIComponent(cprofilbackground);
	$('.cover').css('background','url('+cprofilbackground+') no-repeat');
}

/*
 * cookie related handle 
 * */

function setCookie(cname, cvalue, exhours) {
    var d = new Date();
    //d.setTime(d.getTime() + (exdays*24*60*60*1000));
    d.setTime(d.getTime() + (exhours*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

var adBlockTester = document.createElement('div');
adBlockTester.innerHTML = '&nbsp;';
adBlockTester.className = 'adsbox';
document.body.appendChild(adBlockTester);
window.setTimeout(function() {    
  if(adBlockTester.offsetHeight === 0 ){
    adblockExists = "yes";
  }else{
    adblockExists = "no";
  }
  if(typeof window.kly != 'undefined'){
    window.kly.gtm.adblockExists = adblockExists;
  }
  document.body.removeChild(adBlockTester);
}, 60);
