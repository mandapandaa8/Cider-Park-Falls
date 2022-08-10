//create an HTML string for each area within the park

import { getParkAreas } from "./database.js"
import { serviceMatchHTML } from "./serviceType.js"
import { getGuests } from "./database.js"


const parkAreas = getParkAreas()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("parkAreas")) {
            const [,areaID] = itemClicked.id.split("--")
            for (const park of parkAreas) {
                if (park.id === parseInt(areaID)) {
                    let count = guestLocation(park.id)
                    window.alert(`There are ${count} guests in this area.`)
                }
            }
        }
    }
)


export const parkAreaNames = () => {
    let areasHTML = ""

    for (const area of parkAreas) {
        const matchedServices = serviceMatchHTML(area)
        areasHTML += 
        `<div class="areaAndServices">
        <h2 id="parkAreas--${area.id}" class="sectionTitle">${area.name}</h2>
        <div class="serviceList">${matchedServices}</div></div>`
    }

    areasHTML += ""

    return areasHTML

}

//create a function that will set guests to parkAreas so that
    //you can connect how many guests are in an area

export const guestLocation = (parkAreasID) => {
    let count = 0
    const guests = getGuests()
    for (const guestIn of guests) {
        if (guestIn.parkAreaID === parkAreasID) {
        count ++
        }
    }
    return count
}