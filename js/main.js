import fetchEvents from "./modules/fetchEvents.js";
import renderEventCards from "./modules/renderEventCards.js";
import fetchCity from "./modules/fetchCity.js";

const main = document.querySelector('.grid');

const events = await fetchEvents();
renderEventCards(events);


window.addEventListener('keyup', async (e) => {
	if (e.key === 'Enter') {
		main.innerHTML = ''
		const city = fetchCity(e)
		
		const events = await fetchEvents(city);
		console.log(events);
		renderEventCards(events);
	};
})



