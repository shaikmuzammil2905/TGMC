import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { PRODUCTS as fallbackProducts, BRANDS as fallbackBrands, COMPANY_DETAILS as fallbackCompanyDetails } from '../data/products';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  numberTag?: number;
  features?: string[];
  applications?: string[];
  displayOrder?: number;
  isActive?: boolean;
  isAuthorisedDistributor?: boolean;
  price?: string;
  capacities?: string[];
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  isAuthorised?: boolean;
  description: string;
  categories: string[];
  logoText: string;
  logoUrl?: string;
  displayOrder?: number;
  isActive?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  fullDesc?: string;
  imageUrl?: string;
  category?: string;
  features?: string[];
  displayOrder?: number;
  isActive?: boolean;
}

export interface AboutContent {
  id: string;
  section: string;
  title: string;
  description: string;
  imageUrl?: string;
  displayOrder?: number;
}

export interface ContactSettings {
  company_name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  maps_url?: string;
  maps_embed?: string;
  business_hours?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

interface DataContextType {
  products: Product[];
  brands: Brand[];
  services: Service[];
  aboutContent: AboutContent[];
  contactSettings: ContactSettings;
  categories: string[];
  loading: boolean;
  refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Fallback services list matching current ServicesPage.tsx
const fallbackServices: Service[] = [
  {
    id: 's1',
    slug: 'product-sales',
    name: 'Product Sales',
    description: 'Supply of authentic water softeners, drinking RO purifiers, heat pumps, solar water heaters, pressure pumps, and commercial water plants.',
    features: ['Original manufacturer products', 'Transparent product guidance', 'Residential & commercial supply']
  },
  {
    id: 's2',
    slug: 'installation-support',
    name: 'Installation Support',
    description: 'Professional installation assistance and plumbing setup for water softeners, filtration vessels, RO purifiers, and heat pump water heaters.',
    features: ['Experienced technical team', 'Plumbing & electrical guidance', 'Proper fitting & site testing']
  },
  {
    id: 's3',
    slug: 'water-purification-solutions',
    name: 'Water Purification Solutions',
    description: 'Custom pre-filtration, iron removal, sand filtration, and drinking RO purification for hard water, borewell, or municipal water supplies.',
    features: ['Hard water softeners', 'Borewell iron filter tanks', 'Under-sink & countertop RO purifiers']
  },
  {
    id: 's4',
    slug: 'heat-pump-solutions',
    name: 'Heat Pump Solutions',
    description: 'Residential and commercial heat pump water heating systems for all-weather 24x7 hot water with energy efficient air-source technology.',
    features: ['Delta Green & Zero B heat pumps', '200 LTR to 10000 LTR capacities', 'Residential & enterprise systems']
  },
  {
    id: 's5',
    slug: 'pump-solutions',
    name: 'Pump Solutions',
    description: 'High performance water pressure booster pumps and submersible sump motors for uniform pressure in showers and drainage management.',
    features: ['Grundfos & Kirloskar pressure pumps', 'Automatic pressure controllers', 'Submersible sump motors']
  },
  {
    id: 's6',
    slug: 'commercial-ro-solutions',
    name: 'Commercial RO Solutions',
    description: 'Heavy-duty industrial reverse osmosis plants ranging from 25 LPH up to 1000 LPH for offices, restaurants, hospitals, and factories.',
    features: ['25 LPH to 1000 LPH plants', 'Stainless steel skid mounting', 'Membrane pre-treatment']
  },
  {
    id: 's7',
    slug: 'service-and-support',
    name: 'Service & Support',
    description: 'Ongoing product-related technical guidance, filter cartridge replacement support, membrane servicing, and customer support.',
    features: ['Bangalore local support', 'Hesaragatta Road location desk', 'Prompt technical assistance']
  }
];

// Fallback About Us sections
const fallbackAbout: AboutContent[] = [
  {
    id: 'a1',
    section: 'intro',
    title: 'Pure Water. Better Life.',
    description: 'TGMC (The General Material Corporation) is a dedicated sales and service enterprise dealing in water purification systems, softeners, RO systems, heat pumps, solar water heaters, and pressure pumps based in Hesaragatta Road, Bangalore – 560073.'
  },
  {
    id: 'a2',
    section: 'focus',
    title: 'Our Core Product & Service Focus',
    description: 'We specialize in providing complete domestic and commercial water management solutions. Our portfolio spans automatic water softeners for hard water treatment, multi-grade sand and carbon filters, specialized iron removal systems, under-sink drinking RO purifiers, energy-efficient heat pump water heaters, rooftop solar water heaters, pressure booster pumps, sump motors, and industrial commercial RO plants.'
  }
];

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [aboutContent, setAboutContent] = useState<AboutContent[]>([]);
  const [contactSettings, setContactSettings] = useState<ContactSettings>({
    company_name: fallbackCompanyDetails.name,
    phone: fallbackCompanyDetails.phone,
    whatsapp: fallbackCompanyDetails.phone,
    email: 'info@tgmc.com',
    address: fallbackCompanyDetails.address,
    maps_url: '',
    maps_embed: fallbackCompanyDetails.mapsEmbed,
    business_hours: 'Sales & Service Support Available 24x7'
  });
  const [categories, setCategories] = useState<string[]>(['All']);
  const [loading, setLoading] = useState(true);

