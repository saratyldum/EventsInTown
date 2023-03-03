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
	let buttonClicked;
	let ticketCounter;
	let ticketChosen;
	let total;
	let allPrices= [];
	let cart = [];
	let chosenItem;

	ticketButton.addEventListener('click', handleTicketButtonClick);
	closeButton.addEventListener('click', handleTicketButtonClick);
	checkOut.addEventListener('click', handleTicketButtonClick);
	
	addTicket.forEach(button => {
		button.addEventListener('click', handleAddButtonClick);
	})

	removeTicket.forEach(button => {
		button.addEventListener('click', handleRemoveButtonClick);
	})

	removeTicket[2].removeEventListener('click', handleRemoveButtonClick);
	addTicket[2].removeEventListener('click', handleAddButtonClick);

	function handleTicketButtonClick() {
		ticketModal.classList.toggle('hidden');
		overlay.classList.toggle('hidden');
	}

	function handleAddButtonClick(e) {
		buttonClicked = e.target;
		addItem(buttonClicked);
		changeTicketCount(buttonClicked);
		changeBorder(buttonClicked);
		updateTotal(buttonClicked);
	}

	function handleRemoveButtonClick(e) {
		buttonClicked = e.target;
		ticketsChosen = Number(buttonClicked.nextElementSibling.textContent);
		if(ticketsChosen > 0) {
			removeItem(buttonClicked);
			changeTicketCount(buttonClicked);
			changeBorder(buttonClicked);
			updateTotal(buttonClicked);
		}
	}

	function addItem(buttonClicked) {
		let price = Number(buttonClicked.parentElement.dataset.price)
		let title = buttonClicked.parentElement.dataset.title;
		let id = buttonClicked.parentElement.dataset.id;

		chosenItem = cart.find(cartItem => cartItem.id === id);

		if (cart.includes(chosenItem)) {
			chosenItem.quantity++;
		} else {
			let cartItem = {
				title: title,
				price: price,
				id: id,
				quantity: 1,
			}
			cart.push(cartItem);
		}
	}

	function removeItem(buttonClicked) {
		let id = buttonClicked.parentElement.dataset.id;
		chosenItem = cart.find(cartItem => cartItem.id === id);

		if (cart.includes(chosenItem) && chosenItem.quantity > 0) {
			chosenItem.quantity--;
		} else {
			return
		}
	}

	function changeTicketCount(buttonClicked) {
		let id = buttonClicked.parentElement.dataset.id;
		chosenItem = cart.find(cartItem => cartItem.id === id);

		buttonClicked.classList.contains('ticket-counter__buttonMore') ? ticketCounter = buttonClicked.previousElementSibling : ticketCounter = buttonClicked.nextElementSibling;

		ticketsChosen = chosenItem.quantity;
		ticketCounter.textContent = ticketsChosen

	}

	function changeBorder(buttonClicked) {
		ticketChosen = buttonClicked.closest('div.ticket-item');
		ticketsChosen > 0 ? ticketChosen.style.borderColor = 'var(--primary-color)' :	ticketChosen.style.borderColor = 'var(--border-color)';
	}

	function updateTotal( buttonClicked) {
		const initalValue = 0;
		let price;

		buttonClicked.classList.contains('ticket-counter__buttonMore') ? price = +Number(buttonClicked.parentElement.dataset.price) : price = -Number(buttonClicked.parentElement.dataset.price);

		allPrices.push(price);

		total = Math.max(0, allPrices.reduce((accumulator, currentValue) => accumulator + currentValue, initalValue));	

		totalPrice.textContent = total;
   }
}