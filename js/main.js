import fetchEvents from "./modules/fetchEvents.js";
import fetchVariables from "./modules/fetchVariables.js";
import renderEventInformation from "./modules/renderEventInformation.js";
import chosenEvent from "./modules/chosenEvent.js";
import { clearInformationLocal } from "./modules/localStorage.js";

if (window.location.pathname == '/EventsInTown/') {
	clearInformationLocal()
}


const categories = document.querySelectorAll('.category');
const events = await fetchEvents('oslo');
const eventCards = document.querySelectorAll('.event');
const	date = document.querySelector('input[type="date"]');

if(date !== null) {
	const today = new Date().toISOString().split('T')[0];
	date.setAttribute('min', today)
	date.setAttribute('value', today)
}


// navigator.geolocation.getCurrentPosition();

/**
 * Fetching events based on parameteres clicked or chosen
 */
if(categories !==null) {
	categories.forEach(category => {
		category.addEventListener('click', async (e) => {
			let [city, classificationName, date] = fetchVariables(e);
			if(city == '') {
				city = 'oslo'
			}
			fetchEvents(city, classificationName, date);
		})});	
		
		window.addEventListener('keyup', async (e) => {
			if (e.key === 'Enter') {
				let [city, classificationName, date] = fetchVariables(e);
				if(city == '') {
					city = 'oslo'
				}

				if(classificationName = '') {
					classificationName = ''
				}
				fetchEvents(city, classificationName, date);
			};
		});
	}

	// import { eventInformation } from "./modules/chosenEvent.js";

if(eventCards !== null) {
eventCards.forEach(event => {
	event.addEventListener('click', (e) => {
		clearInformationLocal()
		chosenEvent(e, events);
			});
		})
	}
	
	
	if (window.location.hash === '#body-information') {
		renderEventInformation();
	}

