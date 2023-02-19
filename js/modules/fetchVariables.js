export default function fetchVariables(e) {
	const cityValue = document.querySelector('.navigation-search__input').value;
	const chosenCategory = e.target.id;
	const date = '';

	return [cityValue, chosenCategory, date];
}