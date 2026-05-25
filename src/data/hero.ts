// Traducciones del Hero para los 3 idiomas del sitio.
// Cuando Strapi esté listo, estos datos pueden venir desde el backend por locale.

export interface HeroTranslations {
	eyebrow: string;
	titleMain: string;
	titleSub: string;
	subtitle: string;
	reviewsText: string;
	reviewsUrl: string;
	searchPlaceholder: string;
	searchDestination: string;
	stats: {
		travelers: { value: string; label: string; description: string };
		years: { value: string; label: string; description: string };
		satisfaction: { value: string; label: string; description: string };
	};
	statsHeader: string;
}

export const heroTranslations: Record<string, HeroTranslations> = {
	es: {
		eyebrow: "Machu Picchu Travel",
		titleMain: "Tours y Paquetes a Machu Picchu 2026 - 2027",
		titleSub: "Agencia de Viajes en Perú — Entradas Garantizadas",
		subtitle:
			"Operador Local en Cusco desde 2003. +100k viajeros satisfechos.",
		reviewsText: "Ver miles de opiniones en YouTube",
		reviewsUrl: "https://www.youtube.com/machupicchutravel/videos",
		searchPlaceholder: "¿A dónde quieres ir? (ej. Machu Picchu, Valle Sagrado)",
		searchDestination: "Destino",
		stats: {
			travelers: {
				value: "100k+",
				label: "Viajeros Satisfechos",
				description: "Más de 100 mil viajeros han confiado en nosotros desde el 2003.",
			},
			years: {
				value: "23+",
				label: "Años de Experiencia",
				description: "Más de 23 años creando experiencias inolvidables en Perú.",
			},
			satisfaction: {
				value: "4.9",
				label: "Satisfacción",
				description: "Calificado como la mejor agencia de viajes de Sudamérica.",
			},
		},
		statsHeader: "Paquetes turísticos a Perú todo incluido: vuelos, hoteles, guías, trenes, entradas, traslados y más.",
	},
	en: {
		eyebrow: "Machu Picchu Travel",
		titleMain: "Machu Picchu Tours & Packages 2026 - 2027",
		titleSub: "Travel Agency in Peru — Guaranteed Entry Tickets",
		subtitle:
			"Local Operator in Cusco since 2003. 100k+ happy travelers.",
		reviewsText: "See thousands of reviews on YouTube",
		reviewsUrl: "https://www.youtube.com/machupicchutravel/videos",
		searchPlaceholder: "Where do you seek? (e.g. Machu Picchu, Sacred Valley)",
		searchDestination: "Destination",
		stats: {
			travelers: {
				value: "100k+",
				label: "Happy Travelers",
				description: "Over 100,000 travelers have trusted us since 2003.",
			},
			years: {
				value: "23+",
				label: "Years of Experience",
				description: "Over 23 years crafting unforgettable experiences in Peru.",
			},
			satisfaction: {
				value: "4.9",
				label: "Guest Satisfaction",
				description: "Consistently rated as South America's premier travel agency.",
			},
		},
		statsHeader: "All-inclusive Peru travel packages: flights, hotels, guides, trains, tickets, transfers and more.",
	},
	pt: {
		eyebrow: "Machu Picchu Travel",
		titleMain: "Tours e Pacotes para Machu Picchu 2026 - 2027",
		titleSub: "Agência de Viagens no Peru — Ingressos Garantidos",
		subtitle:
			"Operador Local em Cusco desde 2003. +100k viajantes satisfeitos.",
		reviewsText: "Veja milhares de opiniões no YouTube",
		reviewsUrl: "https://www.youtube.com/machupicchutravel/videos",
		searchPlaceholder: "Onde você procura? (ex. Machu Picchu, Vale Sagrado)",
		searchDestination: "Destino",
		stats: {
			travelers: {
				value: "100k+",
				label: "Viajantes Satisfeitos",
				description: "Mais de 100 mil viajantes confiaram em nós desde 2003.",
			},
			years: {
				value: "23+",
				label: "Anos de Experiência",
				description: "Mais de 23 anos criando experiências inesquecíveis no Peru.",
			},
			satisfaction: {
				value: "4.9",
				label: "Satisfação",
				description: "Classificado como a melhor agência de viagens da América do Sul.",
			},
		},
		statsHeader: "Pacotes turísticos para Peru tudo incluído: voos, hotéis, guias, trens, ingressos, traslados e mais.",
	},
};
