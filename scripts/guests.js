//create a function that outputs an html string of the 
    //first and last name of each guest

import { getGuests } from "./database.js"

const guests = getGuests()

export const guestName = () => {
    let guestHTML = ""
    guestHTML = "<ul>"

    for (const guest of guests) {
        guestHTML += 
        `<li>
        ${guest.firstName} ${guest.lastName}
        </li>`
    }

    guestHTML += "</ul>"

    return guestHTML
}