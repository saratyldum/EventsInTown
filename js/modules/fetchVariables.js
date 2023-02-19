export default function fetchVariables(e) {
	const cityValue = document.querySelector('.navigation-search__input').value;
	const categories = document.querySelectorAll('.category');

	let chosenCategoryA ='';
	const chosenCategory = function handleCategoryClick(e) {
		console.log(e.target.id)
		chosenCategoryA = e.target.id;
	}

	categories.forEach(category => {
		category.addEventListener('click', chosenCategory)
	})
	
	
	console.log(chosenCategoryA);

	const date = ''
	return [cityValue, chosenCategoryA, date];
}