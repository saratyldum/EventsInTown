import fetchEvents from "./modules/fetchEvents.js";
import renderEventCards from "./modules/renderEventCards.js";
import fetchVariables from "./modules/fetchVariables.js";
// import generateMap from "./modules/generateMap.js";

const categories = document.querySelectorAll('.category');
const events = await fetchEvents('oslo');
renderEventCards(events);

// generateMap(events);

categories.forEach(category => {
	category.addEventListener('click', async (e) => {
		const [city, classificationName, date] = fetchVariables(e);
		const events = await fetchEvents(city, classificationName, date);
		renderEventCards(events);
	})});	


window.addEventListener('keyup', async (e) => {
	if (e.key === 'Enter') {
		const [city, classificationName, date] = fetchVariables(e);
		const events = await fetchEvents(city, classificationName, date);
		renderEventCards(events);
	};
})



