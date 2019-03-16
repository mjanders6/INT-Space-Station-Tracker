// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: {lat: -25.344, lng: 131.036}, map: map});
    var marker2 = new google.maps.Marker({position: {lat: -25.344, lng: 133.036}, map: map});
    var marker3 = new google.maps.Marker({position: {lat: -25.344, lng: 134.036}, map: map});
    var marker4 = new google.maps.Marker({position: {lat: -25.344, lng: 135.036}, map: map});
  }

// get coordinates of ISS
// update the marker on the map
// set interval to update every 10 seconds 