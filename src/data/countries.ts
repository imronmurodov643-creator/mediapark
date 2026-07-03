export interface TravelPackage {
  type: "economy" | "business" | "vip";
  price: number;
  features: string[];
}

export interface Hotel {
  name: string;
  stars: number;
  pricePerNight: number;
  image: string;
}

export interface Country {
  id: string;
  name: Record<string, string>;
  capital: Record<string, string>;
  description: Record<string, string>;
  image: string;
  gallery: string[];
  continent: string;
  weather: { temp: number; condition: string; humidity: number };
  population: string;
  currency: string;
  language: string;
  rating: number;
  popularity: number;
  packages: TravelPackage[];
  hotels: Hotel[];
  flightPrice: number;
  tags: string[];
}

export const countries: Country[] = [
  {
    id: "japan",
    name: { en: "Japan", ru: "Япония", uz: "Yaponiya" },
    capital: { en: "Tokyo", ru: "Токио", uz: "Tokio" },
    description: {
      en: "Experience the perfect blend of ancient traditions and cutting-edge technology in the Land of the Rising Sun.",
      ru: "Испытайте идеальное сочетание древних традиций и передовых технологий в Стране восходящего солнца.",
      uz: "Quyosh chiqar mamlakatida qadimiy an'analar va zamonaviy texnologiyalarning mukammal uyg'unligini his qiling.",
    },
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f8?w=800&q=80",
    ],
    continent: "Asia",
    weather: { temp: 22, condition: "Sunny", humidity: 60 },
    population: "125.8M",
    currency: "JPY",
    language: "Japanese",
    rating: 4.9,
    popularity: 98,
    packages: [
      { type: "economy", price: 1200, features: ["Flight", "3★ Hotel", "City Tour"] },
      { type: "business", price: 2800, features: ["Flight", "4★ Hotel", "City Tour", "Rail Pass", "Guide"] },
      { type: "vip", price: 5500, features: ["First Class Flight", "5★ Hotel", "Private Tour", "Rail Pass", "Personal Guide", "Spa"] },
    ],
    hotels: [
      { name: "Tokyo Cyber Hotel", stars: 5, pricePerNight: 350, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
      { name: "Sakura Inn", stars: 3, pricePerNight: 120, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80" },
    ],
    flightPrice: 850,
    tags: ["culture", "technology", "food"],
  },
  {
    id: "france",
    name: { en: "France", ru: "Франция", uz: "Fransiya" },
    capital: { en: "Paris", ru: "Париж", uz: "Parij" },
    description: {
      en: "Discover the romance, art, and cuisine of France — from the Eiffel Tower to the lavender fields of Provence.",
      ru: "Откройте для себя романтику, искусство и кухню Франции — от Эйфелевой башни до лавандовых полей Прованса.",
      uz: "Fransiyaning romantikasi, san'ati va oshxonasini kashf eting — Eyfel minorasidan Provans lavanda dalalarigacha.",
    },
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80",
    ],
    continent: "Europe",
    weather: { temp: 18, condition: "Partly Cloudy", humidity: 55 },
    population: "67.4M",
    currency: "EUR",
    language: "French",
    rating: 4.8,
    popularity: 95,
    packages: [
      { type: "economy", price: 900, features: ["Flight", "3★ Hotel", "City Tour"] },
      { type: "business", price: 2200, features: ["Flight", "4★ Hotel", "City Tour", "Museum Pass", "Guide"] },
      { type: "vip", price: 4800, features: ["First Class Flight", "5★ Hotel", "Private Tour", "Michelin Dinner", "Personal Guide"] },
    ],
    hotels: [
      { name: "Le Cyber Parisien", stars: 5, pricePerNight: 420, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80" },
      { name: "Hotel Lumière", stars: 4, pricePerNight: 200, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80" },
    ],
    flightPrice: 650,
    tags: ["romance", "art", "food"],
  },
  {
    id: "usa",
    name: { en: "United States", ru: "США", uz: "AQSH" },
    capital: { en: "Washington D.C.", ru: "Вашингтон", uz: "Vashington" },
    description: {
      en: "From the neon lights of Las Vegas to the skyscrapers of New York — explore the land of limitless possibilities.",
      ru: "От неоновых огней Лас-Вегаса до небоскрёбов Нью-Йорка — исследуйте страну безграничных возможностей.",
      uz: "Las-Vegasning neon chiroqlaridan Nyu-Yorkning osmono'par binolarigacha — cheksiz imkoniyatlar mamlakatini kashf eting.",
    },
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    ],
    continent: "North America",
    weather: { temp: 25, condition: "Clear", humidity: 45 },
    population: "331.9M",
    currency: "USD",
    language: "English",
    rating: 4.7,
    popularity: 92,
    packages: [
      { type: "economy", price: 1100, features: ["Flight", "3★ Hotel", "City Tour"] },
      { type: "business", price: 2600, features: ["Flight", "4★ Hotel", "City Tour", "Theme Park", "Guide"] },
      { type: "vip", price: 5200, features: ["First Class Flight", "5★ Hotel", "Private Tour", "VIP Events", "Personal Guide"] },
    ],
    hotels: [
      { name: "Neon Heights NYC", stars: 5, pricePerNight: 380, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80" },
      { name: "Downtown Suites", stars: 4, pricePerNight: 180, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80" },
    ],
    flightPrice: 750,
    tags: ["adventure", "entertainment", "nature"],
  },
  {
    id: "turkey",
    name: { en: "Turkey", ru: "Турция", uz: "Turkiya" },
    capital: { en: "Ankara", ru: "Анкара", uz: "Anqara" },
    description: {
      en: "Where East meets West — explore stunning mosques, vibrant bazaars, and pristine Mediterranean coastlines.",
      ru: "Где Восток встречается с Западом — исследуйте великолепные мечети, яркие базары и чистейшие средиземноморские побережья.",
      uz: "Sharq G'arb bilan uchrashgan joy — ajoyib masjidlar, rang-barang bozorlar va toza O'rta er dengizi sohillarini kashf eting.",
    },
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
      "https://images.unsplash.com/photo-1589561454226-796a8c0e5029?w=800&q=80",
    ],
    continent: "Europe",
    weather: { temp: 28, condition: "Sunny", humidity: 40 },
    population: "84.3M",
    currency: "TRY",
    language: "Turkish",
    rating: 4.6,
    popularity: 88,
    packages: [
      { type: "economy", price: 600, features: ["Flight", "3★ Hotel", "City Tour"] },
      { type: "business", price: 1500, features: ["Flight", "4★ Hotel", "City Tour", "Bosphorus Cruise", "Guide"] },
      { type: "vip", price: 3200, features: ["First Class Flight", "5★ Hotel", "Private Tour", "Hot Air Balloon", "Personal Guide"] },
    ],
    hotels: [
      { name: "Bosphorus Palace", stars: 5, pricePerNight: 280, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
      { name: "Antalya Beach Resort", stars: 4, pricePerNight: 140, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80" },
    ],
    flightPrice: 400,
    tags: ["beach", "culture", "food"],
  },
  {
    id: "dubai",
    name: { en: "UAE (Dubai)", ru: "ОАЭ (Дубай)", uz: "BAA (Dubai)" },
    capital: { en: "Abu Dhabi", ru: "Абу-Даби", uz: "Abu-Dabi" },
    description: {
      en: "Experience luxury beyond imagination in the futuristic city of Dubai — skyscrapers, gold souks, and desert adventures.",
      ru: "Испытайте роскошь за пределами воображения в футуристическом городе Дубай — небоскрёбы, золотые рынки и пустынные приключения.",
      uz: "Dubayning kelajak shahridagi tasavvurdan tashqari hashamatni his qiling — osmono'par binolar, oltin bozorlar va cho'l sarguzashtlari.",
    },
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
    ],
    continent: "Asia",
    weather: { temp: 38, condition: "Sunny", humidity: 30 },
    population: "9.9M",
    currency: "AED",
    language: "Arabic",
    rating: 4.8,
    popularity: 94,
    packages: [
      { type: "economy", price: 800, features: ["Flight", "3★ Hotel", "City Tour"] },
      { type: "business", price: 2000, features: ["Flight", "4★ Hotel", "Desert Safari", "City Tour", "Guide"] },
      { type: "vip", price: 4500, features: ["First Class Flight", "7★ Hotel", "Private Yacht", "Desert Safari", "Personal Guide", "Spa"] },
    ],
    hotels: [
      { name: "Burj Luxe Tower", stars: 5, pricePerNight: 500, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80" },
      { name: "Marina Suites", stars: 4, pricePerNight: 220, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80" },
    ],
    flightPrice: 550,
    tags: ["luxury", "adventure", "shopping"],
  },
  {
    id: "italy",
    name: { en: "Italy", ru: "Италия", uz: "Italiya" },
    capital: { en: "Rome", ru: "Рим", uz: "Rim" },
    description: {
      en: "La dolce vita awaits — ancient ruins, Renaissance art, world-class cuisine, and breathtaking coastal scenery.",
      ru: "Сладкая жизнь ждёт — древние руины, искусство Возрождения, кухня мирового класса и захватывающие побережья.",
      uz: "Shirin hayot kutmoqda — qadimiy xarobalar, Uyg'onish davri san'ati, jahon darajasidagi taomlar va nafas uzadigan sohil manzaralari.",
    },
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
      "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800&q=80",
    ],
    continent: "Europe",
    weather: { temp: 24, condition: "Sunny", humidity: 50 },
    population: "60.4M",
    currency: "EUR",
    language: "Italian",
    rating: 4.8,
    popularity: 93,
    packages: [
      { type: "economy", price: 850, features: ["Flight", "3★ Hotel", "City Tour"] },
      { type: "business", price: 2100, features: ["Flight", "4★ Hotel", "City Tour", "Museum Pass", "Guide"] },
      { type: "vip", price: 4600, features: ["First Class Flight", "5★ Hotel", "Private Tour", "Wine Tasting", "Personal Guide"] },
    ],
    hotels: [
      { name: "Roma Imperiale", stars: 5, pricePerNight: 380, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
      { name: "Venice Canal Hotel", stars: 4, pricePerNight: 190, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80" },
    ],
    flightPrice: 600,
    tags: ["art", "food", "romance"],
  },
  {
    id: "maldives",
    name: { en: "Maldives", ru: "Мальдивы", uz: "Maldiv orollari" },
    capital: { en: "Malé", ru: "Мале", uz: "Male" },
    description: {
      en: "Paradise on Earth — crystal clear waters, overwater villas, and the most stunning sunsets you'll ever witness.",
      ru: "Рай на Земле — кристально чистые воды, виллы над водой и самые потрясающие закаты, которые вы когда-либо видели.",
      uz: "Yerdagi jannat — billurdek toza suvlar, suv ustidagi villalar va siz ko'rgan eng ajoyib quyosh botishlari.",
    },
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80",
    ],
    continent: "Asia",
    weather: { temp: 30, condition: "Tropical", humidity: 75 },
    population: "0.5M",
    currency: "MVR",
    language: "Dhivehi",
    rating: 4.9,
    popularity: 96,
    packages: [
      { type: "economy", price: 1500, features: ["Flight", "Beach Hotel", "Snorkeling"] },
      { type: "business", price: 3500, features: ["Flight", "Water Villa", "Diving", "Spa", "Guide"] },
      { type: "vip", price: 7000, features: ["First Class Flight", "Private Island", "Yacht", "Diving", "Personal Chef", "Butler"] },
    ],
    hotels: [
      { name: "Azure Overwater Villa", stars: 5, pricePerNight: 600, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80" },
      { name: "Coral Beach Resort", stars: 4, pricePerNight: 250, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80" },
    ],
    flightPrice: 950,
    tags: ["beach", "luxury", "romantic"],
  },
  {
    id: "brazil",
    name: { en: "Brazil", ru: "Бразилия", uz: "Braziliya" },
    capital: { en: "Brasília", ru: "Бразилиа", uz: "Braziliya" },
    description: {
      en: "Feel the rhythm of samba, explore the Amazon rainforest, and soak in the energy of Rio de Janeiro's iconic beaches.",
      ru: "Почувствуйте ритм самбы, исследуйте тропические леса Амазонки и окунитесь в энергию культовых пляжей Рио-де-Жанейро.",
      uz: "Samba ritmini his qiling, Amazonka yomg'ir o'rmonlarini kashf eting va Rio-de-Janeyro ajoyib plyajlari energiyasiga cho'ming.",
    },
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&q=80",
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=800&q=80",
    ],
    continent: "South America",
    weather: { temp: 28, condition: "Tropical", humidity: 70 },
    population: "213.4M",
    currency: "BRL",
    language: "Portuguese",
    rating: 4.5,
    popularity: 85,
    packages: [
      { type: "economy", price: 950, features: ["Flight", "3★ Hotel", "City Tour"] },
      { type: "business", price: 2300, features: ["Flight", "4★ Hotel", "Amazon Tour", "City Tour", "Guide"] },
      { type: "vip", price: 4800, features: ["First Class Flight", "5★ Hotel", "Private Tour", "Carnival VIP", "Personal Guide"] },
    ],
    hotels: [
      { name: "Copacabana Palace", stars: 5, pricePerNight: 320, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
      { name: "Amazon Lodge", stars: 3, pricePerNight: 100, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80" },
    ],
    flightPrice: 900,
    tags: ["beach", "nature", "culture"],
  },
];
