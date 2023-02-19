export default async function fetchEvents(city='oslo', classificationName='', date='' ) {
	const main = document.querySelector('.grid');
	main.innerHTML = ''

	const apiKey = 'g42f3Y5jMjzLC9covJlFAEMR3OZVw9CN'
	const baseURL = 'https://app.ticketmaster.com/discovery/v2/';
	const endpointEvents = `${baseURL}/events?apikey=${apiKey}&locale=*&size=200&city=${city}&classificationName=${classificationName}&sort=date,asc&startDateTime=${date}`;

	const response = await fetch(endpointEvents);

	//TRY CATCH
	const result =  await response.json();

	const {events} = result._embedded;
	return events;
}