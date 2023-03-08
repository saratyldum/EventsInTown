import fetchEvents from "./modules/fetchEvents.js";
import renderEventInformation from "./modules/renderEventInformation.js";
import reverseGeocoding from "./modules/reverseGeocoding.js";
import tickets from "./modules/tickets.js";
import { handleCategoryClick, handleCitySearch, handleEventCardClick, setDate } from "./modules/setDefaultIndex.js";
import { cityStorageName, getInformationFromLocal } from "./modules/localStorage.js";

const	date = document.querySelector('input[type="date"]');
let chosenCity = getInformationFromLocal(cityStorageName);

export let geoCity;
export const events = await fetchEvents(chosenCity);


if(date !== null) {
	setDate();
	handleEventCardClick(events)
	handleCategoryClick();
	handleCitySearch()
}

if (window.location.hash === '#body-information') {
	renderEventInformation(events);
	tickets();
}

// navigator.geolocation.getCurrentPosition(getPosition);
// async function getPosition(position) {
// 		const {latitude, longitude} = position.coords;
// 		geoCity = await reverseGeocoding(latitude, longitude)
// 		const events = await fetchEvents(geoCity)
// }

