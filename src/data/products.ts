export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'Water Softener' | 'Sand Filter' | 'Carbon Filter' | 'Iron Filter' | 'RO Purifier' | 'Commercial RO' | 'Heat Pump' | 'Solar Water Heater' | 'Solar with Heat Pump' | 'Pressure Pump' | 'Hot Water Recirculation Pump' | 'Sump Pump' | 'Under the Sink RO' | 'Wall Mounted RO' | 'Water Level Controller' | 'Solar PV Panel' | 'Commercial Heat Pump';
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
    description: 'Pioneers in automatic water softening, advanced filtration, drinking RO purifiers, and commercial water systems.',
    categories: ['Water Softener', 'Sand Filter', 'Carbon Filter', 'Iron Filter', 'RO Purifier', 'Commercial RO', 'Heat Pump', 'Under the Sink RO', 'Wall Mounted RO'],
    logoText: 'ZERO B'
  },
  {
    id: 'delta-green',
    name: 'DELTA GREEN',
    tagline: 'High-Efficiency Heat Pump Systems',
    isAuthorised: true,
    description: 'TGMC is an Authorised Distributor for Delta Green residential and commercial air source heat pump water heaters.',
    categories: ['Heat Pump', 'Commercial Heat Pump'],
    logoText: 'DELTA GREEN'
  },
  {
    id: 'v-guard',
    name: 'V GUARD',
    tagline: 'Reliable Power & Solar Heating Solutions',
    isAuthorised: false,
    description: 'Trusted manufacturer of high-efficiency solar water heaters, pressure booster pumps, and heat pumps.',
    categories: ['Solar Water Heater', 'Solar with Heat Pump', 'Pressure Pump', 'Hot Water Recirculation Pump', 'Heat Pump'],
    logoText: 'V GUARD'
  },
  {
    id: 'racold',
    name: 'RACOLD',
    tagline: 'Reclaim Your Water Heating',
    isAuthorised: false,
    description: 'Premium solar water heaters, heat pump water heaters, and advanced domestic geysers.',
    categories: ['Solar Water Heater', 'Solar with Heat Pump', 'Heat Pump'],
    logoText: 'RACOLD'
  },
  {
    id: 'emmvee-solarizer',
    name: 'EMMVEE SOLARIZER',
    tagline: 'Premium Solar Solutions',
    isAuthorised: false,
    description: 'German-engineered solar hot water systems and monocrystalline PV panels built for maximum efficiency and durability.',
    categories: ['Solar Water Heater', 'Solar with Heat Pump', 'Solar PV Panel'],
    logoText: 'EMMVEE SOLARIZER'
  },
  {
    id: 'supreme',
    name: 'SUPREME',
    tagline: 'Smart Rooftop Solar Solutions',
    isAuthorised: false,
    description: 'Supreme Solar hot water systems built for durability and long service life.',
    categories: ['Solar Water Heater'],
    logoText: 'SUPREME'
  },
  {
    id: 'kamal',
    name: 'KAMAL',
    tagline: 'Efficient Solar & Heat Pump Systems',
    isAuthorised: false,
    description: 'Kamal solar water heating and hybrid heat pump systems for consistent hot water.',
    categories: ['Solar Water Heater', 'Solar with Heat Pump'],
    logoText: 'KAMAL'
  },
  {
    id: 'grundfos',
    name: 'GRUNDFOS',
    tagline: 'Global Leader in Advanced Pump Solutions',
    isAuthorised: false,
    description: 'World-class automatic water pressure booster systems, sump pumps, recirculation pump systems, and controllers.',
    categories: ['Pressure Pump', 'Hot Water Recirculation Pump', 'Sump Pump', 'Water Level Controller'],
    logoText: 'GRUNDFOS'
  },
  {
    id: 'kirloskar',
    name: 'KIRLOSKAR',
    tagline: 'Proven Pump Engineering since 1888',
    isAuthorised: false,
    description: 'Robust, highly efficient pressure pumps and submersible sump pumps for residential and commercial use.',
    categories: ['Pressure Pump', 'Sump Pump'],
    logoText: 'KIRLOSKAR'
  },
  {
    id: 'lubi',
    name: 'LUBI',
    tagline: 'Reliable Pumping Solutions',
    isAuthorised: false,
    description: 'High-quality domestic water pressure pumps and agricultural booster systems.',
    categories: ['Pressure Pump'],
    logoText: 'LUBI'
  },
  {
    id: 'texmo',
    name: 'TEXMO',
    tagline: 'Legendary Performance and Durability',
    isAuthorised: false,
    description: 'Taro pumps offering heavy-duty submersible sump pumps and water transfer systems.',
    categories: ['Sump Pump'],
    logoText: 'TEXMO'
  },
  {
    id: 'ao-smith',
    name: 'AO SMITH',
    tagline: 'Innovation Has a Name',
    isAuthorised: false,
    description: 'Premium quality under-sink RO water purifiers and storage water heaters.',
    categories: ['Under the Sink RO'],
    logoText: 'AO SMITH'
  },
  {
    id: 'kent',
    name: 'KENT',
    tagline: 'House of Purity',
    isAuthorised: false,
    description: 'India\'s leading brand of wall-mounted drinking water RO purifiers.',
    categories: ['Wall Mounted RO'],
    logoText: 'KENT'
  },
  {
    id: 'aqua',
    name: 'AQUA',
    tagline: 'Pure & Healthy Drinking Water',
    isAuthorised: false,
    description: 'High reliability cost-effective wall-mounted RO and UV water purifiers.',
    categories: ['Wall Mounted RO'],
    logoText: 'AQUA'
  },
  {
    id: 'non-brand',
    name: 'NON BRAND',
    tagline: 'Assembled Custom Solutions',
    isAuthorised: false,
    description: 'High performance cost-effective assembled water purifiers and controllers tailored to your budget.',
    categories: ['Wall Mounted RO', 'Water Level Controller'],
    logoText: 'NON BRAND'
  },
  {
    id: 'adani',
    name: 'ADANI',
    tagline: 'Powering a Green Future',
    isAuthorised: false,
    description: 'World-class Adani solar photovoltaic panels for residential and commercial rooftop solar projects.',
    categories: ['Solar PV Panel'],
    logoText: 'ADANI'
  },
  {
    id: 'neo',
    name: 'NEO',
    tagline: 'Heavy-Duty Commercial Hot Water',
    isAuthorised: false,
    description: 'High performance Neo commercial heat pumps for large capacity water heating.',
    categories: ['Commercial Heat Pump'],
    logoText: 'NEO'
  },
  {
    id: 'other-brands',
    name: 'OTHER BRANDS',
    tagline: 'Flexible Systems & Spares',
    isAuthorised: false,
    description: 'We source and service high-quality parts, PV panels, and heat pumps from various top-tier industry brands.',
    categories: ['Solar PV Panel', 'Commercial Heat Pump'],
    logoText: 'OTHER BRANDS'
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

  // --- ZERO B DRINKING WATER PURIFIERS ---
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

  // --- ZERO B NON-ELECTRIC PURIFIERS ---
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

  // --- ZERO B WATER SOFTENERS & FILTERS ---
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

  // --- ZERO B COMMERCIAL RO PLANTS ---
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
  },

  // --- HEAT PUMPS ---
  {
    id: 'hp-deltagreen',
    slug: 'delta-green-heat-pump',
    name: 'DELTA GREEN HEAT PUMP',
    brand: 'DELTA GREEN',
    category: 'Heat Pump',
    image: '/products/heatpump-deltagreen.png',
    shortDesc: 'Delta Green energy-efficient residential and commercial heat pump water heater.',
    fullDesc: 'High efficiency air-to-water heat pump systems from Delta Green. Provides 24x7 hot water with up to 70% energy savings.',
    features: ['Eco-friendly refrigerant', 'Digital controller panel', 'High COP heating'],
    applications: ['Villas', 'Independent Houses', 'Hotels', 'Hostels']
  },
  {
    id: 'hp-vguard',
    slug: 'v-guard-heat-pump',
    name: 'V GUARD HEAT PUMP',
    brand: 'V GUARD',
    category: 'Heat Pump',
    image: '/products/heatpump-vguard.png',
    shortDesc: 'V-Guard smart heat pump water heater for residential and villa applications.',
    fullDesc: 'V-Guard heat pump water heaters use advanced air-to-water heat exchanger tech to deliver steady hot water with low power usage.',
    features: ['Corrosion-resistant tank', 'Quick temperature recovery', 'Saves up to 70% power'],
    applications: ['Villas', 'Duplex Homes', 'Guest Houses']
  },
  {
    id: 'hp-zerob',
    slug: 'zero-b-heat-pump-heater',
    name: 'ZERO B HEAT PUMP',
    brand: 'ZERO B',
    category: 'Heat Pump',
    image: '/products/heatpump-zerob.png',
    shortDesc: 'Zero B premium heat pump system for centralized domestic hot water.',
    fullDesc: 'Zero B air-to-water heat pump system from Ion Exchange. Extremely efficient, reliable all-weather operation.',
    features: ['Heavy-duty compressor', 'Sleek casing', 'Smart digital control display'],
    applications: ['Independent Residences', 'Apartments', 'Commercial Outlets']
  },
  {
    id: 'hp-racold',
    slug: 'racold-heat-pump-heater',
    name: 'RACOLD HEAT PUMP',
    brand: 'RACOLD',
    category: 'Heat Pump',
    image: '/products/heatpump-racold.png',
    shortDesc: 'Racold premium energy-efficient heat pump system.',
    fullDesc: 'Racold residential and commercial heat pump water heaters, utilizing thermodynamic principles to heat water efficiently.',
    features: ['Thermodynamic cycle heating', 'Intelligent control system', 'Corrosion resistant tank'],
    applications: ['Luxury Villas', 'Spas', 'Hotels', 'Apartments']
  },

  // --- SOLAR WATER HEATERS ---
  {
    id: 'swh-emmvee',
    slug: 'emmvee-solarizer-solar-water-heater',
    name: 'EMMVEE SOLARIZER SOLAR WATER HEATER',
    brand: 'EMMVEE SOLARIZER',
    category: 'Solar Water Heater',
    image: '/products/solar-emmvee.png',
    shortDesc: 'Emmvee Solarizer premium rooftop solar water heating system.',
    fullDesc: 'Emmvee Solarizer is a top-tier solar water heater featuring high-absorption glass collector plates for rapid water heating.',
    features: ['Premium glass collector plates', 'German technology engineering', 'Rust-proof frame support'],
    applications: ['Rooftops', 'Independent Homes', 'Hostels']
  },
  {
    id: 'swh-vguard',
    slug: 'v-guard-solar-water-heater',
    name: 'V GUARD SOLAR WATER HEATER',
    brand: 'V GUARD',
    category: 'Solar Water Heater',
    image: '/products/solar-vguard.png',
    shortDesc: 'V-Guard Evacuated Tube Collector (ETC) solar water heater.',
    fullDesc: 'V-Guard ETC solar water heater with high density PUF insulation, ensuring water stays hot overnight.',
    features: ['Evacuated Glass Tube (ETC)', 'Thick PUF insulation', 'Sacrificial anode protection'],
    applications: ['Residential Houses', 'Gated Communities']
  },
  {
    id: 'swh-racold',
    slug: 'racold-solar-water-heater',
    name: 'RACOLD SOLAR WATER HEATER',
    brand: 'RACOLD',
    category: 'Solar Water Heater',
    image: '/products/solar-racold.png',
    shortDesc: 'Racold high-efficiency rooftop solar water heater.',
    fullDesc: 'Racold solar water heating systems combine international quality design with durable collector panels.',
    features: ['High heat transfer coating', 'Durable support stand', 'Overheat safety release valve'],
    applications: ['Villas', 'PG Accommodations', 'Hotels']
  },
  {
    id: 'swh-supreme',
    slug: 'supreme-solar-water-heater',
    name: 'SUPREME SOLAR WATER HEATER',
    brand: 'SUPREME',
    category: 'Solar Water Heater',
    image: '/products/solar-supreme.png',
    shortDesc: 'Supreme Solar high performance evacuated tube collector heater.',
    fullDesc: 'Supreme Solar rooftop system designed for efficient solar thermal conversion even on cloudy days.',
    features: ['High transmission glass ETC tubes', 'Rustproof inner tank lining', 'Sturdy powder-coated stand'],
    applications: ['Independent Residences', 'Apartments']
  },
  {
    id: 'swh-kamal',
    slug: 'kamal-solar-water-heater',
    name: 'KAMAL SOLAR WATER HEATER',
    brand: 'KAMAL',
    category: 'Solar Water Heater',
    image: '/products/solar-kamal.png',
    shortDesc: 'Kamal premium rooftop solar water heater.',
    fullDesc: 'Kamal solar hot water system built for long lifetime and highly efficient thermal heating.',
    features: ['Highly efficient copper/glass solar panel', 'Heavy-duty insulated storage tank'],
    applications: ['Homes', 'Villas', 'Commercial Buildings']
  },

  // --- SOLAR WITH HEAT PUMP ---
  {
    id: 's-hp-emmvee',
    slug: 'emmvee-solarizer-solar-with-heat-pump',
    name: 'EMMVEE SOLARIZER SOLAR WITH HEAT PUMP',
    brand: 'EMMVEE SOLARIZER',
    category: 'Solar with Heat Pump',
    image: '/products/solar-heatpump-emmvee.png',
    shortDesc: 'Hybrid Emmvee Solarizer solar water heater integrated with heat pump backup.',
    fullDesc: 'Advanced hybrid water heating combining solar thermal efficiency with air-source heat pump technology for 24x7 hot water regardless of weather.',
    features: ['Hybrid solar + heat pump system', 'German engineering quality', 'All-weather hot water heating'],
    applications: ['Villas', 'Apartments', 'Commercial Projects']
  },
  {
    id: 's-hp-vguard',
    slug: 'v-guard-solar-with-heat-pump',
    name: 'V GUARD SOLAR WITH HEAT PUMP',
    brand: 'V GUARD',
    category: 'Solar with Heat Pump',
    image: '/products/solar-heatpump-vguard.png',
    shortDesc: 'V-Guard integrated solar and heat pump hybrid water heater.',
    fullDesc: 'Smart hybrid system that prioritizes solar heating first, and automatically triggers the heat pump when solar energy is insufficient.',
    features: ['Automatic backup controller', 'Highly insulated hot water storage', 'Optimized power usage'],
    applications: ['Duplex Villas', 'PG Hostels', 'Hospitals']
  },
  {
    id: 's-hp-racold',
    slug: 'racold-solar-with-heat-pump',
    name: 'RACOLD SOLAR WITH HEAT PUMP',
    brand: 'RACOLD',
    category: 'Solar with Heat Pump',
    image: '/products/solar-heatpump-racold.png',
    shortDesc: 'Racold hybrid solar water heater with heat pump integration.',
    fullDesc: 'Premium Racold hybrid system combining solar thermal absorption with high performance air heat source.',
    features: ['Dual heating elements', 'Weatherproof control unit', 'Maximum energy efficiency rating'],
    applications: ['Luxury Villas', 'Resorts', 'Wellness Centers']
  },
  {
    id: 's-hp-kamal',
    slug: 'kamal-solar-with-heat-pump',
    name: 'KAMAL SOLAR WITH HEAT PUMP',
    brand: 'KAMAL',
    category: 'Solar with Heat Pump',
    image: '/products/solar-heatpump-kamal.png',
    shortDesc: 'Kamal hybrid solar heating system with integrated heat pump.',
    fullDesc: 'Kamal hybrid system ensuring uninterrupted high volume hot water output for residential and light commercial projects.',
    features: ['Heavy-duty hybrid design', 'Corrosion resistant construction', 'Auto changeover settings'],
    applications: ['Homes', 'Hotels', 'Hostels']
  },

  // --- PRESSURE PUMPS ---
  {
    id: 'press-grundfos',
    slug: 'grundfos-pressure-pump',
    name: 'GRUNDFOS PRESSURE PUMP',
    brand: 'GRUNDFOS',
    category: 'Pressure Pump',
    image: '/products/pressure-grundfos.png',
    shortDesc: 'Premium Grundfos automatic water pressure booster system.',
    fullDesc: 'Grundfos automatic pressure booster pump ensuring constant water pressure in luxury bathrooms, showers, and taps.',
    features: ['Constant water pressure control', 'Ultra-quiet motor operation', 'Dry-run protection built-in'],
    applications: ['Luxury Villas', 'Modern Bungalows', 'Commercial Kitchens']
  },
  {
    id: 'press-kirloskar',
    slug: 'kirloskar-pressure-pump',
    name: 'KIRLOSKAR PRESSURE PUMP',
    brand: 'KIRLOSKAR',
    category: 'Pressure Pump',
    image: '/products/pressure-kirloskar.png',
    shortDesc: 'Kirloskar heavy-duty automatic water pressure booster pump.',
    fullDesc: 'Kirloskar automatic pressure pump designed for reliable water boosting in residences and apartments.',
    features: ['Robust cast-iron casing', 'Automatic pressure switch', 'Efficient power usage'],
    applications: ['Independent Homes', 'Apartments', 'Taps & Showers']
  },
  {
    id: 'press-vguard',
    slug: 'v-guard-pressure-pump',
    name: 'V GUARD PRESSURE PUMP',
    brand: 'V GUARD',
    category: 'Pressure Pump',
    image: '/products/pressure-vguard.png',
    shortDesc: 'V-Guard automatic pressure booster pump system.',
    fullDesc: 'V-Guard automatic water pressure booster pump ensuring uniform flow across showers and taps simultaneously.',
    features: ['Automatic ON/OFF operation', 'Quiet running motor', 'Thermal overload protection'],
    applications: ['Multi-bathroom Houses', 'Booster Lines']
  },
  {
    id: 'press-lubi',
    slug: 'lubi-pressure-pump',
    name: 'LUBI PRESSURE PUMP',
    brand: 'LUBI',
    category: 'Pressure Pump',
    image: '/products/pressure-lubi.png',
    shortDesc: 'Lubi reliable automatic water pressure booster pump.',
    fullDesc: 'Lubi automatic pressure pump designed for efficient water pressure regulation in homes and commercial outlets.',
    features: ['Compact design', 'Constant line pressure maintenance', 'Heavy-duty pump impeller'],
    applications: ['Homes', 'Small Commercial Complexes']
  },

  // --- HOT WATER RE CIRCULATION PUMP ---
  {
    id: 'recirc-grundfos',
    slug: 'grundfos-hot-water-re-circulation-pump',
    name: 'GRUNDFOS HOT WATER RE CIRCULATION PUMP',
    brand: 'GRUNDFOS',
    category: 'Hot Water Recirculation Pump',
    image: '/products/recirc-grundfos.png',
    shortDesc: 'Grundfos hot water recirculation system for instant hot water in taps.',
    fullDesc: 'Grundfos hot water recirculation pump keeps hot water constantly moving through lines, eliminating wait time at the faucet.',
    features: ['Instant hot water at any tap', 'Saves water from running down drain', 'Extremely low power consumption'],
    applications: ['Villas', 'Hotels', 'Large Homes with long pipe runs']
  },
  {
    id: 'recirc-vguard',
    slug: 'v-guard-hot-water-re-circulation-pump',
    name: 'V GUARD HOT WATER RE CIRCULATION PUMP',
    brand: 'V GUARD',
    category: 'Hot Water Recirculation Pump',
    image: '/products/recirc-vguard.png',
    shortDesc: 'V-Guard reliable hot water line recirculation pump.',
    fullDesc: 'V-Guard recirculation pump keeps hot water circulating through pipelines to provide instant hot water.',
    features: ['Instant line heating', 'Quiet motor operation', 'Compact size'],
    applications: ['Residences', 'Villa Complexes']
  },

  // --- SUMP PUMPS ---
  {
    id: 'sump-kirloskar',
    slug: 'kirloskar-sump-pump',
    name: 'KIRLOSKAR SUMP PUMP',
    brand: 'KIRLOSKAR',
    category: 'Sump Pump',
    image: '/products/sump-kirloskar.png',
    shortDesc: 'Kirloskar heavy-duty submersible sump pump.',
    fullDesc: 'Kirloskar submersible pump designed for dewatering sumps, basements, and raw water transfer.',
    features: ['Submersible cast iron body', 'Heavy-duty motor impeller', 'High discharge flow rate'],
    applications: ['Underground Sumps', 'Basement Drainage', 'Water Tanks']
  },
  {
    id: 'sump-texmo',
    slug: 'texmo-sump-pump',
    name: 'TEXMO SUMP PUMP',
    brand: 'TEXMO',
    category: 'Sump Pump',
    image: '/products/sump-texmo.png',
    shortDesc: 'Texmo taro heavy-duty submersible sump pump.',
    fullDesc: 'Texmo submersible sump pump engineered for high-volume drainage, dewatering, and sump clearing.',
    features: ['Corrosion-resistant casing', 'Submersible reliability', 'Low maintenance design'],
    applications: ['Industrial Sumps', 'Commercial Buildings', 'Water Storage Clearing']
  },
  {
    id: 'sump-grundfos',
    slug: 'grundfos-sump-pump',
    name: 'GRUNDFOS SUMP PUMP',
    brand: 'GRUNDFOS',
    category: 'Sump Pump',
    image: '/products/sump-grundfos.png',
    shortDesc: 'Grundfos high-reliability submersible sump and drainage pump.',
    fullDesc: 'Grundfos submersible pump constructed with stainless steel parts for basement dewatering and water transfer.',
    features: ['Stainless steel shaft and casing', 'Automatic float switch control', 'Built-in thermal overload protection'],
    applications: ['Basements', 'Stormwater pits', 'Underground Water Sumps']
  },

  // --- UNDER THE SINK RO ---
  {
    id: 'us-zerob',
    slug: 'zero-b-under-the-sink-ro-purifier',
    name: 'ZERO B UNDER THE SINK DRINKING RO PURIFIER',
    brand: 'ZERO B',
    category: 'Under the Sink RO',
    image: '/products/under-sink-zerob.png',
    shortDesc: 'Zero B concealed under-counter RO drinking water purifier.',
    fullDesc: 'Space saving Zero B under-the-sink RO purifier with high output filtration, dedicated faucet, and pressurized storage tank.',
    features: ['Concealed space-saving design', 'Pressurized water storage', 'Dedicated chrome faucet'],
    applications: ['Modular Kitchens', 'Homes', 'Offices']
  },
  {
    id: 'us-aosmith',
    slug: 'ao-smith-under-the-sink-ro-purifier',
    name: 'AO SMITH UNDER THE SINK DRINKING RO PURIFIER',
    brand: 'AO SMITH',
    category: 'Under the Sink RO',
    image: '/products/under-sink-aosmith.png',
    shortDesc: 'AO Smith premium under-counter RO purifier.',
    fullDesc: 'High recovery under-the-sink RO water purifier from AO Smith. Designed for modern modular kitchens with digital alarms.',
    features: ['High recovery green technology', 'Concealed placement', 'Digital indicator faucet'],
    applications: ['Modular Kitchens', 'Villas']
  },

  // --- WALL MOUNTED RO ---
  {
    id: 'wm-zerob',
    slug: 'zero-b-wall-mounted-ro-purifier',
    name: 'ZERO B WALL MOUNTED RO PURIFIER',
    brand: 'ZERO B',
    category: 'Wall Mounted RO',
    image: '/products/wall-mounted-zerob.png',
    shortDesc: 'Zero B Magna Plus premium wall-mounted RO water purifier.',
    fullDesc: 'Zero B Magna Plus domestic wall-mounted drinking water purifier featuring multi-stage filtration and mineral enricher.',
    features: ['Elegant wall mount cabinet', 'Minera Boost cartridge', 'High recovery RO technology'],
    applications: ['Home Kitchens', 'Offices']
  },
  {
    id: 'wm-kent',
    slug: 'kent-wall-mounted-ro-purifier',
    name: 'KENT WALL MOUNTED RO PURIFIER',
    brand: 'KENT',
    category: 'Wall Mounted RO',
    image: '/products/wall-mounted-kent.png',
    shortDesc: 'Kent wall-mountable mineral RO water purifier.',
    fullDesc: 'Kent multi-stage wall-mounted RO water purifier with built-in TDS controller to retain essential natural minerals.',
    features: ['TDS Controller module', 'Double purification RO+UV+UF', 'Transparent storage tank'],
    applications: ['Kitchens', 'Clinics', 'Schools']
  },
  {
    id: 'wm-aqua',
    slug: 'aqua-wall-mounted-ro-purifier',
    name: 'AQUA WALL MOUNTED RO PURIFIER',
    brand: 'AQUA',
    category: 'Wall Mounted RO',
    image: '/products/wall-mounted-aqua.png',
    shortDesc: 'Aqua compact wall-mounted drinking water RO purifier.',
    fullDesc: 'High performance economic wall-mounted RO system featuring sediment, carbon, and membrane filtration.',
    features: ['Compact cabinet', 'Budget-friendly pricing', 'Easy cartridge replacement'],
    applications: ['Homes', 'Rentals']
  },
  {
    id: 'wm-nonbrand',
    slug: 'non-brand-assembled-wall-mounted-ro-purifier',
    name: 'NON BRAND WALL MOUNTED RO PURIFIER',
    brand: 'NON BRAND',
    category: 'Wall Mounted RO',
    image: '/products/wall-mounted-nonbrand.png',
    shortDesc: 'Custom assembled wall-mounted drinking RO purifier.',
    fullDesc: 'Highly cost-effective custom-assembled wall mounted water purifier, using high-quality industry components.',
    features: ['Custom filtration stage configuration', 'High-quality components', 'Economical maintenance costs'],
    applications: ['Homes', 'Small Shops', 'Staff Rooms']
  },

  // --- WATER LEVEL CONTROLLER ---
  {
    id: 'wlc-grundfos',
    slug: 'grundfos-water-level-controller-panel',
    name: 'GRUNDFOS WATER LEVEL CONTROLLER',
    brand: 'GRUNDFOS',
    category: 'Water Level Controller',
    image: '/products/wlc-grundfos.png',
    shortDesc: 'Grundfos automatic digital water level controller panel.',
    fullDesc: 'Fully automated water level controller system by Grundfos. Prevents tank dry run and overflow automatically with smart float switch sensors.',
    features: ['Automatic overflow prevention', 'Pump dry run protection', 'Industrial grade sensors'],
    applications: ['Underground Sumps', 'Overhead Tanks']
  },
  {
    id: 'wlc-nonbrand',
    slug: 'non-brand-automatic-water-level-controller-panel',
    name: 'NON BRAND WATER LEVEL CONTROLLER',
    brand: 'NON BRAND',
    category: 'Water Level Controller',
    image: '/products/wlc-nonbrand.png',
    shortDesc: 'Automatic water level controller panel for domestic pumps.',
    fullDesc: 'Budget-friendly automatic water level controller with sensor probes, ideal for domestic overhead tanks and sump pumps.',
    features: ['Auto/Manual control switch', 'LED level indicators', 'Rust-proof sensor probes'],
    applications: ['Domestic Overhead Tanks', 'Homes', 'Apartments']
  },

  // --- SOLAR PV PANEL ---
  {
    id: 'pv-emmvee',
    slug: 'emmvee-solarizer-solar-pv-panel-module',
    name: 'EMMVEE SOLARIZER ROOFTOP PV PANEL',
    brand: 'EMMVEE SOLARIZER',
    category: 'Solar PV Panel',
    image: '/products/pv-emmvee.png',
    shortDesc: 'Emmvee Solarizer premium monocrystalline rooftop solar PV panel.',
    fullDesc: 'High efficiency monocrystalline solar PV panels engineered by Emmvee using advanced European manufacturing standards.',
    features: ['High efficiency monocrystalline cells', 'Excellent low-light performance', 'Durable tempered glass sheet'],
    applications: ['Rooftops', 'Offices', 'Villas']
  },
  {
    id: 'pv-adani',
    slug: 'adani-solar-pv-panel-module',
    name: 'ADANI ROOFTOP PV PANEL',
    brand: 'ADANI',
    category: 'Solar PV Panel',
    image: '/products/pv-adani.png',
    shortDesc: 'Adani green high efficiency rooftop solar PV module.',
    fullDesc: 'Adani solar photovoltaic panel modules delivering reliable clean energy generation for grid-connected rooftop systems.',
    features: ['PID resistant cells', 'High wind & snow load durability', '25-year performance warranty'],
    applications: ['Residential Roofs', 'Commercial Rooftops', 'Solar Farms']
  },
  {
    id: 'pv-other',
    slug: 'other-brands-rooftop-pv-panels-modules',
    name: 'OTHER BRANDS ROOFTOP PV PANEL',
    brand: 'OTHER BRANDS',
    category: 'Solar PV Panel',
    image: '/products/pv-other.png',
    shortDesc: 'Rooftop PV solar panels from other leading manufacturers.',
    fullDesc: 'We supply, install, and service solar photovoltaic panels from various tier-1 brands customized to your energy requirements.',
    features: ['Cost-effective clean energy', 'Custom system layout sizing', 'Grid integration ready'],
    applications: ['Homes', 'Warehouses', 'Institutes']
  },

  // --- COMMERCIAL HEAT PUMP ---
  {
    id: 'chp-deltagreen',
    slug: 'delta-green-commercial-heat-pump-system',
    name: 'DELTA GREEN AIR SOURCE COMMERCIAL HEAT PUMP',
    brand: 'DELTA GREEN',
    category: 'Commercial Heat Pump',
    image: '/products/comm-heatpump-deltagreen.png',
    shortDesc: 'Delta Green air source commercial heat pump water heater system.',
    fullDesc: 'High volume air source commercial heat pump system from Delta Green, featuring robust scroll compressors and stainless steel heat exchangers.',
    features: ['High capacity scroll compressor', 'Stainless steel thermal storage tank', 'Saves up to 75% heating energy'],
    applications: ['Hotels', 'Hospitals', 'Hostels', 'Apartment Blocks']
  },
  {
    id: 'chp-neo',
    slug: 'neo-commercial-heat-pump-system',
    name: 'NEO AIR SOURCE COMMERCIAL HEAT PUMP',
    brand: 'NEO',
    category: 'Commercial Heat Pump',
    image: '/products/comm-heatpump-neo.png',
    shortDesc: 'Neo high capacity commercial air source heat pump.',
    fullDesc: 'Neo commercial heat pump engineered for continuous large-scale hot water demand in hotels, residential schools, and factories.',
    features: ['Intelligent automatic defrost', 'High COP performance', 'Robust weatherproof casing'],
    applications: ['Factories', 'Spas', 'Commercial Swimming Pools', 'Resorts']
  },
  {
    id: 'chp-other',
    slug: 'other-brands-commercial-heat-pumps-systems',
    name: 'OTHER BRANDS AIR SOURCE COMMERCIAL HEAT PUMP',
    brand: 'OTHER BRANDS',
    category: 'Commercial Heat Pump',
    image: '/products/comm-heatpump-other.png',
    shortDesc: 'Commercial air source heat pump systems from leading global brands.',
    fullDesc: 'Heavy-duty commercial heat pump systems sourced from trusted global brands with custom capacity options.',
    features: ['Custom heating design layout', 'Robust mechanical configuration', 'Integrated system controls'],
    applications: ['Large Buildings', 'Hotels', 'Hospitals']
  }
];

export const CATEGORIES = [
  'All',
  'Water Softener',
  'Sand Filter',
  'Carbon Filter',
  'Iron Filter',
  'RO Purifier',
  'Commercial RO',
  'Heat Pump',
  'Solar Water Heater',
  'Solar with Heat Pump',
  'Pressure Pump',
  'Hot Water Recirculation Pump',
  'Sump Pump',
  'Under the Sink RO',
  'Wall Mounted RO',
  'Water Level Controller',
  'Solar PV Panel',
  'Commercial Heat Pump'
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
