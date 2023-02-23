export default function tickets() {
	const ticketButton = document.querySelector('.header-information-button');
	const ticketModal = document.querySelector('.ticket-modal');
	const closeButton = document.querySelector('.ticket-modal__close-button');
	const overlay = document.querySelector('.information__header--overlay');
	const addTicket = document.querySelector('ticket-counter__buttonMore')
	const removeTicket = document.querySelector('ticket-counter__buttonLess');
	const totalPrice = document.querySelector('.ticket-total');
	const checkOut = document.querySelector('.ticket__button-check-out');

	let ticketsChosen;
	

	ticketButton.addEventListener('click', handleButtonClick);
	closeButton.addEventListener('click', handleButtonClick);

	function handleButtonClick() {
		ticketModal.classList.toggle('hidden');
		overlay.classList.toggle('hidden');
	}
}