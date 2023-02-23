import fetchVariables from "./fetchVariables.js";
import renderEventCards from "./renderEventCards.js";

const categories = document.querySelectorAll('.category');
const errorElement = document.querySelector('.errorBox');

export default async function fetchEvents(city='oslo', classificationName='', date='' ) {
	const grid = document.querySelector('.grid');

	if(grid !== null) {
		const main = document.querySelector('.grid');
		main.innerHTML = ''
	
		const apiKey = 'g42f3Y5jMjzLC9covJlFAEMR3OZVw9CN'
		const baseURL = 'https://app.ticketmaster.com/discovery/v2/';
		const endpointEvents = `${baseURL}/events?apikey=${apiKey}&locale=*&size=200&city=${city}&classificationName=${classificationName}&sort=date,asc&startDateTime=${date}`;
	
		
		try {
			const response = await fetch(endpointEvents);
			const events = await handleResponse(response)
			return events;
		} catch (error) {
			handleError(error)
		}
	}
}

async function handleResponse(response) {
	if(response.ok) {
		const result =  await response.json();

		if('_embedded' in result) {
			const {events} = result._embedded;
			errorElement.classList.remove('visible');
			errorElement.textContent = '';
			renderEventCards(events);
			return events;
		} else {
			handleError('Events could not be found')
			throw new Error('Events could not be found');
		}		
	}else if (response.status === 404) {
		throw new Error(`Events could not be found (${response.status})`);
	} else if (response.status === 401) {
		throw new Error(`Not authorized user (${response.status})`);
	} else if (response.status >= 500) {
		throw new Error(`Server not responding (${response.status})`);
	} else {
		throw new Error(`Something went wrong`);
	}
}

function handleError(error) {
	errorElement.classList.add('visible');
	errorElement.textContent = error;
}

