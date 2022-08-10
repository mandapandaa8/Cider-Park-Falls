//responsibility of the database is to store all of the information
    //guests info, first and last name
    //park areas, name, location
    //services info type:
        //i. rafting
        //ii. canoeing
        //iii. fishing
        //iiii. hiking
        //iiiii. picnicking
        //iiiiii. rock climbing 
        //iiiiiii. lodging
        //iiiiiiii. parking
        //iiiiiiiii. information
        //iiiiiiiiii. zip line 

//export a copy of each data array individually 



const database = {
    Guests: [
        {
            id: 1,
            firstName: "Jimi",
            lastName: "Hendrix",
            parkAreaID: 3
        },

        {
            id: 2,
            firstName: "Fleetwood",
            lastName: "Mac",
            parkAreaID: 2
        },

        {
            id: 3,
            firstName: "Bon",
            lastName: "Iver",
            parkAreaID: 1
        },

        {
            id: 4,
            firstName: "Explosions",
            lastName: "Inthesky",
            parkAreaID: 5
        },

        {
            id: 5,
            firstName: "Jack",
            lastName: "White",
            parkAreaID: 4
        },

        {
            id: 6,
            firstName: "Dr.",
            lastName: "Dog",
            parkAreaID: 6
        },


    ],

    ParkAreas: [
        {
            id: 1,
            name: "Chamfort River",
            location: "North East",
        },

        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            location: "North",
        },

        {
            id: 3,
            name: "Lodge",
            location: "North West",
        },

        {
            id: 4,
            name: "Gander River",
            location: "South West",
        },

        {
            id: 5,
            name: "Campgrounds",
            location: "South",
        },

        {
            id: 6,
            name: "Pine Bluffs Trails",
            location: "South East",
        }
    ],

    Services: [
        {
            id: 1,
            type: "Rafting"
        },

        {
            id: 2,
            type: "Canoeing"
        },

        {
            id: 3,
            type: "Fishing"
        },

        {
            id: 4,
            type: "Hiking"
        },

        {
            id: 5,
            type: "Picnicking"
        },

        {
            id: 6,
            type: "Rock climbing"
        },

        {
            id: 7,
            type: "Lodging"
        },

        {
            id: 8,
            type: "Parking"
        },

        {
            id: 9,
            type: "Information"
        },

        {
            id: 10,
            type: "Zip line"
        }
    ],

    ServiceType: [
        {
            id: 1,
            parkID: 1,
            serviceID: 1
        },

        {
            id: 2,
            parkID: 1,
            serviceID: 2
        },

        {
            id: 3,
            parkID: 1,
            serviceID: 3
        },

        {
            id: 4,
            parkID: 2,
            serviceID: 4
        },

        {
            id: 5,
            parkID: 2,
            serviceID: 5
        },

        {
            id: 6,
            parkID: 2,
            serviceID: 6
        },
        
        {
            id: 7,
            parkID: 3,
            serviceID: 7
        },

        {
            id: 8,
            parkID: 3,
            serviceID: 8
        },

        {
            id: 9,
            parkID: 3,
            serviceID: 9
        },

        {
            id: 10,
            parkID: 3,
            serviceID: 5
        },

        {
            id: 11,
            parkID: 4,
            serviceID: 3
        },

        {
            id: 12,
            parkID: 4,
            serviceID: 4
        },

        {
            id: 13,
            parkID: 5,
            serviceID: 7
        },

        {
            id: 14,
            parkID: 5,
            serviceID: 8
        },

        {
            id: 15,
            parkID: 5,
            serviceID: 9
        },

        {
            id: 16,
            parkID: 6,
            serviceID: 4
        },

        {
            id: 17,
            parkID: 6,
            serviceID: 5
        },

        {
            id: 18,
            parkID: 6,
            serviceID: 10
        },
    ]
}

export const getGuests = () => {
    return database.Guests.map(guest => ({...guest}))
}

export const getParkAreas = () => {
    return database.ParkAreas.map(park => ({...park}))
}

export const getServices = () => {
    return database.Services.map(service => ({...service}))
}

export const getServiceType = () => {
    return database.ServiceType.map(type => ({...type}))
}