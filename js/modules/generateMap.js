export default function generateMap(lat, long) {
	const coordinates = [lat, long];

	mapboxgl.accessToken = 'pk.eyJ1IjoidHlsc2EiLCJhIjoiY2xld2p1ZW1rMGhoMzNzbzR3aTNzNTQ3NCJ9.oDIQ_kjtBNG2SWh39U5LOw';
	const map = new mapboxgl.Map({
		container: 'map', 
		style: 'mapbox://styles/mapbox/streets-v12', 
		center: [long, lat], 
		zoom: 13,
	});

	const marker = new mapboxgl.Marker()
	.setLngLat([long, lat])
	.addTo(map);
}