var Users = []

var Hotels_And_Restourants = [
    {
        name: "Monastero Santa Rosa Hotel & Spa", 
        location: "Salerno, Italy",
        country: "Italy",
        city: "Salerno",
        stars: "images/5.png",
        img: "images/hotels and restaurants/hotel1.png",
        role: "hotel",
        rooms: 4,
        roomPhoto: "images/hotels and restaurants/rooms/hotel1/",
        price: "2875 $",
        // activity: ["Sailing", "Diving", "Surfing"],
        activity: "Surfing",
        description: `<p>Set in a restored 17th-century monastery, this elegant clifftop hotel 
                    overlooking the sea is 1 km from the beach and 8 km from the gardens of Villa 
                    Rufolo.</p>
                    <p>The plush, upscale rooms come with Wi-Fi, flat-screen TVs and sea views; 
                    some have terraces. Most suites add separate living rooms, dining rooms and/or 
                    antique-style furnishings.</p>
                    <p>Breakfast is available. There's also a refined restaurant with a sea-view 
                    terrace, as well as a cozy bar. Other amenities include an outdoor pool and 
                    landscaped gardens, plus a gym and a spa. There is also <strong>surfing activity.
                    </strong> Kids age 16 and older are welcome.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.4149149252135!2d14.574462875266045!3d40.62073084319925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b942532a597cf%3A0x979ee9503661ffc9!2sMonastero%20Santa%20Rosa%20Hotel%20%26%20Spa!5e0!3m2!1ska!2sge!4v1685187667687!5m2!1ska!2sge"
    },

    {
        name: "Grand Hotel Tremezzo", 
        location: "Lake Como, Italy",
        country: "Italy",
        city: "Como",
        stars: "images/3.png",
        img: "images/hotels and restaurants/hotel2.png",
        role: "hotel",
        rooms: 6,
        roomPhoto: "images/hotels and restaurants/rooms/hotel2/",
        price: "1517 $",
        // activity: ["Rafting", "Hiking", "Mountain biking"],
        activity: "Snowboarding",
        description: `<p>Overlooking Lake Como, this palatial art nouveau hotel is 250 m from 
                    the Villa Carlotta museum and botanic garden.</p>
                    <p>Formal rooms offer Wi-Fi, flat-screen TVs, minibars and park or lake views; 
                    some have balconies or sitting areas. Suites include whirlpool tubs, and some 
                    have private gardens. Rooftop suites add butlers, and terraces with hot tubs. 
                    Room service is available.</p>
                    <p>Breakfast is served in an elegant restaurant which has a terrace; there's 
                    also a casual trattoria, a posh bar, a beachfront bistro and a poolside 
                    pizzeria. There is <strong>snowboarding activity</strong> 3 pools, a 
                    private beach and a marina, plus a spa, a fitness room and a tennis court.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5544.631714954015!2d9.223210055095498!3d45.984922398545905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478422cc02aefbef%3A0xdf6f075b79ed8c54!2sGrand%20Hotel%20Tremezzo!5e0!3m2!1ska!2sge!4v1685189235829!5m2!1ska!2sge"
    },

    {
        name: "The Oberoi Udaivilas Hotel", 
        location: "Udaipur, India",
        country: "India",
        city: "Udaipur",
        stars: "images/4.png",
        img: "images/hotels and restaurants/hotel3.png",
        role: "hotel",
        rooms: 3,
        roomPhoto: "images/hotels and restaurants/rooms/hotel3/",
        price: "405 $",
        // activity: ["Roller-skating", "Skateboarding", "Wingsuit surfing"],        
        activity: "Skiing",
        description: `<p>Set amid gardens and overlooking Lake Pichola, this luxury hotel is 
                    2 km from both Jagdish Temple and the City Palace Museum.</p>
                    <p>In rooms are TVs, free Wi-Fi, DVD players and sitting areas, plus minibars and iPod docks. 
                    Suites add dining rooms, living rooms and coffeemakers, as well as private pools and 
                    furnished courtyards with lake views.</p>
                    <p>Amenities include 2 upscale restaurants and a bar with lake views; private 
                    outdoor lakeside dining is available. There's also a gym, a spa and an outdoor 
                    pool, plus a business centre, meeting rooms and <strong>skiing activity</strong> 
                    event.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.3420902660323!2d73.66986627454496!3d24.577387556527665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ccf804ea9e2f3%3A0x21eb806bf9fc7e9a!2sThe%20Oberoi%20Udaivilas%2C%20Udaipur!5e0!3m2!1ska!2sge!4v1685189294528!5m2!1ska!2sge"
    },

    {
        name: "AKA Beverly Hills Hotel", 
        location: "Los Angeles, USA",
        country: "USA",
        city: "Los Angeles",
        stars: "images/5.png",
        img: "images/hotels and restaurants/hotel4.png",
        role: "hotel",
        rooms: 5,
        roomPhoto: "images/hotels and restaurants/rooms/hotel4/",
        price: "650 $",
        // activity: ["Roller-skating", "Climbing", "Mountain biking"],
        activity: "Hiking",
        description: `<p>This upscale, extended-stay hotel in the prestigious Golden Triangle 
                    area is 8 minutes on foot from the glitzy shops on Rodeo Drive and 6 miles 
                    from Santa Monica Airport.</p>
                    <p>Refined 1- and 2-bedroom suites feature kitchens, dining areas and 
                    balconies, as well as flat-screen TVs and free Wi-Fi. Upscale suites add 
                    living rooms with fireplaces, and townhouses have private entrances.</p>
                    <p>Local transfers in a Mercedes shuttle are complimentary. Other amenities 
                    include a terrace with fire pits, plus a private cinema, a 24-hour gym and 
                    direct access to Spago, an acclaimed restaurant. <strong>hiking activity</strong> 
                    is available.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0648615737427!2d-118.39954742507068!3d34.06785151690738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbfef00f57a3%3A0xaa20740290ea3602!2sAKA%20Beverly%20Hills!5e0!3m2!1ska!2sge!4v1685189387351!5m2!1ska!2sge"
    },

    {
        name: "Sheraton Vancouver Airport Hotel", 
        location: "Vancouver, Canada",
        country: "Canada",
        city: "Vancouver",
        stars: "images/4.png",
        img: "images/hotels and restaurants/hotel5.png",
        role: "hotel",
        rooms: 4,            
        roomPhoto: "images/hotels and restaurants/rooms/hotel5/",
        price: "303 $",
        // activity: ["Skiing", "Snowboarding", "Ice climbing", "Snowmobile Racing"],
        activity: "Climbing",
        //Paragliding, Bungee jumping, Roller-skating, Skateboarding
        description: `<p>Set 5.8 km from Vancouver International Airport, this unfussy business 
                    hotel is also 14.1 km from Vancouver Art Gallery.</p>
                    <p>Understated rooms have free WiFi, 37-inch flat-screen TVs and balconies, 
                    plus work areas with desks and ergonomic chairs. Suites add separate seating 
                    areas. Club rooms provide access to a lounge with complimentary breakfast, 
                    all-day snacks and afternoon appetizers.</p>
                    <p>There's a complimentary 24-hour airport shuttle. Other amenities include a 
                    funky bistro-style restaurant, a bar, a Starbucks coffee shop, an outdoor pool 
                    and an <strong>Climbing activity</strong>.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10485549.827567061!2d-132.10745518362472!3d50.087247549847184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860accf4ff91a5%3A0x490b7f4e91d53016!2sSheraton%20Vancouver%20Airport%20Hotel!5e0!3m2!1ska!2sge!4v1685189475949!5m2!1ska!2sge"
    },

    {
        name: "Fairmont Vancouver Airport Hotel", 
        location: "Vancouver, Canada",
        country: "Canada",
        city: "Vancouver",
        stars: "images/5.png",
        img: "images/hotels and restaurants/hotel6.png",
        role: "hotel",
        rooms: 5,
        roomPhoto: "images/hotels and restaurants/rooms/hotel6/",
        price: "283 $",
        // activity: ["Skiing", "Snowboarding", "Ice climbing", "Snowmobile Racing"],
        activity: "Snowmobile Racing",
        description: `<p>Set within the Vancouver International Airport, this upscale hotel 
                    is 1 km from YVR-Airport Station train station and 9 km from VanDusen 
                    Botanical Garden. The chic rooms and suites offer flat-screens and coffeemakers, plus 
                    floor-to-ceiling soundproofed windows with runway. They also come with minibars and Wi-Fi, 
                    while upgraded rooms and suites add access to a lounge with complimentary breakfast, 
                    plus whirlpool tubs and <strong>snowmobile racing activity.</strong></p>
                    <p>Amenities include a sophisticated restaurant and bar, an indoor pool, a 
                    fitness center with a spa, as well as a business center and meeting rooms.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.2956498126027!2d-123.17854132421355!3d49.194950776963616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674ccb7189d71%3A0xbf7039d71797c1e0!2sFairmont%20Vancouver%20Airport!5e0!3m2!1ska!2sge!4v1685189545545!5m2!1ska!2sge"
    },

    {
        name: "Ahn Luh Zhujiajiao Hotel", 
        location: "Zhujiajiao, China",
        country: "China",
        city: "Zhujiajiao",
        stars: "images/5.png",
        img: "images/hotels and restaurants/hotel7.png",
        role: "hotel",
        rooms: 4,
        roomPhoto: "images/hotels and restaurants/rooms/hotel7/",
        price: "820 $",
        // activity: ["Sailing", "Skateboarding", "Roller-skating"],
        activity: "Sailing",
        description: `<p>It’s impossible to look at Ahn Luh Zhujiajiao and not be 
                    impressed. Housed in a 600-year-old courthouse from 
                    the Ming Dynasty, this hotel looks like the film set for Raise 
                    the Red Lantern. The historic building, which had been beautifully 
                    restored, now serves as the hotel lobby and will transport you to 
                    another era the moment you arrive.</p>
                    <p>Hotel consists of 35 villas, each with its own 
                    private garden and immaculate design. The interiors are modern but 
                    loosely inspired by the style of the old Chinese mansion. There are 
                    <strong>sailing activity</strong>. If you really want to spoil 
                    yourself, we have swimming pool.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3415.7948467319757!2d121.0450780747962!3d31.11543356703802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b2f9b232578281%3A0x354e4a71e7977195!2sAhnluh%20Zhujiajiao!5e0!3m2!1ska!2sge!4v1685189607362!5m2!1ska!2sge"
    },

    {
        name: "Shangri-La Paris Hotel", 
        location: "Paris, France",
        country: "France",
        city: "Paris",
        stars: "images/5.png",
        img: "images/hotels and restaurants/hotel8.png",
        role: "hotel",
        rooms: 7,
        roomPhoto: "images/hotels and restaurants/rooms/hotel8/",  
        price: "4432 $",
        // activity: ["Skateboarding", "Roller-skating"],
        activity: "Roller-skating",
        description: `<p>Occupying a former royal home situated among elegant 
                    buildings, this ritzy hotel in the 16th arr. is a 2-minute walk from 
                    Iéna metro station, 11 minutes' walk from the Eiffel Tower and 
                    1 km from the Seine river.</p>
                    <p>Featuring marble bathrooms with heated floors, the plush 
                    rooms offer free Wi-Fi and flat-screen TVs, plus minibars, and 
                    tea and coffeemakers. Some have Eiffel Tower and/or river 
                    views, and upgraded rooms add balconies or terraces.</p>
                    <p>There are <strong>roller-skating activity,</strong> 3 posh dining 
                    options, including an acclaimed restaurant, as well as a chic bar. 
                    There's also a spa with an indoor pool and a gym.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.699964267777!2d2.2908277757647473!3d48.86393150031744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fe438ddba07%3A0x11dbb8d180ab18a0!2sShangri-La%20Paris!5e0!3m2!1ska!2sge!4v1685189646388!5m2!1ska!2sge"
    },

    {
        name: "Alain Ducasse au Plaza Athénée",
        location: "Paris, France",
        country: "France",
        city: "Paris",
        stars: "images/4.png",
        img: "images/hotels and restaurants/restaurant1.png",
        role: "restaurant",
        rooms: 5,
        roomPhoto: "images/hotels and restaurants/rooms/restaurant1/",
        price: "min: 120$",
        description: `<p>The smell of freshly baked croissants fills the air as you approach 
                    the entrance of the exquisite restaurant, situated just a stone's throw 
                    away from the magnificent Eiffel Tower in Paris. With its tastefully 
                    decorated interiors, featuring ornate chandeliers, plush seating, elegant 
                    table settings and beautiful artwork, the restaurant exudes a timeless 
                    grandeur, transporting you to an era of extravagance and opulence.</p>
                    <p>The menu at this restaurant is an exquisite selection of French 
                    delicacies, crafted to perfection by renowned chefs with years of culinary 
                    expertise. From the succulent meat dishes to the light.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.578680969956!2d2.301670575764921!3d48.8662440001547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fca87aedf91%3A0xa6df537792efd47b!2zSMO0dGVsIFBsYXphIEF0aMOpbsOpZQ!5e0!3m2!1ska!2sge!4v1685189794534!5m2!1ska!2sge"
    },

    {
        name: "Marco Martini Roma",
        location: "Rome, Italy",        
        country: "Italy",
        city: "Rome",
        stars: "images/5.png",
        img: "images/hotels and restaurants/restaurant2.png",
        role: "restaurant",
        rooms: 3,
        roomPhoto: "images/hotels and restaurants/rooms/restaurant2/",
        price: "min: 87$",
        description: `<p>Located in the heart of Rome, Italy, is a restaurant unlike any other. 
                    As you step through the doors of this eatery, you're greeted by the 
                    warm and comforting smell of freshly made pasta. The ambiance is cozy, yet still 
                    manages to evoke the bustling energy of one of Italy's most famous cities.</p>
                    <p>With a focus on rustic, traditional Italian cuisine, the menu at this restaurant 
                    includes classics such as carbonara, spaghetti alle vongole, and pizza margherita. 
                    Each dish is made with the freshest ingredients, hand-selected from local markets. 
                    The wine list, too, is a tribute to Italy's rich culinary heritage, with an extensive 
                    selection of regional and national wines.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.5721136268558!2d12.482166375337004!3d41.8805516652617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61cd25edcc3d%3A0xf4fd97802dedac05!2sMarco%20Martini%20Roma!5e0!3m2!1ska!2sge!4v1685189870870!5m2!1ska!2sge"
    },

    {
        name: "Narisawa Restaurant",
        location: "Tokyo, Japan",
        country: "Japan",
        city: "Tokyo",
        stars: "images/5.png",
        img: "images/hotels and restaurants/restaurant3.png",
        role: "restaurant",
        rooms: 4,
        roomPhoto: "images/hotels and restaurants/rooms/restaurant3/",
        price: "min: 100$",
        description: `<p>Narisawa offers a vast menu of authentic Japanese dishes, including a 
                    delectable array of fresh sushi and sashimi. The restaurant's chefs take great 
                    care in selecting the best seafood available in the market, ensuring that every 
                    dish served here is of the highest quality. To complement its delicious dishes, 
                    the restaurant also offers a range of sake and Japanese beer options.</p>
                    <p>Narisawa's exceptional service and traditional Japanese ambiance make it a 
                    must-visit restaurant in Tokyo. From its mouth-watering seafood to its cozy and 
                    comfortable setting, Narisawa is undoubtedly one of the best restaurants in the 
                    city and a must-try for anyone visiting Tokyo.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.218300564772!2d139.71954117500653!3d35.671626430502826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c833415b0ad%3A0x78be2a9702e4db5c!2sNarisawa!5e0!3m2!1ska!2sge!4v1685189950520!5m2!1ska!2sge"
    },

    {
        name: "The Restaurant",
        location: "New York, USA",
        country: "USA",
        city: "New York",
        stars: "images/5.png",
        img: "images/hotels and restaurants/restaurant4.png",
        role: "restaurant",
        rooms: 3,
        roomPhoto: "images/hotels and restaurants/rooms/restaurant4/",
        price: "min: 90$",
        description: `<p>The menu at this restaurant is a culinary tour de force, featuring 
                    carefully curated dishes that showcase the best of New York's diverse gastronomic 
                    landscape. From elevated takes on classic comfort foods like mac and cheese to exotic 
                    global flavors like Thai curries and French foie gras, there's something here to suit 
                    every palate.</p>
                    <p>But dining at this restaurant isn't just about the food – it's a full sensory 
                    experience that engages all the senses. From the artfully constructed cocktails to the 
                    impeccable service and stunning views, every detail has been meticulously crafted to 
                    create a one-of-a-kind dining adventure.</p>`,
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.269917096244!2d-73.99669992472658!3d40.756087734916555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2594f6db7295d%3A0x54166e2a9ffa1529!2sThe%20Restaurant!5e0!3m2!1ska!2sge!4v1685190024758!5m2!1ska!2sge"
    },
]

var Trips = [
    {
        img: "images/trip places/place1.png",
        title: "East Village Ice Cream Crawl",
        text: `We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. 
                At each ice cream store we'll explore the story behind the business and see what makes the 
                ice cream unique as you savor every…`,
        date: "Today",
        account: "Maria Philips",
        comments: 2,
        link: "https://earth.google.com/earth/d/1oLJpMTX34e-2rTzZ5G1tA6SEPrb91-O2?usp=sharing"
    },

    {
        img: "images/trip places/place2.png",
        title: "Brooklyn Bridge cinematic photo walk",
        text: `This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always 
                open to capture clients at different locations upon request for an additional charge.`,
        date: "Today",
        account: "James Calzoni",
        comments: 17,
        link: ""
    },

    {
        img: "images/trip places/place3.png",
        title: "Travel trip through the Italy",
        text: `I advise you to visit Italy. there is a tour thanks to which you can see the most 
                popular and famous places in italy: Milan, Verona, Venice, Pisa, Florence, Rome 
                and Syracuse`,
        date: "Yesterday",
        account: "Amelia Garcia",
        comments: 0,
        link: "https://earth.google.com/earth/d/1CPZRSd0B6inAEGA6-rx-RG1V68iW1U4U?usp=sharing"
    },
]


var Activities = [
    {title: "Sailing", img: "images/activities/1.png"},
    {title: "Climbing", img: "images/activities/2.png"},
    {title: "Skiing", img: "images/activities/3.png"},
    {title: "Hiking", img: "images/activities/4.png"},
    // {title: "Skateboarding", img: "images/activities/5.png"},
    {title: "Snowboarding", img: "images/activities/6.png"},
    {title: "Roller-skating", img: "images/activities/7.png"},
    // {title: "Mountain biking", img: "images/activities/8.png"},
    // {title: "Wingsuit surfing", img: "images/activities/9.png"},
    // {title: "Bungee jumping", img: "images/activities/10.png"},
    // {title: "Ice climbing", img: "images/activities/11.png"},
    // {title: "Diving", img: "images/activities/12.png"},
    // {title: "Paragliding", img: "images/activities/13.png"},
    // {title: "Rafting", img: "images/activities/14.png"},
    {title: "Surfing", img: "images/activities/15.png"},
    {title: "Snowmobile Racing", img: "images/activities/16.png"},
]