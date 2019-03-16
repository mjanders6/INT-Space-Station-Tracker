// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: { lat: -25.344, lng: 131.036 }, map: map });
    trackMovement()
}
const trackMovement = () => {
    setInterval(() => {
        const newLocation = {
            lat: ~~(Math.random() * 10),
            lng: ~~(Math.random() * 100)
        }
        marker.setPosition(newLocation)
    }, 2000);
}

const fetchISSPosition = () => {
    fetch(`http://api.open-notify.org/iss-now.json`)
        .then(r => r.json())
        .then(r => {
            console.log(r);
            
        })
        .catch(e => {
            console.error(e)
        })

}
// get coordinates of ISS
// update the marker on the map
// set interval to update every 10 seconds 