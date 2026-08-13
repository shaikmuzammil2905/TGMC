export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'Water Softener' | 'Sand Filter' | 'Carbon Filter' | 'Iron Filter' | 'RO Purifier' | 'Heat Pump' | 'Solar Water Heater' | 'Pressure Pump' | 'Sump Motor' | 'Commercial RO' | 'Water Level Controller';
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
    tagline: 'Pure Water. Better Life.',
    isAuthorised: false,
    description: 'Pioneers in automatic water softening, advanced filtration, drinking RO purifiers, and eco-friendly heat pumps.',
    categories: ['Water Softener', 'Sand Filter', 'Carbon Filter', 'Iron Filter', 'RO Purifier', 'Heat Pump'],
    logoText: 'ZERO B'
  },
  {
    id: 'delta-green',
    name: 'DELTA GREEN',
    tagline: 'Authorised Distributor',
    isAuthorised: true,
    description: 'TGMC is an Authorised Distributor for Delta Green residential and commercial heat pump water heaters.',
    categories: ['Heat Pump'],
    logoText: 'DELTA GREEN'
  },
  {
    id: 'v-guard',
    name: 'V-GUARD',
    tagline: 'Reliable Water Heating & Pumping',
    isAuthorised: false,
    description: 'Trusted solutions for rooftop solar water heating, high-efficiency heat pumps, and pressure booster pumps.',
    categories: ['Solar Water Heater', 'Heat Pump', 'Pressure Pump'],
    logoText: 'V-GUARD'
  },
  {
    id: 'racold',
    name: 'RACOLD',
    tagline: 'Reclaim Your Water Heating',
    isAuthorised: false,
    description: 'Premium solar water heaters and energy-efficient heat pump systems engineered for superior performance.',
    categories: ['Solar Water Heater', 'Heat Pump'],
    logoText: 'RACOLD'
  },
  {
    id: 'grundfos',
    name: 'GRUNDFOS',
    tagline: 'Global Leader in Advanced Pump Solutions',
    isAuthorised: false,
    description: 'World-class pressure booster pumps and submersible sump motors built for reliability and longevity.',
    categories: ['Pressure Pump', 'Sump Motor'],
    logoText: 'GRUNDFOS'
  },
  {
    id: 'kirloskar',
    name: 'KIRLOSKAR',
    tagline: 'Enriching Lives with Proven Pump Tech',
    isAuthorised: false,
    description: 'Robust Indian pump engineering providing efficient water pressure systems for homes and commercial buildings.',
    categories: ['Pressure Pump'],
    logoText: 'KIRLOSKAR'
  },
  {
    id: 'commercial-ro',
    name: 'COMMERCIAL RO',
    tagline: 'High-Capacity Industrial RO Systems',
    isAuthorised: false,
    description: 'Heavy-duty reverse osmosis plants ranging from 25 LPH up to 1000 LPH for commercial and industrial water purity.',
    categories: ['Commercial RO'],
    logoText: 'COMMERCIAL RO'
  },
  {
    id: 'supreme-solar',
    name: 'SUPREME SOLAR',
    tagline: 'Premium Solar Heating Solutions',
    isAuthorised: false,
    description: 'Supreme Solar is a leading name in solar water heaters, offering high-efficiency evacuated tube collector systems suitable for home and commercial use.',
    categories: ['Solar Water Heater'],
    logoText: 'SUPREME SOLAR'
  },
  {
    id: 'non-branded',
    name: 'NON-BRANDED',
    tagline: 'Standard Reliable Solar Products & Spares',
    isAuthorised: false,
    description: 'Affordable, high-quality non-branded solar heaters, makeup tanks, and replacement parts built to standard specifications.',
    categories: ['Solar Water Heater'],
    logoText: 'NON-BRANDED'
  }
];

