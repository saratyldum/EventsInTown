export default function tickets() {
	const ticketButton = document.querySelector('.header-information-button');
	const ticketModal = document.querySelector('.ticket-modal');
	const closeButton = document.querySelector('.ticket-modal__close-button');
	const overlay = document.querySelector('.information__header--overlay');

	ticketButton.addEventListener('click', handleButtonClick);
	closeButton.addEventListener('click', handleButtonClick);

	function handleButtonClick() {
		ticketModal.classList.toggle('hidden');
		overlay.classList.toggle('hidden');
	}
}