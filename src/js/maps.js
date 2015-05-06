jQuery(document).ready(function($) {
	function initialize() {

		var styles = [{"featureType":"water","elementType":"all","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"hue":"#83cead"},{"saturation":1},{"lightness":-15},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#f3f4f4"},{"saturation":-84},{"lightness":59},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-35},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"hue":"#d7e4e4"},{"saturation":-60},{"lightness":23},{"visibility":"on"}]}];
		var styledMap = new google.maps.StyledMapType(styles,
		    {name: "Styled Map"});

        var mapOptions = {
          center: { lat: 51.4934661, lng: -0.1072183},
          zoom: 16,
          panControl: false,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: true,
          overviewMapControl: false,
          scrollwheel: false
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        var marker = new google.maps.Marker({
          position: mapOptions.center,
          map: map,
          title: 'The Cutlery'
        });
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

	};
	google.maps.event.addDomListener(window, 'load', initialize);
});