export default function generateMap(lat, long, venue) {
	const coordinates = [lat, long];

	const map = L.map('map').setView(coordinates, 13);

	L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		maxZoom: 19,
		subdomains:['mt0','mt1','mt2','mt3']
	}).addTo(map);

	const marker = L.marker(coordinates).addTo(map)
	.bindPopup(venue)
	.openPopup();;

}