  const refreshData = async () => {
    try {
      setLoading(true);

      // 1. Fetch Contact Settings
      const { data: contactData, error: contactErr } = await supabase
        .from('contact_settings')
        .select('*')
        .limit(1);

      if (contactData && contactData.length > 0) {
        setContactSettings(contactData[0]);
      } else {
        // Fallback to static defaults
        setContactSettings({
          company_name: fallbackCompanyDetails.name,
          phone: fallbackCompanyDetails.phone,
          whatsapp: fallbackCompanyDetails.phone,
          email: 'info@tgmc.com',
          address: fallbackCompanyDetails.address,
          maps_url: '',
          maps_embed: fallbackCompanyDetails.mapsEmbed,
          business_hours: 'Sales & Service Support Available 24x7'
        });
      }

      // 2. Fetch Brands
      const { data: brandsData } = await supabase
        .from('brands')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (brandsData && brandsData.length > 0) {
        setBrands(brandsData.map(b => ({
          id: b.id,
          name: b.name,
          tagline: b.tagline || '',
          isAuthorised: b.is_authorised,
          description: b.description || '',
          categories: b.categories || [],
          logoText: b.logo_text || '',
          logoUrl: b.logo_url || ''
        })));
      } else {
        setBrands(fallbackBrands.map(b => ({
          id: b.id,
          name: b.name,
          tagline: b.tagline,
          isAuthorised: b.isAuthorised,
          description: b.description,
          categories: b.categories,
          logoText: b.logoText
        })));
      }

      // 3. Fetch Products
      const { data: productsData } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (productsData && productsData.length > 0) {
        setProducts(productsData.map(p => {
          const brandObj = brandsData?.find(b => b.id === p.brand_id);
          return {
            id: p.id,
            slug: p.slug,
            name: p.name,
            brand: p.brand_id, // Store brand ID directly
            category: p.category,
            image: p.image_url,
            numberTag: p.number_tag || undefined,
            isHeroFeatured: p.is_hero_featured,
            shortDesc: p.short_desc || '',
            fullDesc: p.full_desc || '',
            features: p.features || [],
            applications: p.applications || [],
            isAuthorisedDistributor: brandObj ? brandObj.is_authorised : false,
            price: undefined,
            capacities: []
          };
        }));

        const uniqCats = Array.from(new Set(productsData.map(p => p.category)));
        setCategories(['All', ...uniqCats]);
      } else {
        setProducts(fallbackProducts.map(p => ({
          id: p.id,
          slug: p.slug,
          name: p.name,
          brand: p.brand,
          category: p.category,
          image: p.image,
          numberTag: p.numberTag,
          isHeroFeatured: p.isHeroFeatured,
          shortDesc: p.shortDesc,
          fullDesc: p.fullDesc,
          features: p.features,
          applications: p.applications,
          isAuthorisedDistributor: p.isAuthorisedDistributor,
          price: p.price,
          capacities: p.capacities
        })));
        
        const uniqCats = Array.from(new Set(fallbackProducts.map(p => p.category)));
        setCategories(['All', ...uniqCats]);
      }

      // 4. Fetch Services
      const { data: servicesData } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (servicesData && servicesData.length > 0) {
        setServices(servicesData.map(s => ({
          id: s.id,
          slug: s.slug,
          name: s.name,
          description: s.description,
          fullDesc: s.full_desc || '',
          imageUrl: s.image_url || '',
          category: s.category || '',
          features: s.features || []
        })));
      } else {
        setServices(fallbackServices);
      }

      // 5. Fetch About Content
      const { data: aboutData } = await supabase
        .from('about_content')
        .select('*')
        .order('display_order', { ascending: true });

      if (aboutData && aboutData.length > 0) {
        setAboutContent(aboutData);
      } else {
        setAboutContent(fallbackAbout);
      }

    } catch (err) {
      console.error("Error loading data from Supabase, loading fallback static variables:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <DataContext.Provider value={{
      products,
      brands,
      services,
      aboutContent,
      contactSettings,
      categories,
      loading,
      refreshData
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
export default DataContext;
