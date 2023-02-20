import fetchEvents from "./modules/fetchEvents.js";
import renderEventCards from "./modules/renderEventCards.js";
import fetchVariables from "./modules/fetchVariables.js";
import renderEventInformation from "./modules/renderEventInformation.js";
// import generateMap from "./modules/generateMap.js";

const categories = document.querySelectorAll('.category');
const events = await fetchEvents('oslo');
if(events !== null) {
	renderEventCards(events);
}

if(categories !==null) {
	categories.forEach(category => {
		category.addEventListener('click', async (e) => {
			let [city, classificationName, date] = fetchVariables(e);
			if(city == '') {
				city = 'oslo'
			}
			const events = await fetchEvents(city, classificationName, date);
			renderEventCards(events);
		})});	

	window.addEventListener('keyup', async (e) => {
		if (e.key === 'Enter') {
			const [city, classificationName, date] = fetchVariables(e);
			const events = await fetchEvents(city, classificationName, date);
			renderEventCards(events);
		};
	});
}
	
const eventCards = document.querySelectorAll('.event');

if(eventCards !== null) {
	eventCards.forEach(event => {
		event.addEventListener('click', (e) => {
			const body = renderEventInformation(e, events)
			// generateMap(events);

			console.log(body);
		});
	})
}