export const PRODUCTS: Product[] = [
  // --- ZERO B PRODUCTS (Numbered 1..7 as per UI reference) ---
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
    fullDesc: 'Removes visible dirt, mud, sand particles, and suspended matter from municipal or borewell water supplies. Equipped with automatic backwash valve settings.',
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
    fullDesc: 'Utilizes high IV activated carbon media to absorb chlorine, organic impurities, foul taste, and bad odor from raw water sources.',
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
    fullDesc: 'Engineered specifically for borewell water containing high concentrations of iron. Prevents yellow staining on sanitaryware, tiles, and clothes.',
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
    fullDesc: 'Advanced heat exchanger technology extracts thermal energy from ambient air to heat domestic water efficiently in all weather conditions.',
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
    shortDesc: 'Space-saving under-counter RO drinking water system with dedicated stainless steel swan neck faucet.',
    fullDesc: 'Concealed under-the-counter RO system featuring multi-stage filtration, heavy-metal removal membrane, and dedicated kitchen counter faucet.',
    features: [
      'Concealed under-the-counter space saving design',
      'Dedicated chrome swan-neck kitchen faucet included',
      'Multi-stage RO purification process',
      'Preserves essential minerals while removing TDS'
    ],
    applications: ['Modular Kitchens', 'Residential Homes', 'Executive Offices']
  },
  {
    id: 'zb-drinking-ro',
    slug: 'drinking-ro-purifier',
    name: 'DRINKING RO PURIFIER',
    brand: 'ZERO B',
    category: 'RO Purifier',
    image: '/products/drinking-ro-purifier.png',
    numberTag: 7,
    isHeroFeatured: true,
    shortDesc: 'Wall-mountable / countertop drinking RO water purifier with sales and service support.',
    fullDesc: 'High performance domestic RO water purifier designed for safe, pure, and mineral-rich drinking water for families.',
    features: [
      'Advanced RO + UV + UF purification technology',
      'Transparent / sleek outer body casing',
      'High flow rate purification membrane',
      'Low power consumption'
    ],
    applications: ['Home Kitchens', 'Apartments', 'Small Offices']
  },

  // --- DELTA GREEN HEAT PUMPS (AUTHORISED DISTRIBUTOR) ---
  {
    id: 'dg-res-200',
    slug: 'delta-green-residential-heat-pump-200l',
    name: 'DELTA GREEN Residential Heat Pump 200 LTR',
    brand: 'DELTA GREEN',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    isAuthorisedDistributor: true,
    capacities: ['200 LTR'],
    shortDesc: '200 LTR Residential Heat Pump Water Heater from Authorised Distributor TGMC.',
    fullDesc: 'High efficiency residential heat pump water heating system with 200 LTR storage capacity. Manufactured by Delta Green and distributed with official warranty support by TGMC Bangalore.',
    features: [
      'Official Authorised Distributor product support by TGMC',
      '200 LTR hot water storage tank capacity',
      'High COP heat pump technology for maximum energy savings',
      'Microprocessor smart controller'
    ],
    applications: ['Single Family Homes', 'Row Houses', 'Duplex Villas']
  },
  {
    id: 'dg-res-300',
    slug: 'delta-green-residential-heat-pump-300l',
    name: 'DELTA GREEN Residential Heat Pump 300 LTR',
    brand: 'DELTA GREEN',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    isAuthorisedDistributor: true,
    capacities: ['300 LTR'],
    shortDesc: '300 LTR Residential Heat Pump Water Heater from Authorised Distributor TGMC.',
    fullDesc: 'Premium 300 LTR heat pump heating unit designed for large homes and villas needing continuous hot water.',
    features: [
      'Official Authorised Distributor product support by TGMC',
      '300 LTR insulated storage tank capacity',
      'Silent operation with high thermal recovery',
      'Corrosion resistant casing'
    ],
    applications: ['Large Villas', 'Multi-bathroom Homes']
  },
  {
    id: 'dg-res-500',
    slug: 'delta-green-residential-heat-pump-500l',
    name: 'DELTA GREEN Residential Heat Pump 500 LTR',
    brand: 'DELTA GREEN',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    isAuthorisedDistributor: true,
    capacities: ['500 LTR'],
    shortDesc: '500 LTR Residential / Light Commercial Heat Pump system.',
    fullDesc: '500 LTR capacity heat pump system providing high volume hot water output with maximum COP rating.',
    features: [
      'Official Authorised Distributor product support by TGMC',
      '500 LTR high-volume storage vessel',
      'Heavy-duty scroll compressor technology',
      'Automatic temperature setting and display'
    ],
    applications: ['Large Luxury Villas', 'Boutique Hotels', 'Gyms']
  },
  {
    id: 'dg-comm-1000',
    slug: 'delta-green-commercial-heat-pump-1000l',
    name: 'DELTA GREEN Commercial Heat Pump 1000 LTR',
    brand: 'DELTA GREEN',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    isAuthorisedDistributor: true,
    capacities: ['1000 LTR'],
    shortDesc: '1000 LTR Commercial grade heat pump water heating solution.',
    fullDesc: 'Commercial scale heat pump water heater built for hotels, hospitals, apartment complexes, and industrial laundries.',
    features: [
      'Authorised Distributor supply and technical support',
      '1000 LTR capacity hot water delivery',
      'Modular commercial heat pump unit',
      'Centralized hot water distribution ready'
    ],
    applications: ['Apartment Complexes', 'Hotels', 'Hospitals', 'Hostels']
  },
  {
    id: 'dg-comm-2000',
    slug: 'delta-green-commercial-heat-pump-2000l',
    name: 'DELTA GREEN Commercial Heat Pump 2000 LTR',
    brand: 'DELTA GREEN',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    isAuthorisedDistributor: true,
    capacities: ['2000 LTR'],
    shortDesc: '2000 LTR Commercial Heat Pump System for large establishments.',
    fullDesc: '2000 LTR heavy-duty commercial heat pump system for continuous hot water demands.',
    features: [
      'Authorised Distributor product',
      '2000 LTR heavy commercial hot water tank integration',
      'High thermal output design'
    ],
    applications: ['Resorts', 'Large Commercial Buildings', 'Industrial Facilities']
  },
  {
    id: 'dg-comm-3000',
    slug: 'delta-green-commercial-heat-pump-3000l',
    name: 'DELTA GREEN Commercial Heat Pump 3000 LTR',
    brand: 'DELTA GREEN',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    isAuthorisedDistributor: true,
    capacities: ['3000 LTR'],
    shortDesc: '3000 LTR Commercial Heat Pump System.',
    fullDesc: '3000 LTR high-capacity commercial heat pump system supplying large volume hot water.',
    features: ['Authorised Distributor support', '3000 LTR commercial configuration'],
    applications: ['Hospitals', 'Colleges', 'Industrial Laundries']
  },
  {
    id: 'dg-comm-5000',
    slug: 'delta-green-commercial-heat-pump-5000l',
    name: 'DELTA GREEN Commercial Heat Pump 5000 LTR',
    brand: 'DELTA GREEN',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    isAuthorisedDistributor: true,
    capacities: ['5000 LTR'],
    shortDesc: '5000 LTR Heavy Commercial Heat Pump System.',
    fullDesc: '5000 LTR high-output commercial thermal heat pump system for industrial applications.',
    features: ['Authorised Distributor support', '5000 LTR heavy commercial module'],
    applications: ['Large Hotel Chains', 'Manufacturing Plants']
  },
  {
    id: 'dg-comm-10000',
    slug: 'delta-green-commercial-heat-pump-10000l',
    name: 'DELTA GREEN Commercial Heat Pump 10000 LTR',
    brand: 'DELTA GREEN',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    isAuthorisedDistributor: true,
    capacities: ['10000 LTR'],
    shortDesc: '10000 LTR Mega-Capacity Commercial Heat Pump System.',
    fullDesc: '10000 LTR ultimate capacity commercial heat pump water heater for massive centralized hot water projects.',
    features: ['Authorised Distributor support', '10000 LTR maximum output setup'],
    applications: ['Townships', 'Industrial Complexes', 'Mega Resorts']
  },

  // --- V-GUARD PRODUCTS ---
  {
    id: 'vg-solar',
    slug: 'v-guard-solar-water-heater',
    name: 'V-GUARD SOLAR WATER HEATER',
    brand: 'V-GUARD',
    category: 'Solar Water Heater',
    image: '/products/solar-water-heater.png',
    shortDesc: 'Rooftop solar water heater engineered with vacuum tube technology for maximum heat absorption.',
    fullDesc: 'V-Guard Solar Water Heater features high-grade glass evacuated solar tubes and inner hot water tank with protective lining for long service life.',
    features: [
      'Evacuated Glass Tube technology for rapid heating',
      'High density PUF insulation keeps water hot overnight',
      'Suitable for hard water applications with sacrificial anode'
    ],
    applications: ['Rooftops', 'Residential Houses', 'Hostels']
  },
  {
    id: 'vg-heat-pump',
    slug: 'v-guard-heat-pump',
    name: 'V-GUARD HEAT PUMP',
    brand: 'V-GUARD',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    shortDesc: 'All-weather heat pump water heater delivering continuous hot water with low electricity consumption.',
    fullDesc: 'V-Guard Heat Pump unit leverages smart thermodynamic cycles to provide eco-friendly hot water for domestic usage.',
    features: [
      'Smart digital control touch panel',
      'Low noise fan motor operation',
      'Quick thermal recovery rate'
    ],
    applications: ['Homes', 'Villas', 'Guest Houses']
  },
  {
    id: 'vg-pressure-pump',
    slug: 'v-guard-pressure-pump',
    name: 'V-GUARD PRESSURE PUMP',
    brand: 'V-GUARD',
    category: 'Pressure Pump',
    image: '/products/pressure-pump.png',
    shortDesc: 'Automatic water pressure booster pump for consistent water flow in showers and taps.',
    fullDesc: 'V-Guard Pressure Pump maintains uniform line pressure across multiple bathrooms, rain showers, and washing machines simultaneously.',
    features: [
      'Automatic pressure sensor switch',
      'Quiet operation motor',
      'Thermal overload protector'
    ],
    applications: ['Multi-storey Houses', 'Modern Bathrooms', 'Rain Showers']
  },

  // --- RACOLD PRODUCTS ---
  {
    id: 'rac-solar',
    slug: 'racold-solar-water-heater',
    name: 'RACOLD SOLAR WATER HEATER',
    brand: 'RACOLD',
    category: 'Solar Water Heater',
    image: '/products/solar-water-heater.png',
    shortDesc: 'High efficiency solar water heater designed with durable collector technology.',
    fullDesc: 'Racold Solar Water Heater brings international heating engineering to rooftops, providing renewable hot water for domestic requirements.',
    features: [
      'High-grade absorber coating for peak heat transfer',
      'Rust-proof outer body framework',
      'Overheat protection mechanism'
    ],
    applications: ['Residences', 'Gated Communities', 'Hotels']
  },
  {
    id: 'rac-heat-pump',
    slug: 'racold-heat-pump',
    name: 'RACOLD HEAT PUMP',
    brand: 'RACOLD',
    category: 'Heat Pump',
    image: '/products/zero-b-heat-pump.png',
    shortDesc: 'Next-generation heat pump water heater with smart heating technology.',
    fullDesc: 'Racold Heat Pump systems maximize energy efficiency while delivering continuous hot water for domestic and commercial users.',
    features: [
      'Smart heating controller',
      'Corrosion resistant heat exchanger',
      'High COP energy rating'
    ],
    applications: ['Villas', 'Commercial Outlets', 'Spas']
  },

  // --- GRUNDFOS PRODUCTS ---
  {
    id: 'gf-pressure-pump',
    slug: 'grundfos-pressure-pump',
    name: 'GRUNDFOS PRESSURE PUMP',
    brand: 'GRUNDFOS',
    category: 'Pressure Pump',
    image: '/products/pressure-pump.png',
    shortDesc: 'Premium Grundfos automatic pressure booster system for constant water pressure.',
    fullDesc: 'Grundfos Pressure Pumps offer quiet, compact, and highly reliable automatic water boosting for modern residential plumbing networks.',
    features: [
      'Constant pressure control system',
      'Ultra-silent motor operation',
      'Built-in dry-running protection'
    ],
    applications: ['Luxury Villas', 'Bungalows', 'Commercial Kitchens']
  },
  {
    id: 'gf-sump-motor',
    slug: 'grundfos-sump-motor',
    name: 'GRUNDFOS SUMP MOTOR',
    brand: 'GRUNDFOS',
    category: 'Sump Motor',
    image: '/products/sump-motor.png',
    shortDesc: 'Heavy-duty Grundfos submersible sump motor pump for water transfer and dewatering.',
    fullDesc: 'Grundfos Submersible Sump Motor built for reliable underground sump water pumping, basement drainage, and tank transfer.',
    features: [
      'Stainless steel casing and shaft',
      'Automatic float switch mechanism',
      'High discharge flow rate'
    ],
    applications: ['Underground Sumps', 'Basement Dewatering', 'Rainwater Tanks']
  },

  // --- KIRLOSKAR PRODUCTS ---
  {
    id: 'kir-pressure-pump',
    slug: 'kirloskar-pressure-pump',
    name: 'KIRLOSKAR PRESSURE PUMP',
    brand: 'KIRLOSKAR',
    category: 'Pressure Pump',
    image: '/products/pressure-pump.png',
    shortDesc: 'Robust Indian engineered water pressure booster pump system by Kirloskar.',
    fullDesc: 'Kirloskar Pressure Booster Pump designed for tough Indian operating conditions, providing steady water flow to taps and showers.',
    features: [
      'Heavy-duty cast iron / brass impeller construction',
      'Automatic controller kit',
      'Energy efficient motor winding'
    ],
    applications: ['Independent Homes', 'Apartments', 'Commercial Spaces']
  },

  // --- COMMERCIAL RO SYSTEMS (NON-BRAND / CUSTOM) ---
  {
    id: 'comm-ro-25',
    slug: '25-lph-ro-system',
    name: '25 LPH RO SYSTEM',
    brand: 'COMMERCIAL RO',
    category: 'Commercial RO',
    image: '/products/commercial-ro-plant.png',
    capacities: ['25 LPH'],
    shortDesc: '25 Liters Per Hour commercial drinking RO water system.',
    fullDesc: 'Compact 25 LPH RO system designed for small offices, cafes, and clinics requiring purified drinking water.',
    features: [
      '25 LPH purified water flow capacity',
      'High-pressure booster pump assembly',
      'Multi-stage pre-filters and RO membrane'
    ],
    applications: ['Small Offices', 'Cafes', 'Clinics', 'Schools']
  },
  {
    id: 'comm-ro-50',
    slug: '50-lph-ro-system',
    name: '50 LPH RO SYSTEM',
    brand: 'COMMERCIAL RO',
    category: 'Commercial RO',
    image: '/products/commercial-ro-plant.png',
    capacities: ['50 LPH'],
    shortDesc: '50 Liters Per Hour commercial RO water purification plant.',
    fullDesc: '50 LPH commercial reverse osmosis system engineered for offices, restaurants, and medium commercial spaces.',
    features: [
      '50 LPH output flow capacity',
      'Stainless steel mounting frame skid',
      'TDS controller & flow meter'
    ],
    applications: ['Restaurants', 'Medium Offices', 'Sweet Shops']
  },
  {
    id: 'comm-ro-100',
    slug: '100-lph-ro-system',
    name: '100 LPH RO SYSTEM',
    brand: 'COMMERCIAL RO',
    category: 'Commercial RO',
    image: '/products/commercial-ro-plant.png',
    capacities: ['100 LPH'],
    shortDesc: '100 Liters Per Hour commercial RO water purification plant.',
    fullDesc: '100 LPH heavy commercial RO plant featuring dual membranes and industrial pre-treatment vessels.',
    features: [
      '100 LPH continuous output',
      'FRP / SS vessel pre-treatment',
      'Automatic flush controller'
    ],
    applications: ['Corporate Offices', 'Caterers', 'Factories']
  },
  {
    id: 'comm-ro-500',
    slug: '500-lph-ro-system',
    name: '500 LPH RO SYSTEM',
    brand: 'COMMERCIAL RO',
    category: 'Commercial RO',
    image: '/products/commercial-ro-plant.png',
    capacities: ['500 LPH'],
    shortDesc: '500 Liters Per Hour industrial RO water treatment plant.',
    fullDesc: '500 LPH industrial scale reverse osmosis water plant built with high rejection membranes and digital control monitoring panel.',
    features: [
      '500 LPH high-volume purification',
      'Industrial vertical multistage high pressure pump',
      'Digital panel display with conductivity / TDS indicator'
    ],
    applications: ['Hospitals', 'Hotels', 'Manufacturing Plants', 'College Campuses']
  },
  {
    id: 'comm-ro-1000',
    slug: '1000-lph-ro-system',
    name: '1000 LPH RO SYSTEM',
    brand: 'COMMERCIAL RO',
    category: 'Commercial RO',
    image: '/products/commercial-ro-plant.png',
    capacities: ['1000 LPH'],
    shortDesc: '1000 Liters Per Hour heavy industrial RO water plant.',
    fullDesc: '1000 LPH mega capacity commercial RO plant engineered for heavy industrial water processing and large institutional demands.',
    features: [
      '1000 LPH heavy industrial flow capacity',
      'Stainless steel skid framework & piping',
      'Fully automated PLC control panel optional'
    ],
    applications: ['Large Industrial Plants', 'Bottling Units', 'Residential Townships']
  },

  // --- WATER LEVEL CONTROLLERS ---
  {
    id: 'water-level-ctrl',
    slug: 'automatic-water-level-controller',
    name: 'AUTOMATIC WATER LEVEL CONTROLLER',
    brand: 'TGMC',
    category: 'Water Level Controller',
    image: '/products/water-level-controller.png',
    shortDesc: 'Smart automatic water level controller system for overhead tank and sump motor management.',
    fullDesc: 'Automatic water level controller panel that automatically switches the motor ON when the overhead tank is low and OFF when full, preventing water overflow and dry motor running.',
    features: [
      'Automatic ON / OFF operation based on water levels',
      'Prevents water overflow and saves electricity',
      'Dry-run protection for submersible motor safety',
      'LED tank level status indicator indicators'
    ],
    applications: ['Apartments', 'Independent Houses', 'Commercial Buildings']
  },
  // --- SUPREME SOLAR WATER HEATERS ---
  {
    id: 'supreme-solar-red',
    slug: 'supreme-solar-water-heater-red',
    name: 'SUPREME SOLAR WATER HEATER (RED TANK)',
    brand: 'SUPREME SOLAR',
    category: 'Solar Water Heater',
    image: '/products/supreme-solar-red.png',
    shortDesc: 'Premium Supreme Solar evacuated tube collector (ETC) water heater with red outer tank coating.',
    fullDesc: 'Supreme Solar Water Heater features high-grade glass evacuated tubes and a durable, aesthetically pleasing red-coated outer hot water tank. Offers excellent heat retention and rapid heating under sunlight.',
    features: [
      'High-grade red powder coated outer tank',
      'Evacuated Glass Tube (ETC) solar technology',
      'Thick high-density PUF insulation for overnight heat retention',
      'Robust support stand configuration'
    ],
    applications: ['Independent Homes', 'Apartment Rooftops', 'Hostels', 'Gated Communities']
  },
  {
    id: 'supreme-solar-blue-white',
    slug: 'supreme-solar-water-heater-blue-white',
    name: 'SUPREME SOLAR WATER HEATER (BLUE & WHITE TANK)',
    brand: 'SUPREME SOLAR',
    category: 'Solar Water Heater',
    image: '/products/supreme-solar-blue-white.png',
    shortDesc: 'High-efficiency Supreme Solar ETC water heater with blue and white color protection tank.',
    fullDesc: 'Premium Supreme Solar rooftop solar water heater designed with dual blue and white outer tank finish. Built with high heat absorption glass tubes to provide continuous clean hot water.',
    features: [
      'Stunning blue and white protective tank finish',
      'Evacuated Glass Tube (ETC) technology',
      'Inner tank with rust-resistant protection coating',
      'Heavy-duty mounting structure'
    ],
    applications: ['Residential Villas', 'Multi-storey Buildings', 'Hotels & Lodges']
  },
  // --- NON-BRANDED SOLAR WATER HEATERS & ACCESSORIES ---
  {
    id: 'etc-assistant-tank-ss',
    slug: 'non-branded-etc-assistant-tank-stainless-steel',
    name: 'NON-BRANDED ETC SOLAR ASSISTANT TANK (STAINLESS STEEL)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-assistant-tank-ss.png',
    price: '12500/-',
    shortDesc: 'Stainless steel helper makeup tank for solar water heaters to regulate inlet water pressure.',
    fullDesc: 'Stainless Steel Assistant Tank (also known as a makeup or header feed tank) for solar water heaters. It acts as an inlet control tank, reducing raw cold water pressure to prevent damage to the main collector tank. Essential for installations with booster pumps or high overhead tanks.',
    features: [
      'High-grade rustproof Stainless Steel construction',
      'Internal heavy-duty copper float valve for level regulation',
      'Relieves excess pressure on main solar tank',
      'Easy integration on top of main solar water heater'
    ],
    applications: ['Solar Water Heaters with High Pressure Inlet', 'Booster Pump Solar Systems']
  },
  {
    id: 'etc-solar-heater-ss',
    slug: 'non-branded-etc-solar-water-heater-stainless-steel',
    name: 'NON-BRANDED ETC SOLAR WATER HEATER (STAINLESS STEEL TANK)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-solar-heater-ss.png',
    shortDesc: 'Affordable, high-performance ETC solar water heater with stainless steel outer tank.',
    fullDesc: 'Standard non-branded Evacuated Tube Collector (ETC) solar water heater featuring an all-stainless steel outer tank body. Provides excellent resistance to rain and outdoor weather conditions at an economical price point.',
    features: [
      'Rust-proof Stainless Steel outer and inner tanks',
      'Three-target vacuum tubes for maximum sun absorption',
      'Eco-friendly PUF insulation layer',
      'Sturdy galvanized steel stand framework'
    ],
    applications: ['Homes', 'Farm Houses', 'Budget Housing Projects']
  },
  {
    id: 'etc-solar-manifold-header',
    slug: 'non-branded-solar-water-heater-manifold-header',
    name: 'NON-BRANDED SOLAR WATER HEATER MANIFOLD (HEADER BOX)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-solar-manifold-header.png',
    shortDesc: 'Replacement solar manifold header collector box for ETC solar tubes.',
    fullDesc: 'Heavy-duty non-branded solar water heater manifold header collector box. Houses the inlet/outlet headers for evacuated glass tubes, collecting heated water to transfer it to the main storage tank. Ideal for replacement or custom-built solar arrays.',
    features: [
      'Corrosion resistant copper/SS header core',
      'Precision welded tube socket rings for leak prevention',
      'Insulated manifold cover prevents thermal loss',
      'Standard sizes compatible with 58mm ETC tubes'
    ],
    applications: ['Solar System Repairs', 'Custom Solar Collector Arrays', 'Header Replacements']
  },
  {
    id: 'etc-assistant-tank-ss-alt',
    slug: 'non-branded-etc-assistant-tank-stainless-steel-alt',
    name: 'NON-BRANDED STAINLESS STEEL SOLAR ASSISTANT TANK (HEAVY DUTY)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-assistant-tank-ss-alt.png',
    shortDesc: 'Heavy-duty stainless steel makeup feeder tank for high water volume solar systems.',
    fullDesc: 'Premium grade heavy-duty Stainless Steel solar assistant feeder tank. It regulates and matches high-volume cold water input to standard solar heaters, preventing high-pressure expansion leaks or tank ruptures.',
    features: [
      'Reinforced SS body shell',
      'High-flow brass mechanical float valve',
      'Ensures continuous steady flow at standard gravity feed pressure',
      'Universal mounting brackets'
    ],
    applications: ['Large Solar Water Heaters', 'Commercial Solar Installations']
  },
  {
    id: 'etc-solar-heater-red',
    slug: 'non-branded-etc-solar-water-heater-red-tank',
    name: 'NON-BRANDED ETC SOLAR WATER HEATER (RED COATED TANK)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-solar-heater-red.png',
    shortDesc: 'Standard ETC solar water heater with protective red powder coated outer tank.',
    fullDesc: 'Economic non-branded ETC solar water heating system equipped with a weather-shielding red powder coated outer steel tank. Offers reliable hot water output with low maintenance.',
    features: [
      'Red powder coated weatherproof outer tank cover',
      'High efficiency three-layer evacuated tubes',
      'Sacrificial anode to protect against hard water scaling',
      'Sturdy pre-painted structural steel stand'
    ],
    applications: ['Independent Houses', 'Budget Apartments', 'Cottages']
  },
  {
    id: 'etc-assistant-tank-white',
    slug: 'non-branded-etc-assistant-tank-powder-coated-white',
    name: 'NON-BRANDED POWDER COATED SOLAR ASSISTANT TANK (WHITE)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-assistant-tank-white.png',
    shortDesc: 'Powder-coated white finish solar water heater assistant feeder tank.',
    fullDesc: 'White powder-coated steel outer finish assistant makeup tank. Serves as a water level control tank to maintain balanced inlet gravity feed pressure, extending the service life of solar heater systems.',
    features: [
      'Powder-coated white corrosion-proof outer shell',
      'Inner food-grade stainless steel liner',
      'Precision mechanical float switch control',
      'Threaded inlet/outlet connections'
    ],
    applications: ['Standard Solar Water Heaters', 'Gravity Feed Installations']
  },
  {
    id: 'etc-solar-heater-ss-heavy',
    slug: 'non-branded-etc-solar-water-heater-stainless-steel-heavy-duty',
    name: 'NON-BRANDED ETC SOLAR WATER HEATER (STAINLESS STEEL TANK - HEAVY INDUSTRIAL)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-solar-heater-ss-heavy.png',
    shortDesc: 'Heavy-duty industrial grade stainless steel ETC solar water heater.',
    fullDesc: 'High capacity heavy-duty non-branded ETC solar water heater with polished stainless steel tank and robust framing. Designed to withstand industrial water usage and high thermal demands.',
    features: [
      'Extra thick Stainless Steel inner and outer tanks',
      'High-absorption borosilicate glass vacuum tubes',
      'Heavy-gauge hot-dip galvanized mounting stand',
      'Supports high water flow configuration'
    ],
    applications: ['Commercial Buildings', 'Industrial Laundries', 'Hospitals', 'Hostels']
  },
  {
    id: 'etc-solar-heater-red-premium',
    slug: 'non-branded-etc-solar-water-heater-red-tank-premium',
    name: 'NON-BRANDED ETC SOLAR WATER HEATER (RED COATED TANK - PREMIUM)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-solar-heater-red-premium.png',
    shortDesc: 'Premium grade ETC solar water heater with glossy red tank finish.',
    fullDesc: 'High efficiency non-branded solar water heater with a premium gloss red outer coating and high thermal retention insulation. Engineered for superior durability and high-temperature water output.',
    features: [
      'Premium glossy red tank finish with extra anti-rust layer',
      'Rapid heating evacuated tube collector cells',
      'Overnight heat loss less than 4 degrees Celsius',
      'Adjustable slope mounting frame'
    ],
    applications: ['Luxury Residences', 'Villas', 'Row Houses']
  },
  {
    id: 'etc-solar-heater-blue',
    slug: 'non-branded-etc-solar-water-heater-blue-tank',
    name: 'NON-BRANDED ETC SOLAR WATER HEATER (BLUE COATED TANK)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-solar-heater-blue.png',
    shortDesc: 'Standard ETC solar water heater with blue protective coated outer tank.',
    fullDesc: 'Reliable non-branded ETC solar water heater featuring a blue protective powder-coated outer casing. Blends beautifully with rooftop aesthetics and provides high efficiency water heating.',
    features: [
      'Glossy blue powder coated outer tank body',
      'Three-target high temperature solar tubes',
      'High density polyurethane insulation',
      'Galvanized framing and hardware'
    ],
    applications: ['Homes', 'Clinics', 'Residential Penthouses']
  },
  {
    id: 'etc-solar-heater-blue-large',
    slug: 'non-branded-etc-solar-water-heater-blue-tank-heavy-duty',
    name: 'NON-BRANDED ETC SOLAR WATER HEATER (BLUE COATED TANK - HEAVY DUTY)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-solar-heater-blue-large.png',
    shortDesc: 'Heavy-duty high-volume solar water heater with blue outer tank casing.',
    fullDesc: 'High-volume non-branded ETC solar water heater with reinforced blue powder-coated casing and dual backup ports. Perfect for households requiring substantial hot water capacity.',
    features: [
      'Reinforced blue powder coated tank housing',
      'Premium thick insulation layer',
      'Compatible with auxiliary electrical heating element',
      'Robust cross-braced support structure'
    ],
    applications: ['Large Homes', 'PG Hostels', 'Small Guest Houses']
  },
  {
    id: 'etc-solar-heater-white',
    slug: 'non-branded-etc-solar-water-heater-white-tank',
    name: 'NON-BRANDED ETC SOLAR WATER HEATER (WHITE COATED TANK)',
    brand: 'NON-BRANDED',
    category: 'Solar Water Heater',
    image: '/products/etc-solar-heater-white.png',
    shortDesc: 'Standard ETC solar water heater with white powder coated outer tank casing.',
    fullDesc: 'Clean and elegant non-branded ETC solar water heater with white powder-coated outer body. Delivers high heat efficiency and fits neatly into light-colored roof environments.',
    features: [
      'White powder-coated steel outer tank wrap',
      'Borosilicate glass evacuated tubes',
      'Optimal gravity flow output design',
      'Rust-proof steel assembly structure'
    ],
    applications: ['Modern Homes', 'Rooftop Gardens', 'Bungalows']
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
  'Solar Water Heater',
  'Pressure Pump',
  'Sump Motor',
  'Commercial RO',
  'Water Level Controller'
] as const;

export const COMPANY_DETAILS = {
  name: 'TGMC',
  tagline: 'Pure Water. Better Life.',
  subtitle: 'Complete water purification, heating, pumping and water management solutions for homes, businesses and commercial applications.',
  address: 'Hesaragatta Road, Bangalore – 560073',
  phone: '9964750573',
  whatsappNumber: '919964750573',
  formattedWhatsApp: '+91 9964750573',
  location: 'Bangalore – 560073',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6713917409214!2d77.5028453!3d13.0565805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d4f8ff9ff4d%3A0x6b1070220674391c!2sHesaragatta%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};
