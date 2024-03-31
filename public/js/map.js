
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map",
    style:"mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, //starting position [lng , lat]
    zoom: 8,
});


const marker = new mapboxgl.Marker({ color: 'red' })
.setLngLat(listing.geometry.coordinates)//listing.geometry.coordinates
.setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<h1>${listing.title}</h1><p>Exact title will be  provided after booking</p>`
))
.addTo(map);