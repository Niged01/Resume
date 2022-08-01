function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 50.59874744571888,
            lng: 11.821138820261218
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.45860364541444, lng: -0.19242461211201417 },
        { lat: -33.88680291359953, lng: 151.15741938702266 },
        { lat: -37.79159675779253, lng: 145.01374476416802 },
        { lat: -34.90364405195864, lng: 138.59190712639898 },
        { lat: -31.935366181247034, lng: 115.85433823909898 },
        { lat: -12.450270056788499, lng: 130.84663809880487 },
        { lat: -27.459878962303442, lng: 153.03985851706616 },
        { lat: -28.029899129966314, lng: 153.42575330637894 },
        { lat: -28.64286241249725, lng: 153.61062964701952 },
        { lat: -35.305494011407895, lng: 149.13664232302136 },
        { lat: -35.7155525679697, lng: 150.1834339773337 },
        { lat: -17.73364965352322, lng: 168.32703484508485 },
        { lat: 1.3523256449107295, lng: 103.85322512808641 },
        { lat: 3.1626183182408334, lng: 101.72678324335881 },
        { lat: 7.952670820641197, lng: 98.32556047398786 },
        { lat: 9.531315586618287, lng: 100.04822690774549 },
        { lat: 13.797803907245916, lng: 100.54745917276921 },
        { lat: 37.99773136854961, lng: 23.731472432000885 },
        { lat: 38.900046381972736, lng: 1.4161723675495406 },
        { lat: 41.11701001684767, lng: 1.2456214537300108 },
        { lat: 52.523058009354365, lng: 13.43227899695488 },
        { lat: 48.21059793244907, lng: 16.383491576948497 },
        { lat: 50.06988823852197, lng: 19.971225871805558 },
        { lat: 55.6799590580686, lng: 12.58111957120482 },
        
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}