//have an unordered list of each service in an html string

import { getServices } from "./database.js";

const services = getServices()

export const parkServices = () => {
    let servicesHTML = ""

    for (const service of services) {
        servicesHTML += `<div id="service--${service.id}">${service.type}   </div>`
    }

    servicesHTML += ""

    return servicesHTML
}

