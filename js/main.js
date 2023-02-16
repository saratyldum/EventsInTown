import fetchEvents from "./modules/fetchEvents.js";
import renderEventCards from "./modules/renderEventCards.js";

const events = await fetchEvents();

renderEventCards(events);
