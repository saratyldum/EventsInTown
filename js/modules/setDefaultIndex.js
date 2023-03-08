import fetchEvents from "./fetchEvents.js";
import fetchVariables from "./fetchVariables.js";
import chosenEvent from "./chosenEvent.js";
import { storeCityInformationLocal, addCity } from "./localStorage.js";
// import { geoCity } from "../main.js";

const categories = document.querySelectorAll('.category');
const	date = document.querySelector('input[type="date"]');
const searchBox = document.querySelector('.navigation-search__input');
let eventCards;


export function handleEventCardClick(events) {
	eventCards = document.querySelectorAll('.event');
	eventCards.forEach(event => {
		event.addEventListener('click', (e) => {
			console.log(e.target.parentElement.parentElement.children[1].children[0].textContent);
			chosenEvent(e, events);
		});
	})
}

export function setDate() {
	const today = new Date().toISOString().split('T')[0];
	date.setAttribute('min', today)
	date.setAttribute('value', today)
}

export function handleCategoryClick() {
	categories.forEach(category => {
		category.addEventListener('click', async (e) => {
			categories.forEach((el) => el.classList.remove("active"));
			 e.target.classList.toggle("active");
	
			let [city, classificationName, date] = fetchVariables(e);
			if(city == '') city = chosenCity;
			const events = await fetchEvents(city, classificationName, date);
			handleEventCardClick(events);
		})
	});	

}

export function handleCitySearch() {
	window.addEventListener('keyup', async (e) => {
		if (e.key === 'Enter') {
			const cityValue = searchBox.value;
			addCity(cityValue)
			storeCityInformationLocal()
	
			let [city, classificationName, date] = fetchVariables(e);
			if(city == '') city = 'Oslo';
			if(classificationName = '') classificationName = '';
	
			const events = await fetchEvents(city, classificationName, date);
			handleEventCardClick(events)
		};
	});
}