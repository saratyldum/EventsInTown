		export let eventsStorageName = "clickedEventInformation";
		let eventInformation = getInformationFromLocal(eventsStorageName);

		export let cityStorageName = 'cityStorage';
		let cityInformation = getInformationFromLocal(cityStorageName);
						
		export function getInformationFromLocal(storageName) {
			const storedInfo = window.localStorage.getItem(storageName);
			if (storedInfo) {
				return JSON.parse(storedInfo)
			} else {
				return [];
			}
		}

		
		export function addEventInformation([allEventInformation]) {
			for (const info of allEventInformation) {
				eventInformation.push({
					info: info,
				});
			}	
		}
		
		export function addCity(city) {
			cityInformation = city;
		}
		
		export function storeInformationLocal() {
			window.localStorage.setItem(eventsStorageName, JSON.stringify(eventInformation));
		}
		
		export function storeCityInformationLocal() {
			window.localStorage.setItem(cityStorageName, JSON.stringify(cityInformation));
		}
		
		export function removeItemLocal(item) {
			window.localStorage.removeItem(item)
		}
		// export function clearInformationLocal() {
		// 	window.localStorage.clear(eventsStorageName);
		// }

	