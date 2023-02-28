import generateMap from "./generateMap.js";
import {getInformationFromLocal} from "./localStorage.js";
import tickets from "./tickets.js";
import {clearInformationLocal} from "./localStorage.js";





export default function renderEventInformation() {
	tickets();
	let eventInformation = getInformationFromLocal();
	const body = document.querySelector('.body-information');	

	let allEventINFO = [];
	eventInformation.forEach(info => {
		allEventINFO.push(info.name);
	});

		const name = document.querySelector('#eventName');
		const venueHeader = document.querySelector('#venueHeader');
		const venueLocation = document.querySelector('#venueLocation');
		const date = document.querySelector('#eventDate');
		const image = document.querySelector('#eventImage');
		const startTime = document.querySelector('#eventStartTime');
		const venueAddress = document.querySelector('#venueAddress');
		const venuePostalCode = document.querySelector('#venuePostalCode');
		const venueCity = document.querySelector('#venuePostalCode');

		
	
		const [eventName, eventVenue, eventDate, eventImage, eventStartTime, address, postalCode, city, latitude, longitude, imageHeader] = allEventINFO;

		
			let formattedDate;
			function formatDate(eventDate) {
				const options = {
					hour: "numeric",
					minute: "numeric",
					day: "numeric",
					month: "long",
					year: "numeric",
					};
			
				// const date = new Date(event.dates.start.dateTime || event.dates.start.localDate);
				const date = new Date(eventDate);
				formattedDate = new Intl.DateTimeFormat('no-NO', options).format(date)
				}
				formatDate(eventDate);
	
			name.innerHTML = eventName;
			venueHeader.textContent = eventVenue;
			venueLocation.textContent = eventVenue;
			date.textContent = formattedDate;
			image.setAttribute("src", imageHeader.url);
			startTime.textContent = eventStartTime;
			venueAddress.textContent = address;
			venuePostalCode.textContent = postalCode;
			venueCity.textcontent = city;
	
		
			const header = document.querySelector('.information__header')
			header.style.backgroundImage =`url('${imageHeader.url}')`;

			generateMap(latitude, longitude, eventVenue)
			clearInformationLocal()
}