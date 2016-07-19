$(document).ready(function() {

	/*-----------------------------------------------------------------------------------*/
	/*	Smooth Scroll
	/*  Thanks to: https://github.com/davist11/jQuery-One-Page-Nav
	/*-----------------------------------------------------------------------------------*/

	function smoothScroll(){
		$(".nav").onePageNav({
			filter: ':not(.external)',
			scrollSpeed: 1500
		});

		var formTarget = $(".js-form"); // Assign this class to corresponding section on Index.html

		// Scrolls to form section
		$(".js-scroll").on("click", function() {
			$('html, body').animate({
				scrollTop: formTarget.offset().top
			}, 2000);
			return false;
		});

		return false;
	}

	smoothScroll();

	/*-----------------------------------------------------------------------------------*/
	/*	Backstretch
	/*  Thanks to: http://srobbin.com/jquery-plugins/backstretch/
	/*-----------------------------------------------------------------------------------*/

	function backStrech() {
		$("aside").backstretch([
			// "images/photo-slide-1.jpg",
			"images/photo-slide-2.jpg",

			], {duration: 5000, fade: 1000, alignX: 'left'});
	}

	backStrech();

	/*-----------------------------------------------------------------------------------*/
	/*	Flexslider
	/*  Thanks to: http://www.woothemes.com/flexslider/
	/*-----------------------------------------------------------------------------------*/

	function flexSlider(){
		$('.flexslider').flexslider({
			animation: "slide",
			slideshow: false,
			touch: true
		});
	}

	flexSlider();

	/*-----------------------------------------------------------------------------------*/
	/*	RSVP Form Validation + Submission
	/*-----------------------------------------------------------------------------------*/

	function rsvpFormSubmit() {

		// this is the id of the form
		var formID = $("#js-form");

		// submits form with ajax method
		formID.on("submit", function() {

			$.ajax({
				url: "mailer.php",
				type: "POST",
		        data: formID.serialize(), // serializes the form's elements.

		        success: function(data) {
		        	$(".js-display")
		        				.addClass("message-panel")
		        				.html(data); // show response from the php script.
		        }

		    });

		    return false; // avoid to execute the actual submit of the form.

		});

		// Show/Hide RSVP Menu selection on accept/decline
		$(".decline").on("click", function(){
			$(".rsvp-meal-choice").fadeOut();
		});
		$(".accept").on("click", function(){
			$(".rsvp-meal-choice").fadeIn();
		});

	}
	rsvpFormSubmit();


});

/*-----------------------------------------------------------------------------------*/
/*	Google Map API
/*  Credit to: http://stiern.com/tutorials/adding-custom-google-maps-to-your-website/
/*-----------------------------------------------------------------------------------*/


function initialize_map() {

	var map;

	var MY_MAPTYPE_ID = 'custom_style';

	// Location coordinates
	var western_lodge = {
		lat: 39.4921421,
		long: -82.5222704
	};
	var ash_cave = {
		lat: 39.49208,
		long: -82.52396
	};
	var default_template = {
		lat: 41.38031,
		long: 2.17416
	};

	// Selected location
	var place = western_lodge;

	var myLatlng = new google.maps.LatLng(place.lat, place.long);

	/*----------------------------------------------------------------------------*/
	/* Creates a custom color scheme for map
	/* For details on styling go to the link below:
	/* http://www.evoluted.net/thinktank/web-design/custom-google-maps-style-tool */
	/*----------------------------------------------------------------------------*/

	var featureOpts = [
		{
			"featureType": "road",
			"stylers": [
				{ "hue": "#ff3300" },
				{ "gamma": 0.82 },
				{ "visibility": "on" },
				{ "saturation": 62 },
				{ "lightness": -7 }
			]
		},{
			"featureType": "poi",
			"stylers": [
				{ "hue": "#ff0000" },
				{ "lightness": 14 }
			]
		},{
			"stylers": [
				{ "hue": "#ff0000" }
			]
		}
	]

	var mapOptions = {
		zoom: 18,
		center: myLatlng,
		disableDefaultUI: true,
		scrollwheel: false,
		draggable: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId: MY_MAPTYPE_ID
	};

	map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

	var styledMapOptions = {
		name: 'Custom Style'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	var image = new google.maps.MarkerImage("images/map-marker@2x.png", null, null, null, new google.maps.Size(55,57));

	// Includes custom marker on map
	var beachMarker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon: image
	});

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}
