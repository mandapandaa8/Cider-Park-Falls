/*
What are the main resources (i.e. tables)? Design your ERD first.✅
    1. Park areas
    2. services
    3. guests
    4. service type - to connect the guest service ids with the park area ids
What are the properties of each resource?
    1. park area properties = id, name, location, servicesID
    2. services = id, type(of services), parkID
What is the relationship between the resources? If it's many-to-many, 
    what additional data must you design in your ERD?
Which modules should you create?
    scripts:
        1. main js
        2. database.js
        3 park areas
        4. services
        5. guests
    index.html
    styles:
        1. main.css
What is the responsibility of each module?
    1. database holds all the data
    2. main. js holds the html strings and interpolates from the other modules
    3. guest module will hold the guests in html format
    4. park area module will hold the areas in html format
        and hold guests who travel throughout the park
        will also hold various services to offer
    5.services.js will hold the various activities the park provides
    6.service type will connect the park areas to their services
What functions should be in which modules?
What is the responsibility of each function?
What should each function return?
What is the specific algorithm for each function? Does the function need parameters? 
    Should it return something?
*/

/* 


/<article class="assignments">
    <h2>Service Types</h2>
    ${foundServicesHTML()}
</article>


*/

import { guestName } from "./guests.js"
import { parkAreaNames } from "./parkAreas.js"
import { parkServices } from "./services.js"
import { foundServicesHTML } from "./serviceType.js"


const mainContainer = document.querySelector("#main")
const applicationHTML = `
<article class="details">
    <div class="parksAndServices">
        <section class="services">
            ${parkServices()}      
        </section>
        <section class="parkAreas">
            ${parkAreaNames()}
        </section>
    </div>
    <section class="guests">
        <h2 class="guestHeader">Guests</h2>
        ${guestName()}
    </section>
</article>

`
mainContainer.innerHTML = applicationHTML