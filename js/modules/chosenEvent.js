import {addEventInformation} from "./localStorage.js";
import {storeInformationLocal} from "./localStorage.js";
import {clearInformationLocal} from "./localStorage.js";


export let ALLeventInformation = [];

export default function chosenEvent(e, events) {
	let eventClicked = e.target.parentElement.children[0].textContent;
			
	let event = events.find(event => {
		return event.name === eventClicked;
	})

	const eventName = event.name;
	const eventVenue = event._embedded.venues[0].name;
	const eventDate = event.dates.start.dateTime|| event.dates.start.localDate; //inn til formattign date
	const eventImage = event.images[0].url;
	const eventStartTime = event.dates.start.localTime;
	const address = event._embedded.venues[0].address.line1;
	const postalCode = event._embedded.venues[0].postalCode;
	const city = event._embedded.venues[0].city.name;
	const latitude = event._embedded.venues[0].location.latitude;
	const longitude = event._embedded.venues[0].location.longitude;

	// const images = event.images;
	// const imageHeader = event.images.find(image => {
	// 		return image.ratio === '16_9'
	// 	});

	// console.log(imageHeader);

	// const image = event.images.find(image => {
	// 	return image.ratio === '4_3'
	// });

	// ALLeventInformation = [];

	ALLeventInformation.push(eventName, eventVenue, eventDate, eventImage, eventStartTime, address, postalCode, city, latitude, longitude);

	let eventsStorageName = "clickedEventInformation";
	clearInformationLocal()
	addEventInformation([ALLeventInformation]);
	storeInformationLocal();
	const storedEventInformation = window.localStorage.getItem(eventsStorageName);
	console.log(storedEventInformation);
}

