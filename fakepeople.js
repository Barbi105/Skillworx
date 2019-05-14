//PEOPLE

let users = {
        user1: {
            firstName: "Alyssa",
            lastName: "Williams",
            email: "AlyssaWilliams@example.org",
            password: "123456",
            image: "https://i.imgur.com/kQvyZil.jpg",
            rating: 3,
            skills: ["Coding", "Painting"],
            favorites: []
        },
        user2: {
            firstName: "Thomas",
            lastName: "Krishke",
            email: "ThomasKrishke@example.org",
            password: "123456",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=adult-boy-casual-220453.jpg&fm=jpg",
            rating: 2,
            skills: ["Furniture Assembly", "Pet Care"],
            favorites: []
        },
        user3: {
            firstName: "Brandon",
            lastName: "Kenny",
            email: "BrandonKenny@example.org",
            password: "123456",
            image: "https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            rating: 5,
            skills: ["Housework", "Yard Work", "Coding"],
            favorites: []
        },
        user4: {
            firstName: "Brittney",
            lastName: "Tidwell",
            email: "BrittneyTidwell@example.org",
            password: "123456",
            image: "https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            rating: 4,
            skills: ["IT", "Tutoring", "Housework"],
            favorites: []
        },
        user5: {
            firstName: "Sarah",
            lastName: "Johnson",
            email: "SarahJohnson@example.org",
            password: "123456",
            image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            rating: 5,
            skills: ["Petcare", "IT", "Coding"],
            favorites: []
        },
        user2: {
            firstName: "Jessica",
            lastName: "Hernandez",
            email: "JessicaHernandez@example.org",
            password: "123456",
            image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            rating: 2,
            skills: ["Yardwork", "Furniture Assembly"],
            favorites: []
        },
        user6: {
            firstName: "Devonte",
            lastName: "Jenkins",
            email: "DevonteJenkins@example.org",
            password: "123456",
            image: "https://images.pexels.com/photos/910143/pexels-photo-910143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            rating: 5,
            skills: ["Coding", "Painting", "IT"],
            favorites: []
        },
        user7: {
            firstName: "Sean",
            lastName: "Calligraphy",
            email: "SeanCalligraphy@example.org",
            password: "123456",
            image: "https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            rating: 4,
            skills: ["Painting", "Petcare"],
            favorites: []
        },
        user8: {
            firstName: "Ajit",
            lastName: "Nag",
            email: "AjitNag@example.org",
            password: "123456",
            image: "https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            rating: 3,
            skills: ["Coding", "Housework", "Furniture Assembly"],
            favorites: []
        },
        user9: {
            firstName: "Kaila",
            lastName: "Gilliam",
            email: "KailaGilliam@example.org",
            password: "123456",
            image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            rating: 5,
            skills: ["Petcare", "Painting", "IT"],
            favorites: []
        },
        user10: {
            firstName: "Hector",
            lastName: "Sanchez",
            email: "HectorSanchez@example.org",
            password: "123456",
            image: "https://images.pexels.com/photos/2267117/pexels-photo-2267117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            rating: 4,
            skills: ["Tutoring", "Furniture Assemby", "Housework"],
            favorites: []
        },

        //JOBS
        let jobs = {
                job1: {
                    title: "Laundry Done",
                    description: "Looking for someone to wash/dry & fold my laundry please.",
                    zipcode: "78666",
                    date: "01/25/2019",
                    payRate: "$25/hr",
                    type: "Housework"
                },

                job2: {
                    title: "Wall needs to be painted",
                    description: "I converted one of my rooms to a nursery and need it painted light blue.",
                    zipcode: "78709",
                    date: "08/03/2019",
                    payRate: "$80/hr",
                    type: "Housework"
                },

                job3: {
                    title: "Pet sitter needed",
                    description: "I need a pet sitter for my chihuahua.",
                    zipcode: "78640",
                    date: "05/23/2019",
                    payRate: "$70/hr",
                    type: "Pet Care"

                },

                job4: {
                    title: "Table needs to be put together",
                    description: "Ikea table needs to be put together.",
                    zipcode: "78735",
                    date: "09/02/2019",
                    payRate: "$30/hr",
                    type: "Furniture Assembly"

                },

                job5: {
                    title: "I need my router set up!",
                    description: "Router needs to be set up so I can have internets.",
                    zipcode: "78666",
                    date: "12/04/2019",
                    payRate: "$95/hr",
                    type: "IT"

                },

                job6: {
                    title: "Math tutor wanted",
                    description: "My son needs an algebra tutor.",
                    zipcode: "78727",
                    date: "09/17/2019",
                    payRate: "$150/hr",
                    type: "Tutoring"

                },

                job7: {
                    title: "Maid needed",
                    description: "My house is filthy and needs to be cleaned.",
                    zipcode: "78717",
                    date: "07/11/2019",
                    payRate: "$60/hr",
                    type: "Housework"

                },

                job8: {
                    title: "Leaky sink, please help!!",
                    description: "My sink leaks and its causing so my problems and my wife is going to divorce me.",
                    zipcode: "78612",
                    date: "05/03/2019",
                    payRate: "$100/hr",
                    type: "Misc"
                },


                job9: {
                    title: "Science tutor needed",
                    description: "Science tutor wanted.",
                    zipcode: "73301",
                    date: "02/15/2019",
                    payRate: "$50/hr",
                    type: "Tutoring"
                },


                job10: {
                    title: "Need my backyard done",
                    description: "My backyard is terrible!!",
                    zipcode: "78640",
                    date: "05/07/2019",
                    payRate: "$70/hr",
                    type: "Yardwork"


                },

                job11: {
                    title: "Someone watch my doggie!!",
                    description: "My dog needs to be watched while i'm out of town",
                    zipcode: "78630",
                    date: "10/17/2019",
                    payRate: "$45/hr",
                    type: "Pet Care"
                },




                job12: {
                    title: "My TV has to be set up.",
                    description: "Please set my TV up.",
                    zipcode: "78613",
                    date: "11/29/2019",
                    payRate: "$15/hr",
                    type: "IT"
                },

                job13: {
                    title: "Someone watch my grandma.",
                    description: "My grandmother needs to be watched over.",
                    zipcode: "78613",
                    date: "11/04/2019",
                    payRate: "$350/hr",
                    type: "Misc"
                },

                job14: {
                    title: "Chair needs to be put together.",
                    description: "I need my chair to be put together.",
                    zipcode: "78713",
                    date: "11/29/2019",
                    payRate: "$80/hr",
                    type: "Furniture Assembly"
                },

                job15: {
                    title: "I need my floor mopped.",
                    description: "My kitchen floor needs to be mopped.",
                    zipcode: "78640",
                    date: "04/18/2019",
                    payRate: "$90/hr",
                    type: "Housework"
                };