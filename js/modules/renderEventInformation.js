/**
 * @TODO take the clicked event and render infromation page based on event clicked
 * for each element.addeventlistener click
 */

export default function renderEventInformation(e, events) {
	const body = document.querySelector('.body-information');
	const eventClicked = e.target.parentElement.children[0].textContent;

	const event = events.find(event => {
		return event.name === eventClicked;
	})

	let formattedDate;

	function formatDate(event) {
		const options = {
			hour: "numeric",
			minute: "numeric",
			day: "numeric",
			month: "long",
			year: "numeric",
		 };
	
		const date = new Date(event.dates.start.dateTime || event.dates.start.localDate);
		formattedDate = new Intl.DateTimeFormat('no-NO', options).format(date)
		}


	const htmlInformation = `
	<header class="information__header">
		<div class="information__header--overlay"></div>
		<div class="information__header--text">
			<p class="header-information-name">${event.name}</p>
			<p class="header-information-venue">${event._embedded.venues[0].name}</p>
			<p class="header-information-date">${formattedDate}</p>
			<div class="header-information__image-small">
				<img src="${event.images[0]}" alt="${event.name}">
			</div>
			<button class="header-information-button">Get Tickets</button>
		</div>
	</header>
	<main class="information__main">
		<section class="information__information">
			<h3>Information</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis, aut qui, et minus hic harum odit mollitia veniam doloribus exercitationem! Veritatis iste labore, eum rerum quod repellendus suscipit quisquam sed quo deleniti totam est natus id distinctio esse obcaecati alias ex sapiente, ratione, exercitationem possimus assumenda consequuntur voluptatibus officiis? Et ab ipsa nisi iusto obcaecati! A, sunt ipsam sequi explicabo hic exercitationem nesciunt suscipit architecto fuga, quisquam aperiam repellendus nostrum, illum natus? Maiores error laboriosam laudantium ratione dolores nulla itaque numquam expedita repellendus qui animi ipsa voluptatem, eligendi officia eveniet eos tenetur quis quaerat tempore iste saepe. Cum, adipisci!</p>
			<div class="information__times">
				<p>Event start: ${event.dates.start.localTime}</p>
				<p>Door open: 18:30</p>
				<p>Duration: 90min</p>
			</div>
		</section>

		<section class="information__location">
			<h3>Location</h3>
			<p><span class="information__location--venue">${event._embedded.venues[0].name}</span>, ${event._embedded.venues[0].address.line1}, ${event._embedded.venues[0].postalCode} ${event._embedded.venues[0].city.name}</p>
			<div class="information__map" id="map">

			</div>
		</section>
		</main>
		`;

	body.insertAdjacentHTML('beforeend', htmlInformation);

	return bodyInformation;
}