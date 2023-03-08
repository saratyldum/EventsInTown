import fetchEvents from "./modules/fetchEvents.js";
import renderEventInformation from "./modules/renderEventInformation.js";
import reverseGeocoding from "./modules/reverseGeocoding.js";
import tickets from "./modules/tickets.js";
import { handleCategories, handleCitySearch, handleEventCardClick, setDate } from "./modules/setDefaultIndex.js";
import { cityStorageName, getInformationFromLocal } from "./modules/localStorage.js";

const	date = document.querySelector('input[type="date"]');

export let chosenCity = getInformationFromLocal(cityStorageName);
export const events = await fetchEvents(chosenCity);



if(date !== null) {
	setDate();
	handleEventCardClick(events)
	handleCategories();
	handleCitySearch()
}

if (window.location.hash === '#body-information') {
	renderEventInformation(events);
	tickets();
}

// 	navigator.geolocation.getCurrentPosition(getPosition);
// async function getPosition(position) {
	// 	const {latitude, longitude} = position.coords;
	// 	geoCity = await reverseGeocoding(latitude, longitude);
	// 	document.cookie = "geoCity=; expries"
	// 	console.log(geoCity);
	// 	const events = await fetchEvents(geoCity)
	// }
	
