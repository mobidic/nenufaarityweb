$(window).load(function(){
// Open and close the sidebar on medium and small screens
	function w3_open() {
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("myOverlay").style.display = "block";
	}
	function w3_close() {
		document.getElementById("mySidebar").style.display = "none";
		document.getElementById("myOverlay").style.display = "none";
	}
	
	// Change style of top container on scroll
	window.onscroll = function() {myFunction()};
	function myFunction() {
		var offsetHeight = document.getElementById('header').offsetHeight + 32;
		if (document.body.scrollTop > offsetHeight || document.documentElement.scrollTop > offsetHeight) {
			document.getElementById("myIntro").classList.add("w3-show-inline-block");
		} else {
			document.getElementById("myIntro").classList.remove("w3-show-inline-block");
		}
	
	}
	// On change of id
	// TODO
	var offsetHeight = document.getElementById('myTop').offsetHeight;
	document.getElementById("padd").style.height = offsetHeight + "px";
	
	// Accordions
	function myAccordion(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
			x.previousElementSibling.className += " w3-theme";
		} else {
			x.className = x.className.replace("w3-show", "");
			x.previousElementSibling.className =
			x.previousElementSibling.className.replace(" w3-theme", "");
		}
	}
	

	// jQuery `inView`-expression
	$.extend($.expr[':'], {
		inView: function(el) {
			var width = $(el).width(),
				height = $(el).height(),
				offset = $(el).offset(),
	
				vp_dimensions = {
					height: $(window).height()-$(window).height()+10,
					width: $(window).width()
				},
				y_offset = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop),
				x_offset = (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	
			return (
			offset.top < (y_offset + vp_dimensions.height) && offset.left < (x_offset + vp_dimensions.width) && (offset.top + height) > y_offset && (offset.left + width) > x_offset);
		}
	});


	// Change the titles on scroll
	$(window).scroll(function() {
	
		$('h2, h3').each(function() {
			var self = $(this),
				title = self.text(),
				current_id = self.prop("id");
			if (self.is(':inView')) {
				$('.whereAmI').text(title);
				$(".myClassToc").removeClass('w3-teal');
				$("#link_" + current_id).addClass('w3-teal');
			} else if (! $(window).scrollTop()) {
				$(".myClassToc").removeClass('w3-teal');
				//$(".h1Toc").addClass('w3-teal');
			}
		});
	
	}).scroll();
	
	
	
	
	
	
	$("h2, h3").each(function(i) {
		var current = $(this);
		// current.attr("id", "title" + i);
		$("#toc").append("<a class='w3-bar-item w3-button myClassToc' id='link_" + current.prop("id") + "' href='#" +
			current.prop("id") + "' title='" + current.prop("tagName") + "'>" +
			current.html() + "</a>");
	});

});