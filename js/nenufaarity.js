
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function agreementModal(link, color) {
	document.getElementById('user_agreement_checkbox').checked=false;
	document.getElementById('download_link').value=link;
	document.getElementById('agreement_header').setAttribute('Class', 'w3-container w3-'+color);
	document.getElementById('user_agreement').style.display='block';
}

$(window).load(function(){
	// scroll nav-bar
	document.addEventListener('scroll', function(){
		var h = document.documentElement,
			b = document.body,
			st = 'scrollTop',
			sh = 'scrollHeight';
	
		var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
		document.getElementById('scroll-bar').style.width = percent + '%';
	
	});
	window.onclick = function(event) {
		if (event.target == document.getElementById('user_agreement')) {
		  document.getElementById('user_agreement').style.display = "none";
		}
	};
});