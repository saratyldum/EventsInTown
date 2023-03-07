export default async function reverseGeocoding(lat, long) {
	const endpoint = 	`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyAZmj5t61JaSN1HEV6oVXGH0bs9mFYGSUc`

	const response = await fetch(endpoint);
	const result =  await response.json();

	const city = result.results[0].address_components[3].long_name;
	return city;
}