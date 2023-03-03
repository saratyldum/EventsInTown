import fetchEvents from "./modules/fetchEvents.js";
import fetchVariables from "./modules/fetchVariables.js";
import renderEventInformation from "./modules/renderEventInformation.js";
import chosenEvent from "./modules/chosenEvent.js";

const categories = document.querySelectorAll('.category');
const events = await fetchEvents();
const eventCards = document.querySelectorAll('.event');
const	date = document.querySelector('input[type="date"]');

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
			if(city == '') city = 'oslo';

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
				let [city, classificationName, date] = fetchVariables(e);
				if(city == '') city = 'oslo' //ENDRE SÅ DET IKKE ER OSLO, MEN BASERT PÅ GEOLOCATION
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
	renderEventInformation();
}


