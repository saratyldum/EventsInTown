export default function generateMap(events) {
	//SEND INN LAT/LONG TIL KLIKKEDE ELEMENT
	const lat = events[0]._embedded.venues[0].location.latitude;
	const long = events[0]._embedded.venues[0].location.longitude;

	const map = L.map('map').setView([lat, long], 13);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   	maxZoom: 19,
    	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	const marker = L.marker([lat, long]).addTo(map);
}