import fetchEvents from "./modules/fetchEvents.js";
import fetchVariables from "./modules/fetchVariables.js";
import renderEventInformation from "./modules/renderEventInformation.js";
import chosenEvent from "./modules/chosenEvent.js";
import { storeCityInformationLocal, addCity, cityStorageName, getInformationFromLocal } from "./modules/localStorage.js";
import reverseGeocoding from "./modules/reverseGeocoding.js";
import tickets from "./modules/tickets.js";


let chosenCity = getInformationFromLocal(cityStorageName);
const events = await fetchEvents(chosenCity);

const categories = document.querySelectorAll('.category');
let eventCards = document.querySelectorAll('.event');
const	date = document.querySelector('input[type="date"]');
const searchBox = document.querySelector('.navigation-search__input');
let geoCity;

// addCity(chosenCity)
// storeCityInformationLocal()

//bytt med geolocation
navigator.geolocation.getCurrentPosition(getPosition);
async function getPosition(position) {
		const {latitude, longitude} = position.coords;
		geoCity = await reverseGeocoding(latitude, longitude)
		// const events = await fetchEvents(geoCity)
}


if(date !== null) {
	const today = new Date().toISOString().split('T')[0];
	date.setAttribute('min', today)
	date.setAttribute('value', today)
}

if(eventCards !== null) {
	eventCardClick()
}


/**
 * Fetching events based on parameteres clicked or chosen
 */
if(categories !==null) {
	categories.forEach(category => {
		category.addEventListener('click', async (e) => {
			categories.forEach((el) => el.classList.remove("active"));
    		e.target.classList.toggle("active");

			let [city, classificationName, date] = fetchVariables(e);
			if(city == '') city = geoCity;
			const events = await fetchEvents(city, classificationName, date);
			eventCardClick();
		})
	});	
		
	window.addEventListener('keyup', async (e) => {
		if (e.key === 'Enter') {
			const cityValue = searchBox.value;
			addCity(cityValue)
			storeCityInformationLocal()

			let [city, classificationName, date] = fetchVariables(e);
			if(city == '') city = cityStored;
			if(classificationName = '') classificationName = '';

			const events = await fetchEvents(city, classificationName, date);
			eventCardClick()
		};
	});
	}
	
function eventCardClick() {
	eventCards = document.querySelectorAll('.event');
	eventCards.forEach(event => {
		event.addEventListener('click', (e) => {
			chosenEvent(e, events);
		});
	})
}
			
if (window.location.hash === '#body-information') {
	renderEventInformation(events);
	tickets();
}


