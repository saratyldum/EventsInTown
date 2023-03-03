		let eventsStorageName = "clickedEventInformation";
		let eventInformation = getInformationFromLocal();
						
		export function getInformationFromLocal() {
			const storedEventInformation = window.localStorage.getItem(eventsStorageName);
		
			if (storedEventInformation) {
				return JSON.parse(storedEventInformation)
			} else {
				return [];
			}
		}
		
		export function addEventInformation([allEventInformation]) {
			//creates a random string sequence to use as ID
			for (const info of allEventInformation) {
				const eventInformationID = Math.random().toString(32).slice(2);
				eventInformation.push({
					id: eventInformationID,
					name: info,
				});
			}	
		}
		
		export function storeInformationLocal() {
			window.localStorage.setItem(eventsStorageName, JSON.stringify(eventInformation));
		}
		
		export function clearInformationLocal() {
			window.localStorage.clear(eventsStorageName);
		}

	