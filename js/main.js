import fetchEvents from "./modules/fetchEvents.js";
import fetchVariables from "./modules/fetchVariables.js";
import renderEventInformation from "./modules/renderEventInformation.js";
import chosenEvent from "./modules/chosenEvent.js";
import { removeItemLocal, storeCityInformationLocal, addCity, cityStorageName, getInformationFromLocal } from "./modules/localStorage.js";

let chosenCity = getInformationFromLocal(cityStorageName);

const categories = document.querySelectorAll('.category');
removeItemLocal(cityStorageName)


//bytt med geolocation
navigator.geolocation.getCurrentPosition(getPosition);

function getPosition(position) {
		const {latitude, longitude} = position.coords;

}



addCity(chosenCity)
storeCityInformationLocal()

const events = await fetchEvents(chosenCity);
const eventCards = document.querySelectorAll('.event');
const	date = document.querySelector('input[type="date"]');
const searchBox = document.querySelector('.navigation-search__input');


if(date !== null) {
	const today = new Date().toISOString().split('T')[0];
	date.setAttribute('min', today)
	date.setAttribute('value', today)
}

/**
 * local storage på byen som er søkt på og dato så det ikke refreshes når man går tilbake
 */

// navigator.geolocation.getCurrentPosition();
// navigator.geolocation.getCurrentPosition(success);

// const coordinats =async function success(pos) {
// 	const {latitude, longitude} = pos.coords;
// 	const coordinates = new Array(latitude, longitude).toString();
// 	return coordinates;
// }

// const events = await fetchEvents(coordinats);
 


/**
 * Fetching events based on parameteres clicked or chosen
 */
if(categories !==null) {
	categories.forEach(category => {
		category.addEventListener('click', async (e) => {
			categories.forEach((el) => el.classList.remove("active"));
    		e.target.classList.toggle("active");

			let [city, classificationName, date] = fetchVariables(e);
			if(city == '') city = cityStored;

			const events = await fetchEvents(city, classificationName, date);
			const eventCards = document.querySelectorAll('.event');
			eventCards.forEach(event => {
				event.addEventListener('click', (e) => {
					chosenEvent(e, events);
				});
			})
		})
	});	
		
		window.addEventListener('keyup', async (e) => {
			if (e.key === 'Enter') {
				const value = searchBox.value;
				// clearCityInformationLocal()
				// removeItemLocal('cityStorage')
				addCity(value)
				storeCityInformationLocal()

				let [city, classificationName, date] = fetchVariables(e);
				if(city == '') city = cityStored;
				if(classificationName = '') classificationName = '';
	
				const events = await fetchEvents(city, classificationName, date);
				const eventCards = document.querySelectorAll('.event');
				eventCards.forEach(event => {
					event.addEventListener('click', (e) => {
						chosenEvent(e, events);
					});
				})
			};
		});
	}
	
if(eventCards !== null) {
	eventCards.forEach(event => {
		event.addEventListener('click', (e) => {
			chosenEvent(e, events);
		});
	})
}
			
if (window.location.hash === '#body-information') {
	renderEventInformation(events);
}


