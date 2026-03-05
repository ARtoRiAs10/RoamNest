const sampleListings = [
  // ─── Beaches ───
  {
    title: "Sunrise Shack on Goa's Anjuna Beach",
    description: "Wake up to the sound of waves in this gorgeous beachfront shack. Sip fresh coconut water on your private patio, stroll to the Saturday night market, and catch the most spectacular sunsets in South Asia.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=75" },
    price: 2800, location: "Anjuna, Goa", country: "India", category: "Beaches",
  },
  {
    title: "Overwater Bungalow in the Maldives",
    description: "Float above the clearest lagoon on Earth. This iconic overwater bungalow has a glass floor, direct ocean access, and private deck with hammock. Snorkel with manta rays right from your door.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1074&auto=format&fit=crop" },
    price: 18500, location: "North Malé Atoll", country: "Maldives", category: "Beaches",
  },
  {
    title: "Clifftop Cottage in Varkala",
    description: "Perched dramatically on Kerala's famous red laterite cliffs, this whitewashed cottage has panoramic Arabian Sea views, outdoor shower, and is steps from the famous beach promenade with cafés and yoga studios.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=75" },
    price: 3200, location: "Varkala, Kerala", country: "India", category: "Beaches",
  },

  // ─── City Lofts ───
  {
    title: "Penthouse Studio in South Mumbai",
    description: "Sleep in the sky above one of India's most iconic neighbourhoods. Rooftop terrace with Gateway of India views, contemporary design, walking distance to Colaba Causeway, cafés, and heritage art galleries.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800&q=75" },
    price: 6500, location: "Colaba, Mumbai", country: "India", category: "City Lofts",
  },
  {
    title: "Industrial Loft in Hauz Khas Village",
    description: "A beautifully curated loft blending exposed brick, rattan furniture, and floor-to-ceiling windows overlooking Delhi's hippest village. Surrounded by galleries, rooftop bars, and the ancient Hauz Khas lake.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=75" },
    price: 4200, location: "Hauz Khas, New Delhi", country: "India", category: "City Lofts",
  },
  {
    title: "Skyline Apartment in Tokyo",
    description: "A sleek high-rise apartment in the heart of Shinjuku with floor-to-ceiling windows framing Mount Fuji on clear days. Walking distance to night markets, ramen alleys, and the neon pulse of Kabukichō.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=75" },
    price: 7800, location: "Shinjuku, Tokyo", country: "Japan", category: "City Lofts",
  },
  {
    title: "Art-Deco Suite in Bengaluru",
    description: "A gem in the heart of Indiranagar — restored 1970s Art-Deco bungalow with modern interiors, private garden, cycling distance to micro-breweries, boutique stores, and Cubbon Park.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=75" },
    price: 4800, location: "Indiranagar, Bengaluru", country: "India", category: "City Lofts",
  },

  // ─── Mountains ───
  {
    title: "Pine-Wood Cabin in Manali",
    description: "Tuck into a hand-crafted deodar pine cabin under the Himalayas. Fall asleep to the Beas River, wake to snow-dusted peaks. Perfect base for Solang Valley skiing, Rohtang Pass, and paragliding.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=75" },
    price: 3500, location: "Manali, Himachal Pradesh", country: "India", category: "Mountains",
  },
  {
    title: "Alpine Lodge in Coorg",
    description: "Disappear into the misty coffee and spice plantations of Coorg. This stone lodge sits at 1,500m with wrap-around verandah, bonfire pit, and guided plantation walks at dawn.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=75" },
    price: 4600, location: "Madikeri, Coorg", country: "India", category: "Mountains",
  },
  {
    title: "Ski Chalet in the Swiss Alps",
    description: "Ski-in, ski-out access from this classic Swiss chalet in Verbier. Crackling fireplace, hot tub on the snow-wrapped terrace, and après-ski fondue nights included. Sleeps 8.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=75" },
    price: 22000, location: "Verbier", country: "Switzerland", category: "Mountains",
  },

  // ─── Treehouses ───
  {
    title: "Rainforest Treehouse in Wayanad",
    description: "Perch 30 feet above Kerala's lush rainforest canopy. Bamboo-and-teak construction, open-air shower, rope bridge, and resident hornbills. Total off-grid magic — solar power and collected rainwater.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=75" },
    price: 5200, location: "Vythiri, Wayanad", country: "India", category: "Treehouses",
  },
  {
    title: "Jungle Canopy Retreat in Coorg",
    description: "An architect-designed treehouse that sits seamlessly in a 200-year-old jackfruit tree. Two-storey, with a private plunge pool suspended on the deck and stunning valley views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=75" },
    price: 6800, location: "Kushalnagar, Coorg", country: "India", category: "Treehouses",
  },
  {
    title: "Eco-Treehouse in Costa Rica",
    description: "A pioneering sustainable treehouse in the middle of a private cloud forest reserve. Surrounded by toucans, sloths, and howler monkeys. Zip-line from your deck to the swimming hole below.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=75" },
    price: 9500, location: "Monteverde", country: "Costa Rica", category: "Treehouses",
  },

  // ─── Luxury Villas ───
  {
    title: "Heritage Pool Villa in Udaipur",
    description: "A restored 19th-century haveli with blue-tiled private pool overlooking Lake Pichola. Hand-painted murals, antique four-poster beds, in-house chef, and evening boat rides to the City Palace.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=75" },
    price: 14000, location: "Udaipur, Rajasthan", country: "India", category: "Luxury Villas",
  },
  {
    title: "Infinity-Pool Villa in Bali",
    description: "Perched on a Ubud ridge with a 20m infinity pool that appears to merge with the rice terraces. Five bedrooms, private chef, spa room, and your own chef's vegetable garden.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=75" },
    price: 32000, location: "Ubud, Bali", country: "Indonesia", category: "Luxury Villas",
  },
  {
    title: "Clifftop Villa in Santorini",
    description: "An iconic whitewashed clifftop villa in Oia with three private pools, sea-view Jacuzzi, personal concierge, and the most photographed sunset in the Mediterranean. Sleeps 10.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=75" },
    price: 55000, location: "Oia, Santorini", country: "Greece", category: "Luxury Villas",
  },

  // ─── Heritage Homes ───
  {
    title: "Chettinad Mansion in Tamil Nadu",
    description: "Stay in a living museum — a 120-year-old Chettinad palace with Burma teak pillars, Italian marble floors, courtyard verandahs, and a family cook who'll prepare authentic Chettinad feast thalis.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75" },
    price: 7500, location: "Karaikudi, Tamil Nadu", country: "India", category: "Heritage Homes",
  },
  {
    title: "Haveli Guesthouse in Jaisalmer",
    description: "Sleep inside a 14th-century golden sandstone haveli inside Jaisalmer Fort — one of the last living forts in the world. Rooftop dining with desert panorama and star-gazing at midnight.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=75" },
    price: 5800, location: "Jaisalmer Fort, Rajasthan", country: "India", category: "Heritage Homes",
  },
  {
    title: "Tudor Cottage in the Cotswolds",
    description: "A quintessential English cottage with thatched roof, mullioned windows, and an English country garden bursting with roses. Log fire, Aga cooker, and the local pub a three-minute walk away.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=800&q=75" },
    price: 11000, location: "Bourton-on-the-Water", country: "United Kingdom", category: "Heritage Homes",
  },

  // ─── Desert Stays ───
  {
    title: "Luxury Desert Camp in Jaisalmer",
    description: "Glamping like a Mughal emperor in the golden Sam sand dunes. Swiss tents with four-poster beds, private butler, camel safari at sunset, traditional folk music under 10,000 stars.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=75" },
    price: 8900, location: "Sam Sand Dunes, Rajasthan", country: "India", category: "Desert Stays",
  },
  {
    title: "Moroccan Riad in the Sahara",
    description: "A beautifully hand-crafted riad at the edge of the Erg Chebbi dunes in Merzouga. Wake at 4am for the once-in-a-lifetime sunrise from atop a 150m dune, followed by mint tea on the roof.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=75" },
    price: 6200, location: "Merzouga", country: "Morocco", category: "Desert Stays",
  },
  {
    title: "Desert Eco-Dome in Pushkar",
    description: "A stunning geodesic dome nestled in the Aravalli foothills near sacred Pushkar lake. Open-air shower under the stars, organic meals from the kitchen garden, and yoga at sunrise.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=75" },
    price: 4100, location: "Pushkar, Rajasthan", country: "India", category: "Desert Stays",
  },

  // ─── Island Getaways ───
  {
    title: "Beachfront Cottage in Havelock Island",
    description: "Fall asleep to the sound of the Andaman Sea from a thatched cottage on Radhanagar Beach — rated Asia's best beach. Snorkelling, scuba diving, and jungle treks all on your doorstep.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=75" },
    price: 5500, location: "Havelock Island, Andaman", country: "India", category: "Island Getaways",
  },
  {
    title: "Private Island Lodge in Lakshadweep",
    description: "Your own corner of a coral atoll in the Indian Ocean. Crystal-clear lagoon, mangrove kayaking, and night snorkelling with bioluminescent plankton. Only 10 cottages — no cars, no stress.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=75" },
    price: 12000, location: "Agatti Island, Lakshadweep", country: "India", category: "Island Getaways",
  },

  // ─── Farm Stays ───
  {
    title: "Organic Farmhouse in Nashik Wine Country",
    description: "A sun-drenched farmhouse in the middle of Maharashtra's emerging wine belt. Morning grape-picking tours, vineyard cycle rides, farm-to-table dinners and weekend wine-tasting workshops.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=75" },
    price: 3800, location: "Nashik, Maharashtra", country: "India", category: "Farm Stays",
  },
  {
    title: "Spice Plantation Stay in Munnar",
    description: "Awaken your senses in a working cardamom and tea plantation in the High Ranges of Kerala. Guided spice walks, plantation cooking classes, misty valleys, and rare Nilgiri tahr sightings.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=75" },
    price: 3200, location: "Munnar, Kerala", country: "India", category: "Farm Stays",
  },
  {
    title: "Tuscan Farmhouse in Val d'Orcia",
    description: "A UNESCO-protected landscape of cypress lanes and golden wheat fields — your own slice of Italian paradise. Stone farmhouse, private terrace, wood-fired pizza oven, and truffle hunting on Sundays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=75" },
    price: 13500, location: "Pienza, Tuscany", country: "Italy", category: "Farm Stays",
  },

  // ─── Arctic & Snow ───
  {
    title: "Glass Igloo in Finnish Lapland",
    description: "Sleep under the dancing Northern Lights in a thermal-glass igloo in the Arctic wilderness. Reindeer sleigh rides, ice fishing, and a wood-fired sauna by the frozen lake. Pure winter magic.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=75" },
    price: 28000, location: "Saariselkä, Lapland", country: "Finland", category: "Arctic & Snow",
  },
];

module.exports = { data: sampleListings };
