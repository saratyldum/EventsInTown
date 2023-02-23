import fetchEvents from "./modules/fetchEvents.js";
import renderEventCards from "./modules/renderEventCards.js";
import fetchVariables from "./modules/fetchVariables.js";
import renderEventInformation from "./modules/renderEventInformation.js";
import generateMap from "./modules/generateMap.js";
import handleResponse from "./modules/fetchEvents.js";
import chosenEvent from "./modules/chosenEvent.js";

const categories = document.querySelectorAll('.category');
const events = await fetchEvents('oslo');
const eventCards = document.querySelectorAll('.event');
const	date = document.querySelector('input[type="date"]');

const today = new Date().toISOString().split('T')[0];

date.setAttribute('min', today)
date.setAttribute('value', today)


// generateMap(59.911491, 10.757933)

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
				if(city == '' ) {
					city = 'oslo'
				}
				fetchEvents(city, classificationName, date);
			};
		});
	}

	if(eventCards !== null) {
	eventCards.forEach(event => {
		event.addEventListener('click', (e) => {
			const eventChosen = chosenEvent(e, events)
				renderEventInformation(eventChosen);
			 });
			// generateMap(events);
		})
	}
