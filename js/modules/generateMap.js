export default function generateMap(lat, long) {
	//SEND INN LAT/LONG TIL KLIKKEDE ELEMENT
	// console.log(events);
	// const latitude = events[0]._embedded.venues[0].location.latitude;
	// const longitude = events[0]._embedded.venues[0].location.longitude;

	const coordinates = [lat, long];

	const map = L.map('map').setView(coordinates, 13);

	L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		maxZoom: 19,
		subdomains:['mt0','mt1','mt2','mt3']
	}).addTo(map);

	const marker = L.marker(coordinates).addTo(map).openPopup();;
}