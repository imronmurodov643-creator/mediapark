export type Lang = "en" | "ru" | "uz";

export const translations: Record<string, Record<Lang, string>> = {
  // Nav
  home: { en: "Home", ru: "Главная", uz: "Bosh sahifa" },
  countries: { en: "Countries", ru: "Страны", uz: "Davlatlar" },
  booking: { en: "Booking", ru: "Бронирование", uz: "Buyurtma" },
  login: { en: "Login", ru: "Войти", uz: "Kirish" },
  register: { en: "Register", ru: "Регистрация", uz: "Ro'yxatdan o'tish" },
  profile: { en: "Profile", ru: "Профиль", uz: "Profil" },
  admin: { en: "Admin", ru: "Админ", uz: "Admin" },
  logout: { en: "Logout", ru: "Выйти", uz: "Chiqish" },

  // Hero
  heroTitle: { en: "Explore The", ru: "Исследуй", uz: "Dunyoni" },
  heroTitleHighlight: { en: "Cyber World", ru: "Кибер Мир", uz: "Kashf Et" },
  heroSubtitle: {
    en: "Discover extraordinary destinations with our AI-powered travel platform. Premium experiences, unreal prices.",
    ru: "Откройте необычные направления с нашей ИИ-платформой. Премиум впечатления, нереальные цены.",
    uz: "Sun'iy intellekt sayohat platformamiz bilan ajoyib yo'nalishlarni kashf eting. Premium tajribalar, arzon narxlar.",
  },
  exploreNow: { en: "Explore Now", ru: "Начать", uz: "Boshlash" },
  aiRecommend: { en: "AI Recommend", ru: "ИИ Совет", uz: "AI Tavsiya" },

  // Countries page
  searchPlaceholder: { en: "Search destinations...", ru: "Поиск направлений...", uz: "Yo'nalishlarni qidirish..." },
  allCountries: { en: "All Countries", ru: "Все страны", uz: "Barcha davlatlar" },
  filterByPrice: { en: "Price", ru: "Цена", uz: "Narx" },
  filterByPopularity: { en: "Popularity", ru: "Популярность", uz: "Mashhurlik" },
  from: { en: "From", ru: "От", uz: "Dan" },
  perPerson: { en: "/person", ru: "/чел.", uz: "/kishi" },
  viewDetails: { en: "View Details", ru: "Подробнее", uz: "Batafsil" },

  // Country Details
  overview: { en: "Overview", ru: "Обзор", uz: "Umumiy" },
  packages: { en: "Packages", ru: "Пакеты", uz: "Paketlar" },
  hotels: { en: "Hotels", ru: "Отели", uz: "Mehmonxonalar" },
  weather: { en: "Weather", ru: "Погода", uz: "Ob-havo" },
  gallery: { en: "Gallery", ru: "Галерея", uz: "Galereya" },
  bookNow: { en: "Book Now", ru: "Забронировать", uz: "Buyurtma berish" },
  addToFavorites: { en: "Add to Favorites", ru: "В избранное", uz: "Saralanganlarga qo'shish" },
  removeFromFavorites: { en: "Remove from Favorites", ru: "Убрать из избранного", uz: "Saralanganlardan olib tashlash" },
  economy: { en: "Economy", ru: "Эконом", uz: "Ekonom" },
  business: { en: "Business", ru: "Бизнес", uz: "Biznes" },
  vip: { en: "VIP", ru: "VIP", uz: "VIP" },
  flightPrice: { en: "Flight Price", ru: "Цена перелёта", uz: "Parvoz narxi" },
  perNight: { en: "/night", ru: "/ночь", uz: "/kecha" },
  temperature: { en: "Temperature", ru: "Температура", uz: "Harorat" },
  humidity: { en: "Humidity", ru: "Влажность", uz: "Namlik" },
  condition: { en: "Condition", ru: "Состояние", uz: "Holat" },

  // Booking
  bookingTitle: { en: "Complete Your Booking", ru: "Завершите бронирование", uz: "Buyurtmangizni yakunlang" },
  fullName: { en: "Full Name", ru: "Полное имя", uz: "To'liq ism" },
  email: { en: "Email", ru: "Электронная почта", uz: "Elektron pochta" },
  phone: { en: "Phone", ru: "Телефон", uz: "Telefon" },
  travelers: { en: "Travelers", ru: "Путешественники", uz: "Sayohatchilar" },
  travelDate: { en: "Travel Date", ru: "Дата поездки", uz: "Sayohat sanasi" },
  payNow: { en: "Pay Now", ru: "Оплатить", uz: "To'lash" },
  cardNumber: { en: "Card Number", ru: "Номер карты", uz: "Karta raqami" },
  expiry: { en: "Expiry", ru: "Срок", uz: "Muddat" },
  cvv: { en: "CVV", ru: "CVV", uz: "CVV" },
  paymentSuccess: { en: "Payment Successful!", ru: "Оплата прошла успешно!", uz: "To'lov muvaffaqiyatli!" },

  // Profile
  myProfile: { en: "My Profile", ru: "Мой профиль", uz: "Mening profilim" },
  bookingHistory: { en: "Booking History", ru: "История бронирований", uz: "Buyurtmalar tarixi" },
  favorites: { en: "Favorites", ru: "Избранное", uz: "Saralanganlar" },
  settings: { en: "Settings", ru: "Настройки", uz: "Sozlamalar" },

  // Admin
  adminPanel: { en: "Admin Panel", ru: "Панель администратора", uz: "Admin paneli" },
  manageCountries: { en: "Manage Countries", ru: "Управление странами", uz: "Davlatlarni boshqarish" },
  statistics: { en: "Statistics", ru: "Статистика", uz: "Statistika" },
  totalBookings: { en: "Total Bookings", ru: "Всего бронирований", uz: "Jami buyurtmalar" },
  revenue: { en: "Revenue", ru: "Доход", uz: "Daromad" },
  users: { en: "Users", ru: "Пользователи", uz: "Foydalanuvchilar" },

  // 404
  pageNotFound: { en: "Page Not Found", ru: "Страница не найдена", uz: "Sahifa topilmadi" },
  lostInSpace: { en: "Lost in cyberspace", ru: "Потерялись в киберпространстве", uz: "Kiberfazoda yo'qoldingiz" },
  goHome: { en: "Go Home", ru: "На главную", uz: "Bosh sahifaga" },

  // General
  loading: { en: "Loading...", ru: "Загрузка...", uz: "Yuklanmoqda..." },
  notifications: { en: "Notifications", ru: "Уведомления", uz: "Bildirishnomalar" },
};
