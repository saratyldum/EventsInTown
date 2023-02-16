export default async function fetchEvents(city='oslo', classificationName='' ) {
	/**
	 * @TODO FÅ INN FLERE EVENTS??
	 */
	const endpoint = `https://app.ticketmaster.com/discovery/v2/events?apikey=g42f3Y5jMjzLC9covJlFAEMR3OZVw9CN&locale=*&city=${city}&classificationName=${classificationName}`;

	const response = await fetch(endpoint);
	const result =  await response.json();

	const {events} = result._embedded;
	return events;
}