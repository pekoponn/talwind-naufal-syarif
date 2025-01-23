export interface TouristDestination {
    id: number;
    name: string;
    country: string;
    description: string;
    rating: number;
    annualVisitors: number;
    imageUrl: string;
  }
  
  export const tourismData: TouristDestination[] = [
    {
      id: 1,
      name: "Eiffel Tower",
      country: "France",
      description: "Iconic iron lattice tower on the Champ de Mars in Paris.",
      rating: 4.6,
      annualVisitors: 7000000,
      imageUrl: require("../assets/images/tourism/eifel.jpg"),
    },
    {
      id: 2,
      name: "Machu Picchu",
      country: "Peru",
      description: "Ancient Incan city set high in the Andes Mountains.",
      rating: 4.8,
      annualVisitors: 1500000,
      imageUrl: require("../assets/images/tourism/machu-picchu.jpg"),
    },
    {
      id: 3,
      name: "Great Wall of China",
      country: "China",
      description:
        "Series of fortifications and walls built across the historical northern borders of ancient Chinese states.",
      rating: 4.7,
      annualVisitors: 10000000,
      imageUrl: require("../assets/images/tourism/great-wall-of-china.jpg"),
    },
    {
      id: 4,
      name: "Taj Mahal",
      country: "India",
      description:
        "Ivory-white marble mausoleum on the right bank of the river Yamuna in Agra.",
      rating: 4.7,
      annualVisitors: 8000000,
      imageUrl: require("../assets/images/tourism/taj-mahal.jpg"),
    },
    {
      id: 5,
      name: "Santorini",
      country: "Greece",
      description:
        "Beautiful island known for its stunning sunsets, white-washed buildings, and blue-domed churches.",
      rating: 4.9,
      annualVisitors: 2000000,
      imageUrl: require("../assets/images/tourism/santorini.jpg"),
    },
    {
      id: 6,
      name: "Grand Canyon",
      country: "United States",
      description: "Steep-sided canyon carved by the Colorado River in Arizona.",
      rating: 4.8,
      annualVisitors: 6000000,
      imageUrl: require("../assets/images/tourism/grand-canyon.jpg"),
    },
    {
      id: 7,
      name: "Petra",
      country: "Jordan",
      description:
        "Famous archaeological site containing rock-cut architecture and water conduit system.",
      rating: 4.8,
      annualVisitors: 1000000,
      imageUrl: require("../assets/images/tourism/petra.jpg"),
    },
    {
      id: 8,
      name: "Bali",
      country: "Indonesia",
      description:
        "Beautiful island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
      rating: 4.6,
      annualVisitors: 6000000,
      imageUrl: require("../assets/images/tourism/bali.jpg"),
    },
    {
      id: 9,
      name: "Colosseum",
      country: "Italy",
      description:
        "Oval amphitheatre in the centre of Rome, the largest ancient amphitheatre ever built.",
      rating: 4.7,
      annualVisitors: 7600000,
      imageUrl: require("../assets/images/tourism/colosseum.jpg"),
    },
    {
      id: 10,
      name: "Angkor Wat",
      country: "Cambodia",
      description:
        "Huge Buddhist temple complex surrounded by a moat and concentric walls.",
      rating: 4.8,
      annualVisitors: 2200000,
      imageUrl: require("../assets/images/tourism/angkor-wat.jpg"),
    },
  ];