import {getInformationFromLocal} from "./localStorage.js";

		/**
	 * GJØR TICKET INFO DYNAMIC
	 */
	// let eventInformation = getInformationFromLocal();
	// let allEventINFO = [];

	// eventInformation.forEach(info => {
	// 	allEventINFO.push(info.name);
	// });

export default function tickets() {
	const ticketButton = document.querySelector('.header-information-button');
	const ticketModal = document.querySelector('.ticket-modal');
	const closeButton = document.querySelector('.ticket-modal__close-button');
	const overlay = document.querySelector('.information__header--overlay');
	const addTicket = document.querySelectorAll('.ticket-counter__buttonMore')
	const removeTicket = document.querySelectorAll('.ticket-counter__buttonLess');
	const totalPrice = document.querySelector('.ticket-total-sum');
	const checkOut = document.querySelector('.ticket__button-check-out');
	
	let ticketsChosen;
	let isOpen = false;	
	let buttonClicked;
	let ticketCounter;
	let ticketChosen;
	let total = 0;


	ticketButton.addEventListener('click', handleTicketButtonClick);
	closeButton.addEventListener('click', handleTicketButtonClick);
	
	addTicket.forEach(button => {
		button.addEventListener('click', handleAddButtonClick);
	})

	removeTicket.forEach(button => {
		button.addEventListener('click', handleRemoveButtonClick);
	})

	function handleTicketButtonClick() {
		isOpen = !isOpen;
		ticketModal.classList.toggle('hidden');
		overlay.classList.toggle('hidden');
	}

	function handleAddButtonClick(e) {
		isOpen = true;
		buttonClicked = e.target;
		changeTicketCount(buttonClicked);
		changeBorder(buttonClicked);
		updateTotal(e, buttonClicked);
	}

	function handleRemoveButtonClick(e) {
		buttonClicked = e.target;
		changeTicketCount(buttonClicked);
		changeBorder(buttonClicked);
		updateTotal(e, buttonClicked);
	}

	function changeTicketCount(buttonClicked) {
		if(buttonClicked.classList.contains('ticket-counter__buttonMore')) {
			ticketCounter = buttonClicked.previousElementSibling;	
			ticketsChosen = Number(ticketCounter.textContent);
			ticketsChosen++;
			ticketCounter.textContent = ticketsChosen;
		} else if(buttonClicked.classList.contains('ticket-counter__buttonLess') && ticketsChosen > 0) {
			ticketCounter = buttonClicked.nextElementSibling;
			ticketsChosen = Number(ticketCounter.textContent);
			ticketsChosen--;
			ticketCounter.textContent = Math.max(0, ticketsChosen);
		}
	}

	function changeBorder(buttonClicked) {
		ticketChosen = buttonClicked.closest('div.ticket-item');
		ticketsChosen > 0 ? ticketChosen.style.borderColor = 'var(--primary-color)' :	ticketChosen.style.borderColor = 'var(--border-color)';
	}

	function updateTotal(e, buttonClicked) {
		totalPrice.textContent = total;
		const priceString = e.target.parentElement.parentElement.nextElementSibling.textContent;
		const priceChosen = Number(priceString.match(/(\d+)/)[0]);
		
		(buttonClicked.classList.contains('ticket-counter__buttonMore') && ticketsChosen >= 0) ? (total += priceChosen) : (total -= priceChosen);
		totalPrice.textContent = Math.max(0, total);

   }
}