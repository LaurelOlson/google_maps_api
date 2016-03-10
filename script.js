var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.281887, lng: -123.108184},
    zoom: 15
  });
}