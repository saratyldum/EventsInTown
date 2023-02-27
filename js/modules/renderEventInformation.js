import generateMap from "./generateMap.js";
import {getInformationFromLocal} from "./localStorage.js";
import tickets from "./tickets.js";
import {clearInformationLocal} from "./localStorage.js";





export default function renderEventInformation() {
	tickets();
	let eventInformation = getInformationFromLocal();
	console.log(eventInformation);
	const body = document.querySelector('.body-information');	
	// console.log(body);

	let allEventINFO = [];
	eventInformation.forEach(info => {
		allEventINFO.push(info.name);
	});

	// const body = document.querySelector('body');

	// body.innerHTML = '';
	
		const name = document.querySelector('#eventName');
		const venueHeader = document.querySelector('#venueHeader');
		const venueLocation = document.querySelector('#venueLocation');
		const date = document.querySelector('#eventDate');
		const image = document.querySelector('#eventImage');
		const startTime = document.querySelector('#eventStartTime');
		const venueAddress = document.querySelector('#venueAddress');
		const venuePostalCode = document.querySelector('#venuePostalCode');
		const venueCity = document.querySelector('#venuePostalCode');

		
	
		const [eventName, eventVenue, eventDate, eventImage, eventStartTime, address, postalCode, city, latitude, longitude] = allEventINFO;

		
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
			image.setAttribute("src", eventImage);
			startTime.textContent = eventStartTime;
			venueAddress.textContent = address;
			venuePostalCode.textContent = postalCode;
			venueCity.textcontent = city;
	
		
			// const htmlInformation = `
			// <div class="information__header--overlay hidden"></div>
			// <header class="information__header">
			// 	<div class="information__header--text">
			// 		<p class="header-information-name">${eventName}</p>
			// 		<p class="header-information-venue">${eventVenue}</p>
			// 		<p class="header-information-date">${formattedDate}</p>
			// 		<div class="header-information__image-small">
			// 			<img src="${eventImage.url}" alt="${eventName}">
			// 		</div>
			// 		<button class="header-information-button">Get Tickets</button>
			// 	</div>
			// </header>
			// <main class="information__main">
			// 	<section class="information__information">
			// 		<h3>Information</h3>
			// 		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis, aut qui, et minus hic harum odit mollitia veniam doloribus exercitationem! Veritatis iste labore, eum rerum quod repellendus suscipit quisquam sed quo deleniti totam est natus id distinctio esse obcaecati alias ex sapiente, ratione, exercitationem possimus assumenda consequuntur voluptatibus officiis? Et ab ipsa nisi iusto obcaecati! A, sunt ipsam sequi explicabo hic exercitationem nesciunt suscipit architecto fuga, quisquam aperiam repellendus nostrum, illum natus? Maiores error laboriosam laudantium ratione dolores nulla itaque numquam expedita repellendus qui animi ipsa voluptatem, eligendi officia eveniet eos tenetur quis quaerat tempore iste saepe. Cum, adipisci!</p>
			// 		<div class="information__times">
			// 			<p>Event start: ${eventStartTime}</p>
			// 			<p>Door open: 18:30</p>
			// 			<p>Duration: 90min</p>
			// 		</div>
			// 	</section>
		
			// 	<section class="information__location">
			// 		<h3>Location</h3>
			// 		<p><span class="information__location--venue">${eventVenue}</span>, ${address}, ${postalCode} ${city}</p>
			// 		<div class="information__map" id="map">
		
			// 		</div>
			// 	</section>
			// 	</main>
			// 	`;
		
			// body.insertAdjacentHTML('beforeend', htmlInformation);
			const header = document.querySelector('.information__header')
			header.style.backgroundImage =`url('${eventImage}')`;

			generateMap(latitude, longitude)
			clearInformationLocal()

			
	
			// generateMap(latitude, longitude)

}