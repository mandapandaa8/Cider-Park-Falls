//function that is responsible for connecting the park area to its service types
//for loop that iterates the park area
    //nest a second loop that iterates the services
        //if park area.id === serviceID

import { getServices } from "./database.js";
import { getParkAreas } from "./database.js";
import { getServiceType } from "./database.js";
import { parkServices } from "./services.js"


const services = getServices()
const parkAreas = getParkAreas()
const serviceType = getServiceType()


//function whose responsibility is to find the corresponding service per area

const findServiceArea = (serviceType, allAreas) => {
    let serviceInArea = null
    for (const area of allAreas) {
        if (area.id === serviceType.parkID) {
            for (const service of services) {
                if (service.id === serviceType.serviceID)
                serviceInArea = service.type
            }
        }
        
    }

    return serviceInArea
}

//create a string for the above function that will list all of the services

export const foundServicesHTML = () => {
    let foundServiceHTML = ""
    foundServiceHTML = "<ul>"

    for (const foundService of serviceType) {
        const serviceList = findServiceArea(foundService, parkAreas)
        foundServiceHTML += `
        <li>
            ${serviceList}
        </li>`
    }

    foundServiceHTML += "</ul>"
    return foundServiceHTML
}

//modify function to only get services specific to their park area
    //set a parameter that uses the parkArea
        //if statement should match the parkAreas id === serviceType.serviceID
        //use the findServiceArea function to loop through because it has
            //already matched the parkID


export const serviceMatchHTML = (parkArea) => {
    let serviceMatchHTML = ""
    
    for (const matchedService of serviceType) {
        if (parkArea.id === matchedService.parkID) {
        const listOfServices = findServiceArea(matchedService, parkAreas)
        serviceMatchHTML += 
        ` <li>${listOfServices}</li>`
        }
    }
    return serviceMatchHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,servId] = itemClicked.id.split("--")
            for (const service of services) {
                if (service.id === parseInt(servId)) {
                    let click = serviceClickPark(service.id)
                    window.alert(`${service.type} is available in ${click}`)
                }
            }

        }
    }
)

export const serviceClickPark = (service) => {
    let serviceListHTML = ""
    for (const park of parkAreas) {
        for (const selectService of serviceType) {
            if ((service === selectService.serviceID) && 
                (selectService.parkID === park.id)) {
                    if (serviceListHTML === "") {
                     serviceListHTML += `${park.name} `}
                     else { 
                        serviceListHTML += ` and ${park.name}`
                 }           
            }
        }
    }
    return serviceListHTML
}