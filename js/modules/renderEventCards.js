export default async function renderEventCards(events) {
	const main = document.querySelector('.grid');

	/**
	 * @TODO gjør at hvert event kun synes en gang
	 */
	events.forEach(event => {
		//DETTE ER  BILDENE SOM SKAL BRUKEs
		const images = event.images.find(image => {
			return image.ratio === '4_3'
		});
		console.log(images);

		const html = `
		<div class="event">
			<a href="./information.html">
				<div class="event__image"><img src="${event.images[0].url}" alt="${event.name}"></div>
				<div class="event__information">
					<p class="event__information-name">${event.name}</p>
					<p class="event__information-date">${event.sales.public[1]}</p>
					<p class="event__information-city">${event._embedded.venues[0].city.name}</p>
					<p class="event__information-venue">${event._embedded.venues[0].name}</p>
				</div>
			</a>
		</div>
		`;
		main.insertAdjacentHTML('beforeend', html);
	});
}

