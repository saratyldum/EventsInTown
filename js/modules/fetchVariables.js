export default function fetchVariables(e) {
	let cityValue = document.querySelector('.navigation-search__input').value;
	const chosenCategory = e.target.id;
	const dateValue = document.querySelector('input[type="date"]').value;

	const date = new Date(dateValue).toISOString().split('.')[0]+"Z";

	if(cityValue == '') cityValue = 'oslo'
	return [cityValue, chosenCategory, date];
}