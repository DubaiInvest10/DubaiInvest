export interface Property {
  id: string;
  title: string;
  location: string;
  area: string;
  price: number;
  pricePerSqm: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  type: "apartment" | "villa" | "penthouse" | "townhouse";
  status: "off-plan" | "ready" | "resale";
  developer: string;
  completionDate?: string;
  annualRent: number;
  roiPercent: number;
  serviceCharge: number;
  images: string[];
  amenities: string[];
  description: string;
  latitude: number;
  longitude: number;
}

export const AREAS = [
  "Dubai Marina",
  "Downtown Dubai",
  "Palm Jumeirah",
  "Business Bay",
  "JBR",
  "Dubai Hills",
  "Creek Harbour",
  "JVC",
  "Dubai South",
  "DIFC",
] as const;

export const PROPERTY_TYPES = [
  { label: "Tous", value: "all" },
  { label: "Appartement", value: "apartment" },
  { label: "Villa", value: "villa" },
  { label: "Penthouse", value: "penthouse" },
  { label: "Townhouse", value: "townhouse" },
] as const;

export const STATUS_TYPES = [
  { label: "Tous", value: "all" },
  { label: "Sur plan", value: "off-plan" },
  { label: "Prêt", value: "ready" },
  { label: "Revente", value: "resale" },
] as const;

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Marina Residence Tower",
    location: "Dubai Marina",
    area: "Dubai Marina",
    price: 1850000,
    pricePerSqm: 18500,
    size: 100,
    bedrooms: 2,
    bathrooms: 2,
    type: "apartment",
    status: "ready",
    developer: "Emaar Properties",
    annualRent: 120000,
    roiPercent: 6.5,
    serviceCharge: 15000,
    images: ["https://images.unsplash.com/photo-1582407947092-92430c1a4bdd?w=800", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"],
    amenities: ["Piscine", "Salle de sport", "Parking", "Sécurité 24/7", "Vue mer"],
    description: "Superbe appartement 2 chambres avec vue panoramique sur la marina. Finitions haut de gamme, cuisine équipée, balcon spacieux.",
    latitude: 25.0805,
    longitude: 55.1403,
  },
  {
    id: "2",
    title: "Burj Vista Penthouse",
    location: "Downtown Dubai",
    area: "Downtown Dubai",
    price: 8500000,
    pricePerSqm: 28333,
    size: 300,
    bedrooms: 4,
    bathrooms: 5,
    type: "penthouse",
    status: "ready",
    developer: "Emaar Properties",
    annualRent: 450000,
    roiPercent: 5.3,
    serviceCharge: 45000,
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"],
    amenities: ["Piscine privée", "Concierge", "Vue Burj Khalifa", "Terrasse", "Cave à vin"],
    description: "Penthouse d'exception face au Burj Khalifa. Matériaux nobles, plafonds hauts, terrasse panoramique avec piscine privée.",
    latitude: 25.1972,
    longitude: 55.2744,
  },
  {
    id: "3",
    title: "Palm Royal Villa",
    location: "Palm Jumeirah",
    area: "Palm Jumeirah",
    price: 15000000,
    pricePerSqm: 25000,
    size: 600,
    bedrooms: 6,
    bathrooms: 7,
    type: "villa",
    status: "resale",
    developer: "Nakheel",
    annualRent: 750000,
    roiPercent: 5.0,
    serviceCharge: 80000,
    images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
    amenities: ["Plage privée", "Piscine à débordement", "Jardin", "Garage 4 voitures", "Cinéma maison"],
    description: "Villa signature sur le frond de la Palm Jumeirah. Accès direct à la plage, jardins paysagers, finitions ultra-luxe.",
    latitude: 25.1124,
    longitude: 55.1390,
  },
  {
    id: "4",
    title: "Creek Tower Residence",
    location: "Creek Harbour",
    area: "Creek Harbour",
    price: 1200000,
    pricePerSqm: 15000,
    size: 80,
    bedrooms: 1,
    bathrooms: 1,
    type: "apartment",
    status: "off-plan",
    developer: "Emaar Properties",
    completionDate: "Q4 2026",
    annualRent: 85000,
    roiPercent: 7.1,
    serviceCharge: 10000,
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
    amenities: ["Vue Creek", "Piscine", "Salle de sport", "Co-working", "Commerces"],
    description: "Studio spacieux dans le nouveau quartier de Creek Harbour. Idéal pour investissement locatif avec fort rendement.",
    latitude: 25.1938,
    longitude: 55.3439,
  },
  {
    id: "5",
    title: "Business Bay Executive Suite",
    location: "Business Bay",
    area: "Business Bay",
    price: 2200000,
    pricePerSqm: 20000,
    size: 110,
    bedrooms: 2,
    bathrooms: 2,
    type: "apartment",
    status: "ready",
    developer: "Damac Properties",
    annualRent: 155000,
    roiPercent: 7.0,
    serviceCharge: 16000,
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"],
    amenities: ["Vue Canal", "Piscine", "Spa", "Parking", "Métro à proximité"],
    description: "Appartement moderne dans une tour iconique de Business Bay. Vue imprenable sur le canal et le Burj Khalifa en arrière-plan.",
    latitude: 25.1851,
    longitude: 55.2719,
  },
  {
    id: "6",
    title: "Dubai Hills Townhouse",
    location: "Dubai Hills",
    area: "Dubai Hills",
    price: 3500000,
    pricePerSqm: 17500,
    size: 200,
    bedrooms: 3,
    bathrooms: 3,
    type: "townhouse",
    status: "ready",
    developer: "Emaar Properties",
    annualRent: 200000,
    roiPercent: 5.7,
    serviceCharge: 25000,
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800", "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800"],
    amenities: ["Golf", "Parc", "École", "Commerces", "Club-house"],
    description: "Townhouse familial au coeur de Dubai Hills Estate. Proche du golf, des écoles internationales et du Dubai Hills Mall.",
    latitude: 25.1040,
    longitude: 55.2428,
  },
  {
    id: "7",
    title: "JVC Garden Apartment",
    location: "JVC",
    area: "JVC",
    price: 750000,
    pricePerSqm: 12500,
    size: 60,
    bedrooms: 1,
    bathrooms: 1,
    type: "apartment",
    status: "off-plan",
    developer: "Sobha Realty",
    completionDate: "Q2 2027",
    annualRent: 58000,
    roiPercent: 7.7,
    serviceCharge: 7000,
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"],
    amenities: ["Jardin", "Piscine", "Parking", "Aire de jeux", "Supermarché"],
    description: "Appartement abordable dans un quartier en plein développement. Rendement locatif parmi les plus élevés de Dubai.",
    latitude: 25.0657,
    longitude: 55.2117,
  },
  {
    id: "8",
    title: "DIFC Luxury Loft",
    location: "DIFC",
    area: "DIFC",
    price: 4200000,
    pricePerSqm: 30000,
    size: 140,
    bedrooms: 2,
    bathrooms: 3,
    type: "apartment",
    status: "resale",
    developer: "ICD Brookfield",
    annualRent: 280000,
    roiPercent: 6.7,
    serviceCharge: 22000,
    images: ["https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"],
    amenities: ["Restaurants gastronomiques", "Galeries d'art", "Concierge", "Spa", "Métro"],
    description: "Loft contemporain au coeur du centre financier de Dubai. Idéal pour cadres et professionnels recherchant un style de vie premium.",
    latitude: 25.2100,
    longitude: 55.2791,
  },
  {
    id: "9",
    title: "JBR Beachfront Suite",
    location: "JBR",
    area: "JBR",
    price: 2800000,
    pricePerSqm: 23333,
    size: 120,
    bedrooms: 2,
    bathrooms: 2,
    type: "apartment",
    status: "resale",
    developer: "Meraas",
    annualRent: 180000,
    roiPercent: 6.4,
    serviceCharge: 18000,
    images: ["https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"],
    amenities: ["Accès plage", "The Walk", "Restaurants", "Shopping", "Ain Dubai"],
    description: "Appartement les pieds dans l'eau à JBR. La Walk et la plage à votre porte. Location touristique très demandée.",
    latitude: 25.0778,
    longitude: 55.1337,
  },
  {
    id: "10",
    title: "Dubai South Smart Studio",
    location: "Dubai South",
    area: "Dubai South",
    price: 480000,
    pricePerSqm: 10666,
    size: 45,
    bedrooms: 0,
    bathrooms: 1,
    type: "apartment",
    status: "off-plan",
    developer: "Azizi Developments",
    completionDate: "Q1 2027",
    annualRent: 38000,
    roiPercent: 7.9,
    serviceCharge: 5000,
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"],
    amenities: ["Expo City", "Al Maktoum Airport", "Smart home", "Piscine", "Commerces"],
    description: "Studio intelligent dans le quartier d'avenir de Dubai South. Proximité du nouvel aéroport et d'Expo City. Prix d'entrée attractif.",
    latitude: 24.9500,
    longitude: 55.1700,
  },
];

export const MARKET_STATS = {
  avgRoi: 6.5,
  avgPricePerSqm: 18000,
  transactionsQ: 43200,
  marketGrowth: 12.4,
  totalVolume: 142,
};

export function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(1)}M AED`;
  }
  return `${(price / 1000).toFixed(0)}K AED`;
}

export function formatNumber(num: number): string {
  return num.toLocaleString("fr-FR");
}
