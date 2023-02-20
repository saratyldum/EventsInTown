export default function fetchVariables(e) {
	const cityValue = document.querySelector('.navigation-search__input').value;
	const chosenCategory = e.target.id;
	const date = document.querySelector('input[type="date"]').value + 'T00:00:00Z';

	/**
	 * @todo make min date dynamicalyy todays date	
	 */

	return [cityValue, chosenCategory, date];
}