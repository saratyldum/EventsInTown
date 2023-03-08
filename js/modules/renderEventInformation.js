import generateMap from "./generateMap.js";
import {getInformationFromLocal, removeItemLocal, eventsStorageName} from "./localStorage.js";

export default function renderEventInformation() {
	const body = document.querySelector('.body-information');	
	const name = document.querySelector('#eventName');
	const venueHeader = document.querySelector('#venueHeader');
	const venueLocation = document.querySelector('#venueLocation');
	const date = document.querySelector('#eventDate');
	const image = document.querySelector('#eventImage');
	const startTime = document.querySelector('#eventStartTime');
	const venueAddress = document.querySelector('#venueAddress');
	const venuePostalCode = document.querySelector('#venuePostalCode');
	const venueCity = document.querySelector('#venuePostalCode');
	const header = document.querySelector('.information__header')


	let eventInformation = getInformationFromLocal(eventsStorageName);
	let allEventINFO = [];

	eventInformation.forEach(info => {
		allEventINFO.push(info.info);
	});

	const [eventName, eventVenue, eventDate, eventImage, eventStartTime, address, postalCode, city, latitude, longitude, imageHeader] = allEventINFO;
	const formattedDate = formatDate(eventDate);
	
	name.innerHTML = eventName;
	venueHeader.textContent = eventVenue;
	venueLocation.textContent = eventVenue;
	date.textContent = formattedDate;
	image.setAttribute("src", imageHeader.url);
	startTime.textContent = eventStartTime;
	venueAddress.textContent = address;
	venuePostalCode.textContent = postalCode;
	venueCity.textcontent = city;
	header.style.backgroundImage =`url('${imageHeader.url}')`;

	generateMap(latitude, longitude, eventVenue);
	removeItemLocal('clickedEventInformation');
}

function formatDate(eventDate) {
	const options = {
		hour: "numeric",
		minute: "numeric",
		day: "numeric",
		month: "long",
		year: "numeric",
		};

	const date = new Date(eventDate);
	return Intl.DateTimeFormat('no-NO', options).format(date)
}