let marker, tracker

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    marker = new google.maps.Marker({ position: uluru, map: map });
    // trackMovement()
}
const trackMovement = () => {

    fetch('http://api.open-notify.org/iss-now.json')
        .then(r => r.json())
        .then(response => {
            const { latitude, longitude } = response.iss_position
            marker.setPosition({ 
                lat: parseInt(latitude), 
                lng: parseInt(longitude)
            })   
            console.log(latitude, longitude);
                 
        })
        .catch(e => {
            console.error(e)
        })
}


const startTracking = () => {
    tracker = setInterval(trackMovement, 2000)
}

const stopTracking = () => {
    clearInterval(tracker)
}

// get coordinates of ISS
// update the marker on the map
// set interval to update every 10 seconds 