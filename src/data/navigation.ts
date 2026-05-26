// Datos temporales del nav. Cuando Strapi este listo, este archivo puede convertirse
// en el adaptador que normaliza la respuesta del backend para los componentes.
export const logoUrl =
	"/logo-machupicchu.svg";

// Links principales del nav. Cada key se conecta con las traducciones.
export const navLinks = [
	{ key: "journeys", href: "#journeys" },
	{ key: "expeditions", href: "#expeditions" },
	{ key: "philosophy", href: "#philosophy" },
	{ key: "journal", href: "#journal" },
] as const;

export type NavLinkKey = (typeof navLinks)[number]["key"];

export interface MegaMenuItem {
	title: string;
	href: string;
	duration: string;
	region: string;
	featured?: boolean;
}

export interface MegaMenuGroup {
	key: NavLinkKey;
	kicker: string;
	title: string;
	description: string;
	href: string;
	totalLabel: string;
	items: MegaMenuItem[];
}

// Datos temporales del mega menu. La forma ya esta pensada para reemplazarse por
// una respuesta normalizada de Strapi: category + metadata + collection items.
export const megaMenuGroups: MegaMenuGroup[] = [
	{
		key: "journeys",
		kicker: "Quick Andean Escapes",
		title: "Full Day",
		description:
			"Excursiones privadas de un dia para viajeros que quieren intensidad, contexto y un regreso comodo a Cusco.",
		href: "/full-day",
		totalLabel: "10 experiences",
		items: [
			{ title: "Sacred Valley Private Day", href: "/full-day/sacred-valley", duration: "1 Day", region: "Cusco" },
			{ title: "Rainbow Mountain Premium", href: "/full-day/rainbow-mountain", duration: "1 Day", region: "Ausangate", featured: true },
			{ title: "Humantay Lake Escape", href: "/full-day/humantay-lake", duration: "1 Day", region: "Salkantay" },
			{ title: "Maras, Moray & Salt Mines", href: "/full-day/maras-moray", duration: "1 Day", region: "Sacred Valley" },
			{ title: "Cusco City & Ruins", href: "/full-day/cusco-city", duration: "Half Day", region: "Cusco" },
			{ title: "South Valley Heritage", href: "/full-day/south-valley", duration: "1 Day", region: "Andahuaylillas" },
			{ title: "Pisac Market & Ruins", href: "/full-day/pisac", duration: "1 Day", region: "Sacred Valley" },
			{ title: "Qeswachaka Inca Bridge", href: "/full-day/qeswachaka", duration: "1 Day", region: "Canas" },
			{ title: "Palcoyo Rainbow Range", href: "/full-day/palcoyo", duration: "1 Day", region: "Canchis" },
			{ title: "Waqrapukara Fortress", href: "/full-day/waqrapukara", duration: "1 Day", region: "Acomayo" },
		],
	},
	{
		key: "expeditions",
		kicker: "Citadel Journeys",
		title: "Machu Picchu",
		description:
			"Rutas curadas hacia la ciudadela: trenes escenicos, noches seleccionadas y guias especialistas.",
		href: "/machu-picchu",
		totalLabel: "15 experiences",
		items: [
			{ title: "Machu Picchu Full Day by Train", href: "/machu-picchu/full-day-train", duration: "1 Day", region: "Aguas Calientes", featured: true },
			{ title: "Machu Picchu Overnight", href: "/machu-picchu/overnight", duration: "2 Days", region: "Aguas Calientes" },
			{ title: "Vistadome Observatory Journey", href: "/machu-picchu/vistadome", duration: "2 Days", region: "Sacred Valley" },
			{ title: "Hiram Bingham Luxury Escape", href: "/machu-picchu/hiram-bingham", duration: "2 Days", region: "Cusco" },
			{ title: "Sacred Valley to Machu Picchu", href: "/machu-picchu/sacred-valley", duration: "3 Days", region: "Urubamba" },
			{ title: "Machu Picchu + Huayna Picchu", href: "/machu-picchu/huayna-picchu", duration: "2 Days", region: "Citadel" },
			{ title: "Machu Picchu Mountain Route", href: "/machu-picchu/mountain", duration: "2 Days", region: "Citadel" },
			{ title: "Short Inca Trail to Machu Picchu", href: "/machu-picchu/short-inca-trail", duration: "2 Days", region: "Km 104" },
			{ title: "Machu Picchu Family Journey", href: "/machu-picchu/family", duration: "3 Days", region: "Sacred Valley" },
			{ title: "Machu Picchu Honeymoon", href: "/machu-picchu/honeymoon", duration: "3 Days", region: "Urubamba" },
			{ title: "Machu Picchu Photography Trip", href: "/machu-picchu/photography", duration: "2 Days", region: "Citadel" },
			{ title: "Machu Picchu Express", href: "/machu-picchu/express", duration: "1 Day", region: "Poroy" },
			{ title: "Machu Picchu + Maras Moray", href: "/machu-picchu/maras-moray", duration: "3 Days", region: "Sacred Valley" },
			{ title: "Machu Picchu Private Guide", href: "/machu-picchu/private-guide", duration: "1 Day", region: "Citadel" },
			{ title: "Machu Picchu Deluxe Lodge", href: "/machu-picchu/deluxe-lodge", duration: "3 Days", region: "Aguas Calientes" },
		],
	},
	{
		key: "philosophy",
		kicker: "Ancient Walking Routes",
		title: "Camino Inca",
		description:
			"Caminatas con logistica premium, campamentos cuidados y una lectura historica profunda del Qhapaq Nan.",
		href: "/camino-inca",
		totalLabel: "10 treks",
		items: [
			{ title: "Classic Inca Trail", href: "/camino-inca/classic", duration: "4 Days", region: "Km 82", featured: true },
			{ title: "Luxury Inca Trail Trek", href: "/camino-inca/luxury", duration: "5 Days", region: "Urubamba" },
			{ title: "Short Inca Trail", href: "/camino-inca/short", duration: "2 Days", region: "Km 104" },
			{ title: "Inca Trail Private Camp", href: "/camino-inca/private-camp", duration: "4 Days", region: "Wiñay Wayna" },
			{ title: "Salkantay to Machu Picchu", href: "/camino-inca/salkantay", duration: "5 Days", region: "Salkantay" },
			{ title: "Lares Cultural Trek", href: "/camino-inca/lares", duration: "4 Days", region: "Lares" },
			{ title: "Choquequirao Expedition", href: "/camino-inca/choquequirao", duration: "5 Days", region: "Apurimac" },
			{ title: "Ausangate High Andes", href: "/camino-inca/ausangate", duration: "5 Days", region: "Ausangate" },
			{ title: "Huchuy Qosqo Trek", href: "/camino-inca/huchuy-qosqo", duration: "2 Days", region: "Lamay" },
			{ title: "Inca Quarry Trail", href: "/camino-inca/quarry", duration: "4 Days", region: "Ollantaytambo" },
		],
	},
	{
		key: "journal",
		kicker: "Multi-Day Collections",
		title: "Paquetes",
		description:
			"Combinaciones completas para recorrer Peru por tema, ritmo y nivel de confort, listas para personalizar.",
		href: "/paquetes",
		totalLabel: "30 packages",
		items: [
			{ title: "Peru Essential Circuit", href: "/paquetes/peru-essential", duration: "7 Days", region: "Lima, Cusco", featured: true },
			{ title: "Cusco & Sacred Valley Deluxe", href: "/paquetes/cusco-sacred-valley", duration: "6 Days", region: "Cusco" },
			{ title: "Machu Picchu & Amazon", href: "/paquetes/machu-picchu-amazon", duration: "9 Days", region: "Cusco, Tambopata" },
			{ title: "Andean Wellness Journey", href: "/paquetes/andean-wellness", duration: "7 Days", region: "Sacred Valley" },
			{ title: "Peru Honeymoon Escape", href: "/paquetes/honeymoon", duration: "10 Days", region: "Lima, Cusco, Paracas" },
			{ title: "Family Peru Adventure", href: "/paquetes/family-adventure", duration: "8 Days", region: "Cusco, Valley" },
			{ title: "Luxury Peru by Train", href: "/paquetes/luxury-train", duration: "9 Days", region: "Cusco, Puno" },
			{ title: "Culinary Peru", href: "/paquetes/culinary-peru", duration: "8 Days", region: "Lima, Cusco" },
			{ title: "South Peru Highlights", href: "/paquetes/south-peru", duration: "11 Days", region: "Paracas, Arequipa" },
			{ title: "Inca Heritage Route", href: "/paquetes/inca-heritage", duration: "8 Days", region: "Cusco" },
			{ title: "Amazon & Andes Immersion", href: "/paquetes/amazon-andes", duration: "10 Days", region: "Tambopata, Cusco" },
			{ title: "Peru Photography Route", href: "/paquetes/photography", duration: "9 Days", region: "Lima, Andes" },
			{ title: "Sacred Valley Slow Travel", href: "/paquetes/slow-travel", duration: "6 Days", region: "Urubamba" },
			{ title: "Peru Boutique Hotels", href: "/paquetes/boutique-hotels", duration: "8 Days", region: "Lima, Cusco" },
			{ title: "Machu Picchu Explorer", href: "/paquetes/machu-picchu-explorer", duration: "5 Days", region: "Cusco" },
			{ title: "Arequipa & Colca Canyon", href: "/paquetes/arequipa-colca", duration: "5 Days", region: "Arequipa" },
			{ title: "Lake Titicaca Private", href: "/paquetes/titicaca", duration: "4 Days", region: "Puno" },
			{ title: "Nazca & Paracas Escape", href: "/paquetes/nazca-paracas", duration: "4 Days", region: "Ica" },
			{ title: "Peru Grand Tour", href: "/paquetes/grand-tour", duration: "14 Days", region: "Peru" },
			{ title: "Cusco Weekend Premium", href: "/paquetes/cusco-weekend", duration: "4 Days", region: "Cusco" },
			{ title: "Andean Textile Route", href: "/paquetes/textile-route", duration: "6 Days", region: "Sacred Valley" },
			{ title: "Peru Archaeology Deep Dive", href: "/paquetes/archaeology", duration: "12 Days", region: "North & South" },
			{ title: "Northern Peru Kingdoms", href: "/paquetes/northern-kingdoms", duration: "9 Days", region: "Trujillo, Chiclayo" },
			{ title: "Peru for First Timers", href: "/paquetes/first-timers", duration: "8 Days", region: "Lima, Cusco" },
			{ title: "Luxury Lodge to Lodge", href: "/paquetes/lodge-to-lodge", duration: "7 Days", region: "Salkantay" },
			{ title: "Private Peru Sabbatical", href: "/paquetes/sabbatical", duration: "21 Days", region: "Peru" },
			{ title: "Peru Adventure Mix", href: "/paquetes/adventure-mix", duration: "10 Days", region: "Cusco, Amazon" },
			{ title: "Andean Spiritual Retreat", href: "/paquetes/spiritual-retreat", duration: "6 Days", region: "Sacred Valley" },
			{ title: "Peru Premium Express", href: "/paquetes/premium-express", duration: "6 Days", region: "Lima, Cusco" },
			{ title: "Peru Complete Private", href: "/paquetes/complete-private", duration: "16 Days", region: "Peru" },
		],
	},
] as const;

// Idiomas soportados por el sitio.
export const navLanguages = [
	{ code: "es", label: "ES" },
	{ code: "en", label: "EN" },
	{ code: "pt", label: "PT" },
] as const;

// Diccionario minimo del nav. Luego puede venir desde Strapi por locale.
export const navTranslations = {
	es: {
		journeys: "Full Day",
		expeditions: "Machu Picchu",
		philosophy: "Camino Inca",
		journal: "Paquetes",
		book: "Contacto",
		viewAll: "Ver todos",
		viewMore: "Ver más",
		featuredRoutes: "Rutas destacadas",
	},
	en: {
		journeys: "Full Day",
		expeditions: "Machu Picchu",
		philosophy: "Inca Trail",
		journal: "Packages",
		book: "Contact",
		viewAll: "View all",
		viewMore: "View more",
		featuredRoutes: "Featured routes",
	},
	pt: {
		journeys: "Full Day",
		expeditions: "Machu Picchu",
		philosophy: "Trilha Inca",
		journal: "Pacotes",
		book: "Contato",
		viewAll: "Ver todos",
		viewMore: "Ver mais",
		featuredRoutes: "Rutas recomendadas",
	},
} as const;
