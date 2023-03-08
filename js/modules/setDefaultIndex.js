import fetchEvents from "./fetchEvents.js";
import fetchVariables from "./fetchVariables.js";
import chosenEvent from "./chosenEvent.js";
import { storeCityInformationLocal, addCity } from "./localStorage.js";
import { chosenCity } from "../main.js";

const categories = document.querySelectorAll('.category');
const	date = document.querySelector('input[type="date"]');
const searchBox = document.querySelector('.navigation-search__input');
let eventCards;

export function handleCategories() {
	categories.forEach(category => {
		category.addEventListener('click', handleCategoryClick)
	})
}

export function handleEventCardClick(events) {
	eventCards = document.querySelectorAll('.event');
	eventCards.forEach(event => {
		event.addEventListener('click', (e) => {
			chosenEvent(e, events);
		});
	})
}

export function setDate() {
	const today = new Date().toISOString().split('T')[0];
	date.setAttribute('min', today)
	date.setAttribute('value', today)
}

export function handleCitySearch() {
	window.addEventListener('keyup', async (e) => {
		if (e.key === 'Enter') {
			const cityValue = searchBox.value;
			let [city, classificationName, date] = fetchVariables(e);
			if(classificationName = '') classificationName = '';
			const events = await fetchEvents(city, classificationName, date);
			
			categories.forEach((el) => el.classList.remove("active"));
			addCity(cityValue)
			storeCityInformationLocal()
			handleEventCardClick(events)
		};
	});
}

async function handleCategoryClick(e) {
	categories.forEach((el) => el.classList.remove("active"));
	e.target.classList.toggle("active");

	let [city, classificationName, date] = fetchVariables(e);
	const events = await fetchEvents(city, classificationName, date);
	handleEventCardClick(events);;	
}
