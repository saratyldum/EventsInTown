export default function fetchVariables(e) {
	const cityValue = document.querySelector('.navigation-search__input').value;
	const chosenCategory = e.target.id;
	const dateValue = document.querySelector('input[type="date"]').value + 'T00:00:00Z';

	return [cityValue, chosenCategory, dateValue];
}