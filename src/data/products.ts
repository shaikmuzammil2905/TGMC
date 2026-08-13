export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'Water Softener' | 'Sand Filter' | 'Carbon Filter' | 'Iron Filter' | 'RO Purifier' | 'Heat Pump' | 'Commercial RO' | 'Water Level Controller';
  image: string;
  shortDesc: string;
  fullDesc: string;
  isHeroFeatured?: boolean;
  numberTag?: number;
  capacities?: string[];
  features?: string[];
  applications?: string[];
  isAuthorisedDistributor?: boolean;
  price?: string;
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  isAuthorised?: boolean;
  description: string;
  categories: string[];
  logoText: string;
}

export const BRANDS: Brand[] = [
  {
    id: 'zero-b',
    name: 'ZERO B',
    tagline: 'Pure Water Solutions | Ion Exchange',
    isAuthorised: true,
    description: 'Pioneers in automatic water softening, advanced filtration, drinking RO purifiers, commercial RO plants, and eco-friendly heat pumps.',
    categories: ['Water Softener', 'Sand Filter', 'Carbon Filter', 'Iron Filter', 'RO Purifier', 'Heat Pump', 'Commercial RO'],
    logoText: 'ZERO B'
  }
];

export const PRODUCTS: Product[] = [
  // --- ZERO B FEATURED PRODUCTS (Numbered 1..7 matching UI & catalog) ---
  {
    id: 'zb-softener',
    slug: 'automatic-water-softener',
    name: 'AUTOMATIC WATER SOFTENER',
    brand: 'ZERO B',
    category: 'Water Softener',
    image: '/products/zero-b-automatic-water-softener.png',
    numberTag: 1,
    isHeroFeatured: true,
    shortDesc: 'Automatic hard water softening system designed to protect plumbing fixtures, skin, and appliances.',
    fullDesc: 'The Zero B Automatic Water Softener uses ion-exchange resin technology to eliminate scale-forming calcium and magnesium ions. Features fully automated regeneration valves for hassle-free maintenance.',
    features: [
      'Automatic digital control valve for timed regeneration',
      'High-capacity resin bed for maximum hard water removal',
      'Compact cabinet design with corrosion-free body',
      'Protects geysers, washing machines, and bath fittings'
    ],
    applications: ['Independent Houses', 'Apartments', 'Villas', 'Commercial Laundries']
  },
  {
    id: 'zb-sand-filter',
    slug: 'automatic-sand-filter',
    name: 'AUTOMATIC SAND FILTER',
    brand: 'ZERO B',
    category: 'Sand Filter',
    image: '/products/zero-b-automatic-sand-filter.png',
    numberTag: 2,
    isHeroFeatured: true,
    shortDesc: 'Automated multi-grade sand media filtration vessel for suspended solids and turbidity removal.',
    fullDesc: 'Zero B Auto Sand Filter removes visible dirt, mud, sand particles, and suspended matter from municipal or borewell water supplies. Equipped with programmed automatic backwashing.',
    features: [
      'Multi-grade quartz sand & gravel media layers',
      'Automatic backwash valve with programmable timer',
      'Heavy-duty FRP vessel construction',
      'Low pressure drop operation'
    ],
    applications: ['Borewell Pre-Filtration', 'Whole House Filtration', 'Commercial Plants']
  },
  {
    id: 'zb-carbon-filter',
    slug: 'automatic-carbon-filter',
    name: 'AUTOMATIC CARBON FILTER',
    brand: 'ZERO B',
    category: 'Carbon Filter',
    image: '/products/zero-b-automatic-carbon-filter.png',
    numberTag: 3,
    isHeroFeatured: true,
    shortDesc: 'High-adsorption activated carbon filter for chlorine, odor, color, and organic compound removal.',
    fullDesc: 'Zero B Auto Carbon Filter utilizes high IV activated carbon media to absorb chlorine, organic impurities, foul taste, and bad odor from raw water sources with automatic backwashing.',
    features: [
      'High Iodine Value activated coconut shell carbon',
      'Automatic auto-flush / backwash valve mechanism',
      'Improves water clarity, taste, and odor',
      'Prevents chlorine degradation of RO membranes'
    ],
    applications: ['Pre-treatment for RO Systems', 'Whole House Odor Removal', 'Food & Beverage']
  },
  {
    id: 'zb-iron-filter',
    slug: 'automatic-water-iron-filter',
    name: 'AUTOMATIC WATER IRON FILTER',
    brand: 'ZERO B',
    category: 'Iron Filter',
    image: '/products/zero-b-automatic-water-iron-filter.png',
    numberTag: 4,
    isHeroFeatured: true,
    shortDesc: 'Specialized iron removal system designed to neutralize yellow stain-causing dissolved iron.',
    fullDesc: 'Zero B Auto Iron Remover is engineered specifically for borewell water containing high concentrations of iron. Prevents yellow staining on sanitaryware, tiles, and clothes without manual intervention.',
    features: [
      'Catalytic iron oxidation & removal media',
      'Automatic regeneration & backwash cycle',
      'Protects pipes and bathroom fittings from rusting',
      'Chemical-free oxidation mechanism'
    ],
    applications: ['High Iron Borewell Water', 'Residential Complexes', 'Industrial Pre-treatment']
  },
  {
    id: 'zb-heat-pump',
    slug: 'zero-b-heat-pump',
    name: 'ZERO B HEAT PUMP',
    brand: 'ZERO B',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    numberTag: 5,
    isHeroFeatured: true,
    shortDesc: 'Energy-efficient air-to-water heat pump for 24x7 hot water supply with up to 70% energy savings.',
    fullDesc: 'Zero B Heat Pump utilizes advanced heat exchanger technology to extract thermal energy from ambient air to heat domestic water efficiently in all weather conditions.',
    features: [
      'Extracts heat energy from ambient atmosphere',
      'Saves up to 70% electricity compared to conventional geysers',
      'All-weather 24/7 hot water availability',
      'Eco-friendly refrigerant technology'
    ],
    applications: ['Villas', 'Residential Buildings', 'Hotels', 'Hostels']
  },
  {
    id: 'zb-under-sink-ro',
    slug: 'zero-b-under-the-sink-model-drinking-ro-system',
    name: 'ZERO B - UNDER THE SINK MODEL DRINKING RO SYSTEM',
    brand: 'ZERO B',
    category: 'RO Purifier',
    image: '/products/zero-b-under-sink-ro.png',
    numberTag: 6,
    isHeroFeatured: true,
    shortDesc: 'Space-saving Kitchenmate under-counter RO drinking water system with dedicated designer faucet.',
    fullDesc: 'Zero B Kitchenmate concealed under-the-counter RO system featuring multi-stage filtration, heavy-metal removal membrane, hydropneumatic 8L storage tank, and dedicated kitchen faucet.',
    features: [
      'Concealed under-the-counter space saving design',
      'Dedicated chrome swan-neck kitchen faucet included',
      'Hydropneumatic 8L storage tank for pressurized water flow',
      'Detachable front cover with magnetic latches'
    ],
    applications: ['Modular Kitchens', 'Residential Homes', 'Executive Offices']
  },
  {
    id: 'zb-drinking-ro',
    slug: 'drinking-ro-purifier',
    name: 'DRINKING RO PURIFIER (ECO RO & MAGNA PLUS)',
    brand: 'ZERO B',
    category: 'RO Purifier',
    image: '/products/drinking-ro-purifier.png',
    numberTag: 7,
    isHeroFeatured: true,
    shortDesc: 'Wall-mountable drinking RO water purifier with 8-stage purification & HRR water recovery technology.',
    fullDesc: 'High performance domestic RO water purifier featuring 8 stages of purification, unique Minera Boost cartridge, and HRR technology reducing water wastage by 80%.',
    features: [
      '8 stages of RO + UV + UF purification technology',
      'Minera Boost cartridge adds essential minerals',
      'HRR technology reduces water wastage by 80%',
      'ESS technology prevents germ buildup 24x7 in storage tank'
    ],
    applications: ['Home Kitchens', 'Apartments', 'Small Offices']
  },

  // --- ZERO B ALKALINE & HYDROGEN WATER ---
  {
    id: 'zb-hydrolife',
    slug: 'zero-b-hydrolife-alkaline-hydrogen-water',
    name: 'ZERO B HYDROLIFE (ALKALINE & HYDROGEN WATER)',
    brand: 'ZERO B',
    category: 'RO Purifier',
    image: '/products/zero-b-hydrolife.png',
    shortDesc: 'Premium 11-plate Alkaline and Hydrogen water generator with in-built RO.',
    fullDesc: 'Zero B Hydrolife delivers palatable hydrogen-rich alkaline water using 11 platinum-coated titanium plates and in-built RO technology. Generates 5 different types of water for lifestyle wellness.',
    features: [
      '11 Platinum-coated Titanium Plates',
      'In-Built RO Purification System',
      '5 Different Types of Water Output',
      'Palatable Hydrogen Water & Auto Electrode Cleaning'
    ],
    applications: ['Luxury Residences', 'Health Enthusiasts', 'Wellness Centers']
  },

  // --- ZERO B DRINKING WATER PURIFIERS (PDF PAGE 2 & 3) ---
  {
    id: 'zb-uv-grande-2x',
    slug: 'zero-b-uv-grande-2x',
    name: 'ZERO B UV GRANDE 2X (UV + UF)',
    brand: 'ZERO B',
    category: 'RO Purifier',
    image: '/products/zero-b-uv-grande-2x.png',
    shortDesc: 'Next-gen UV Technology water purifier with Ultra-Filtration module.',
    fullDesc: 'Zero B UV Grande 2X paralyzes disease-causing bacteria and viruses using 4 stages of purification and smart LED indicators.',
    features: [
      'Next-gen UV Technology paralyzes viruses & bacteria',
      '4 stages of water purification',
      'Ultra-Filtration Module removes microbes',
      'LED Smart Indicator for purifier health'
    ],
    applications: ['Apartments', 'Homes', 'Small Kitchens']
  },
  {
    id: 'zb-uv-grande-plus',
    slug: 'zero-b-uv-grande-plus',
    name: 'ZERO B UV GRANDE PLUS (UV + ACTIVE SILVER)',
    brand: 'ZERO B',
    category: 'RO Purifier',
    image: '/products/zero-b-uv-grande-plus.png',
    shortDesc: '6-stage Hexapure & ESS technology water purifier.',
    fullDesc: 'Zero B UV Grande Plus ensures 6 stages of pure water filtration and round-the-clock tank protection via ESS technology.',
    features: [
      '6 stages of water purification',
      'Hexapure Technology purification',
      'ESS technology prevents germ buildup 24x7',
      'Next-gen UV Technology'
    ],
    applications: ['Home Kitchens', 'Flats']
  },
  {
    id: 'zb-wave-plus-ro',
    slug: 'zero-b-wave-plus-ro',
    name: 'ZERO B WAVE PLUS RO',
    brand: 'ZERO B',
    category: 'RO Purifier',
    image: '/products/zero-b-wave-plus-ro.png',
    shortDesc: 'Low pressure 6-stage RO purifier with 7 Litre storage capacity.',
    fullDesc: 'Zero B Wave Plus RO works effectively at low water pressure, lowering membrane fouling while removing high TDS.',
    features: [
      'Works at low pressure with lower membrane fouling',
      'High TDS remover',
      '6 stages of water purification',
      '7 Litre storage tank capacity'
    ],
    applications: ['Residences', 'Low Pressure Households']
  },
  {
    id: 'zb-ignite-hot-ro',
    slug: 'zero-b-ignite-hot-and-normal-ro',
    name: 'ZERO B IGNITE HOT & NORMAL RO/UF+UV',
    brand: 'ZERO B',
    category: 'RO Purifier',
    image: '/products/zero-b-ignite-hot-ro.png',
    shortDesc: 'Portable Hot & Normal drinking RO water purifier with touch panel control.',
    fullDesc: 'India\'s first portable hot and normal water purifier. Requires no tap water connection and delivers instant hot RO purified water at your fingertips.',
    features: [
      'Portable design requiring no fixed tap connection',
      'Instant RO / UF + UV purified hot & normal water',
      'Elegant touch panel with multiple temperature options',
      'Child lock safety feature'
    ],
    applications: ['Executive Offices', 'Homes', 'Bedrooms', 'Conference Rooms']
  },

  // --- ZERO B NON-ELECTRIC PURIFIERS (PDF PAGE 3) ---
  {
    id: 'zb-suraksha-pluspro',
    slug: 'zero-b-suraksha-pluspro',
    name: 'ZERO B SURAKSHA PLUSPRO (NON-ELECTRIC)',
    brand: 'ZERO B',
    category: 'RO Purifier',
    image: '/products/zero-b-suraksha-pluspro.png',
    shortDesc: 'Non-electric gravity-based water purifier with 3000L resin technology.',
    fullDesc: 'Suraksha Pluspro resin technology provides 3000 Liters of bacteria and virus free drinking water without electricity or boiling.',
    features: [
      'Non-electric gravity based operation',
      'Resin technology provides 3000L purified water',
      'Removes bacteria and water-borne pathogens',
      'Zero electricity or boiling required'
    ],
    applications: ['Home Kitchens', 'Rentals', 'Emergency Preparedness']
  },
  {
    id: 'zb-rakshak-iron',
    slug: 'zero-b-rakshak-iron-remover',
    name: 'ZERO B RAKSHAK IRON REMOVER (NON-ELECTRIC)',
    brand: 'ZERO B',
    category: 'Iron Filter',
    image: '/products/zero-b-rakshak-iron.png',
    shortDesc: 'Non-electric gravity purifier with reusable sponge filter capsule.',
    fullDesc: 'Rakshak Iron Remover uses a reusable sponge filter capsule and auto shut-off germicidal cartridge with exhaust indicator.',
    features: [
      'Reusable easy-to-use sponge filter capsule',
      'Auto shut-off germicidal cartridge with exhaust indicator',
      'Non-electric gravity based operation'
    ],
    applications: ['Borewell Homes', 'Non-Electric Areas']
  },
  {
    id: 'zb-suraksha-veg',
    slug: 'zero-b-suraksha-vegetable-cleaner',
    name: 'ZERO B SURAKSHA VEGETABLE CLEANER',
    brand: 'ZERO B',
    category: 'RO Purifier',
    image: '/products/zero-b-suraksha-veg.png',
    shortDesc: 'Tap attachment resin cleaner for safe germ-free water & vegetable washing.',
    fullDesc: 'Suraksha Vegetable Cleaner tap attachment uses resin technology to produce 7500 Liters of safe, bacteria-free drinking and washing water.',
    features: [
      'Tap attachment with free adapter for any tap size',
      'Produces 7500 litres of safe germ-free water',
      'In-built indicator showing unit life end',
      'Kills bacteria and viruses'
    ],
    applications: ['Kitchen Sinks', 'Vegetable Washing', 'Domestic Taps']
  },

  // --- ZERO B WATER SOFTENERS & FILTERS (PDF PAGE 4) ---
  {
    id: 'zb-minisoft-bathroom',
    slug: 'zero-b-mini-soft-bathroom-softener',
    name: 'ZERO B MINI SOFT BATHROOM SOFTENER',
    brand: 'ZERO B',
    category: 'Water Softener',
    image: '/products/zero-b-minisoft-bathroom.png',
    shortDesc: 'Point of use sleek wall-mount bathroom water softener for appliances.',
    fullDesc: 'Easy to fit sleek wall-mount bathroom softener. Protects washing machines, dishwashers, reduces hair loss and skin ailments.',
    features: [
      'Sleek wall-mount compact design',
      'Ideal for washing machines & dishwashers',
      'Reduces hair fall, skin dryness, and fabric fading'
    ],
    applications: ['Bathrooms', 'Washing Machine Points', 'Geysers']
  },
  {
    id: 'zb-autosoft-1',
    slug: 'zero-b-autosoft-1',
    name: 'ZERO B AUTOSOFT-1 APARTMENT SOFTENER',
    brand: 'ZERO B',
    category: 'Water Softener',
    image: '/products/zero-b-autosoft-1.png',
    shortDesc: 'Automatic water softener for apartment flats.',
    fullDesc: 'Prevents hair & skin damage, protects bathroom fittings, geysers, and appliances from hard water scaling.',
    features: [
      'Automatic scheduled regeneration',
      'Prevents scale buildup on fittings & geysers',
      'Saves soap and shampoo consumption'
    ],
    applications: ['Apartments', 'Flats']
  },
  {
    id: 'zb-autosoft-2',
    slug: 'zero-b-autosoft-2',
    name: 'ZERO B AUTOSOFT-2 APARTMENT SOFTENER',
    brand: 'ZERO B',
    category: 'Water Softener',
    image: '/products/zero-b-autosoft-2.png',
    shortDesc: 'Sleek automatic apartment water softener.',
    fullDesc: 'High efficiency automatic water softener engineered for apartments and independent homes.',
    features: [
      'Digital automatic control valve',
      'Retains fabric color & natural softness'
    ],
    applications: ['Apartment Homes', 'Villas']
  },
  {
    id: 'zb-autosoft-3-6',
    slug: 'zero-b-autosoft-3-and-6',
    name: 'ZERO B AUTOSOFT-3 & 6 WHOLE HOUSE SOFTENER',
    brand: 'ZERO B',
    category: 'Water Softener',
    image: '/products/zero-b-autosoft-3-6.png',
    shortDesc: 'Large capacity automatic whole-house water softener system.',
    fullDesc: 'High capacity automatic water softener suitable for entire home. Maintains heating efficiency of geysers and heat pumps.',
    features: [
      'High capacity automatic whole house softening',
      'Maintains heating efficiency of water heaters',
      'Protects entire household plumbing network'
    ],
    applications: ['Large Villas', 'Bungalows', 'Multi-storey Homes']
  },
  {
    id: 'zb-autosoft-8',
    slug: 'zero-b-autosoft-8',
    name: 'ZERO B AUTOSOFT-8 MEGA CAPACITY SOFTENER',
    brand: 'ZERO B',
    category: 'Water Softener',
    image: '/products/zero-b-autosoft-8.png',
    shortDesc: 'Mega capacity automatic water softener for large estates & commercial buildings.',
    fullDesc: 'Heavy-duty automatic water softening system designed for continuous high water demand.',
    features: [
      'Mega capacity automatic softening resin vessel',
      'Full auto backwash and brine regeneration'
    ],
    applications: ['Residential Complexes', 'Hotels', 'Commercial Buildings']
  },
  {
    id: 'zb-d-ferrous',
    slug: 'zero-b-d-ferrous-iron-remover',
    name: 'ZERO B D-FERROUS IRON REMOVER',
    brand: 'ZERO B',
    category: 'Iron Filter',
    image: '/products/zero-b-d-ferrous.png',
    shortDesc: 'Pre-treatment iron remover cylinder for domestic RO up to 25 LPH.',
    fullDesc: 'Removes foul metallic taste from water, keeps skin soft and glowing, and acts as pre-treatment for domestic RO purifiers.',
    features: [
      'Removes foul metallic taste and iron rust',
      'Pre-treatment for domestic RO up to 25 LPH',
      'Saves cooking gas consumption'
    ],
    applications: ['Pre-RO Treatment', 'Borewell Domestic Lines']
  },

  // --- ZERO B COMMERCIAL RO PLANTS (PDF PAGE 3) ---
  {
    id: 'zb-intello-25lph',
    slug: 'zero-b-intello-ro-25lph',
    name: 'ZERO B INTELLO RO 25LPH + ACTIVE SILVER',
    brand: 'ZERO B',
    category: 'Commercial RO',
    image: '/products/zero-b-intello-25lph.png',
    capacities: ['25 LPH'],
    shortDesc: 'Commercial 25 LPH RO purifier with smart digital monitor & active silver.',
    fullDesc: 'High TDS Remover removes excess salts, heavy metals, and pesticides. Smart digital monitor displays cartridge life and alarms.',
    features: [
      '25 Litres Per Hour flow rate',
      'Smart digital monitor displays cartridge life and alarm',
      'Active Silver Technology for anti-microbial protection'
    ],
    applications: ['Small Offices', 'Cafes', 'Clinics', 'Schools']
  },
  {
    id: 'zb-eco-smart-50lph',
    slug: 'zero-b-eco-smart-ro-50lph',
    name: 'ZERO B ECO SMART RO 50LPH',
    brand: 'ZERO B',
    category: 'Commercial RO',
    image: '/products/zero-b-eco-smart-50lph.png',
    capacities: ['50 LPH'],
    shortDesc: '50 LPH Commercial RO plant with 3x higher pure water recovery.',
    fullDesc: 'Features HRR technology for 3x higher pure water recovery, smart visual alert for monitoring TDS output, and ESS technology 24x7.',
    features: [
      '50 LPH commercial purification capacity',
      '3 times higher pure water recovery with HRR',
      'Smart visual alert for monitoring TDS level'
    ],
    applications: ['Restaurants', 'Multiplexes', 'Corporate Offices']
  },
  {
    id: 'zb-skid-ro',
    slug: 'zero-b-skid-ro-25lph-50lph',
    name: 'ZERO B SKID RO 25LPH / 50LPH',
    brand: 'ZERO B',
    category: 'Commercial RO',
    image: '/products/zero-b-skid-ro.png',
    capacities: ['25 LPH', '50 LPH'],
    shortDesc: 'Heavy-duty skid mounted commercial RO system with auto flush timer.',
    fullDesc: 'Equipped with enhanced high flow membrane and auto flush timer to extend membrane life automatically.',
    features: [
      'Heavy-duty stainless steel skid mounting',
      'Enhanced high flow membrane technology',
      'Auto flush timer enhances membrane life'
    ],
    applications: ['Institutes', 'Offices', 'Large Families', 'Factories']
  }
];

export const CATEGORIES = [
  'All',
  'Water Softener',
  'Sand Filter',
  'Carbon Filter',
  'Iron Filter',
  'RO Purifier',
  'Heat Pump',
  'Commercial RO'
] as const;

export const COMPANY_DETAILS = {
  name: 'TGMC',
  tagline: 'Pure Water. Better Life.',
  subtitle: 'Authorised sales & service solutions for ZERO B water purifiers, automatic softeners, filters, and heat pumps in Bangalore & Karnataka.',
  address: 'Hesaragatta Road, Bangalore – 560073',
  phone: '9964750573',
  whatsappNumber: '919964750573',
  formattedWhatsApp: '+91 9964750573',
  location: 'Bangalore – 560073',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6713917409214!2d77.5028453!3d13.0565805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d4f8ff9ff4d%3A0x6b1070220674391c!2sHesaragatta%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};
