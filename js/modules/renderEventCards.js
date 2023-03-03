export default function renderEventCards(events) {
	if(events !== null) {

		const main = document.querySelector('.grid');
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
	
		events.forEach(event => {
			formatDate(event)
	
			/**
			 * finds images with aspect ration 4:3
			 */
			const image = event.images.find(image => {
				return image.ratio === '4_3'
			});
	
			const html = `
			<div class="event">
				<a href="information.html#body-information">
					<div class="event__image"><img src="${image.url}" alt="${event.name}"></div>
					<div class="event__information">
						<p class="event__information-name">${event.name}</p>
						<p class="event__information-date">${formattedDate}</p>
						<p class="event__information-city">${event._embedded.venues[0].city.name}</p>
						<p class="event__information-venue">${event._embedded.venues[0].name}</p>
					</div>
				</a>
			</div>
			`;
			main.insertAdjacentHTML('beforeend', html);
		});
	}
}

