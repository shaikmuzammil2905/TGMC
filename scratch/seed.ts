import { createClient } from '@supabase/supabase-js';
import { PRODUCTS, BRANDS, COMPANY_DETAILS } from '../src/data/products';

const supabaseUrl = 'https://qteihhbixhnjlhemgpcl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0ZWloaGJpeGhuamxoZW1ncGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2NTg5OTQsImV4cCI6MjEwMjIzNDk5NH0.MDlrf0OaIs-AvmupoC6vzR3m4DkPjO225qPLUxiPymw';

const supabase = createClient(supabaseUrl, supabaseKey);

const adminEmail = 'admin@tgmc.com';
const adminPassword = 'adminTGMC2026!';

async function seed() {
  console.log("Starting Supabase database seeding...");

  // 1. Sign up/Register admin user if not exists
  console.log("Checking / Creating admin user...");
  const { data: signUpData, error: signUpErr } = await supabase.auth.signUp({
    email: adminEmail,
    password: adminPassword,
  });

  if (signUpErr) {
    console.log("Admin user sign up result (might already exist):", signUpErr.message);
  } else {
    console.log("Admin user successfully registered (or confirmation email sent):", signUpData.user?.email);
  }

  // 2. Sign in to get session
  console.log("Signing in as admin...");
  const { data: signInData, error: signInErr } = await supabase.auth.signInWithPassword({
    email: adminEmail,
    password: adminPassword,
  });

  if (signInErr) {
    console.error("Sign in failed. Make sure database schema & Auth settings allow signups:", signInErr.message);
    return;
  }
  
  const token = signInData.session?.access_token;
  console.log("Authenticated successfully.");

  // Re-create supabase client with the session token to bypass RLS policies
  const adminSupabase = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  });

  // 3. Seed contact_settings
  console.log("Seeding contact_settings...");
  const { error: contactErr } = await adminSupabase.from('contact_settings').upsert({
    company_name: COMPANY_DETAILS.name,
    phone: COMPANY_DETAILS.phone,
    whatsapp: COMPANY_DETAILS.phone,
    email: 'sales@tgmc.com',
    address: COMPANY_DETAILS.address,
    maps_url: '',
    maps_embed: COMPANY_DETAILS.mapsEmbed,
    business_hours: 'Sales & Service Support Available 24x7',
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: ''
  });
  if (contactErr) console.error("Error seeding contact_settings:", contactErr.message);
  else console.log("Seeded contact_settings.");

  // 4. Seed home_content
  console.log("Seeding home_content...");
  const homeSections = [
    {
      section: 'hero',
      title: 'Pure Water. Better Life.',
      subtitle: 'Authorised sales & service solutions for ZERO B water purifiers, automatic softeners, filters, and heat pumps in Bangalore & Karnataka.',
      description: 'TGMC provides complete domestic and commercial water management solutions.',
      button_text: 'Get a Quote',
      button_url: '/contact',
      whatsapp_number: COMPANY_DETAILS.phone,
      phone_number: COMPANY_DETAILS.phone,
      display_order: 1
    }
  ];
  for (const sec of homeSections) {
    const { error } = await adminSupabase.from('home_content').insert(sec);
    if (error) console.error("Error seeding home_content:", error.message);
  }
  console.log("Seeded home_content.");

  // 5. Seed about_content
  console.log("Seeding about_content...");
  const aboutSections = [
    {
      section: 'intro',
      title: 'Pure Water. Better Life.',
      description: 'TGMC (The General Material Corporation) is a dedicated sales and service enterprise dealing in water purification systems, softeners, RO systems, heat pumps, solar water heaters, and pressure pumps based in Hesaragatta Road, Bangalore – 560073.',
      display_order: 1
    },
    {
      section: 'focus',
      title: 'Our Core Product & Service Focus',
      description: 'We specialize in providing complete domestic and commercial water management solutions. Our portfolio spans automatic water softeners for hard water treatment, multi-grade sand and carbon filters, specialized iron removal systems, under-sink drinking RO purifiers, energy-efficient heat pump water heaters, rooftop solar water heaters, pressure booster pumps, sump motors, and industrial commercial RO plants.',
      display_order: 2
    }
  ];
  for (const sec of aboutSections) {
    const { error } = await adminSupabase.from('about_content').insert(sec);
    if (error) console.error("Error seeding about_content:", error.message);
  }
  console.log("Seeded about_content.");

  // 6. Seed brands
  console.log("Seeding brands...");
  for (let i = 0; i < BRANDS.length; i++) {
    const b = BRANDS[i];
    const { error } = await adminSupabase.from('brands').upsert({
      id: b.id,
      name: b.name,
      tagline: b.tagline,
      is_authorised: b.isAuthorised || false,
      description: b.description,
      categories: b.categories,
      logo_text: b.logoText,
      display_order: i + 1,
      is_active: true
    });
    if (error) console.error(`Error seeding brand ${b.name}:`, error.message);
  }
  console.log("Seeded brands.");

  // 7. Seed products
  console.log("Seeding products...");
  for (let i = 0; i < PRODUCTS.length; i++) {
    const p = PRODUCTS[i];
    // Find if the brand exists in the BRANDS list to match slug (like 'zero-b' or 'kent')
    const brandMatch = BRANDS.find(b => b.name.toLowerCase() === p.brand.toLowerCase());
    const brandId = brandMatch ? brandMatch.id : 'other-brands';

    const { error } = await adminSupabase.from('products').upsert({
      id: p.id,
      slug: p.slug,
      name: p.name,
      brand_id: brandId,
      category: p.category,
      image_url: p.image,
      number_tag: p.numberTag || null,
      is_hero_featured: p.isHeroFeatured || false,
      short_desc: p.shortDesc,
      full_desc: p.fullDesc,
      features: p.features || [],
      applications: p.applications || [],
      display_order: i + 1,
      is_active: true
    });
    if (error) console.error(`Error seeding product ${p.name}:`, error.message);
  }
  console.log("Seeded products.");

  // 8. Seed services
  console.log("Seeding services...");
  const fallbackServices = [
    {
      slug: 'product-sales',
      name: 'Product Sales',
      description: 'Supply of authentic water softeners, drinking RO purifiers, heat pumps, solar water heaters, pressure pumps, and commercial water plants.',
      features: ['Original manufacturer products', 'Transparent product guidance', 'Residential & commercial supply'],
      category: 'Sales',
      display_order: 1
    },
    {
      slug: 'installation-support',
      name: 'Installation Support',
      description: 'Professional installation assistance and plumbing setup for water softeners, filtration vessels, RO purifiers, and heat pump water heaters.',
      features: ['Experienced technical team', 'Plumbing & electrical guidance', 'Proper fitting & site testing'],
      category: 'Installation',
      display_order: 2
    },
    {
      slug: 'water-purification-solutions',
      name: 'Water Purification Solutions',
      description: 'Custom pre-filtration, iron removal, sand filtration, and drinking RO purification for hard water, borewell, or municipal water supplies.',
      features: ['Hard water softeners', 'Borewell iron filter tanks', 'Under-sink & countertop RO purifiers'],
      category: 'Water Treatment',
      display_order: 3
    },
    {
      slug: 'heat-pump-solutions',
      name: 'Heat Pump Solutions',
      description: 'Residential and commercial heat pump water heating systems for all-weather 24x7 hot water with energy efficient air-source technology.',
      features: ['Delta Green & Zero B heat pumps', '200 LTR to 10000 LTR capacities', 'Residential & enterprise systems'],
      category: 'Heating',
      display_order: 4
    },
    {
      slug: 'pump-solutions',
      name: 'Pump Solutions',
      description: 'High performance water pressure booster pumps and submersible sump motors for uniform pressure in showers and drainage management.',
      features: ['Grundfos & Kirloskar pressure pumps', 'Automatic pressure controllers', 'Submersible sump motors'],
      category: 'Pumps',
      display_order: 5
    },
    {
      slug: 'commercial-ro-solutions',
      name: 'Commercial RO Solutions',
      description: 'Heavy-duty industrial reverse osmosis plants ranging from 25 LPH up to 1000 LPH for offices, restaurants, hospitals, and factories.',
      features: ['25 LPH to 1000 LPH plants', 'Stainless steel skid mounting', 'Membrane pre-treatment'],
      category: 'Commercial Water',
      display_order: 6
    },
    {
      slug: 'service-and-support',
      name: 'Service & Support',
      description: 'Ongoing product-related technical guidance, filter cartridge replacement support, membrane servicing, and customer support.',
      features: ['Bangalore local support', 'Hesaragatta Road location desk', 'Prompt technical assistance'],
      category: 'Support',
      display_order: 7
    }
  ];
  for (const s of fallbackServices) {
    const { error } = await adminSupabase.from('services').upsert(s);
    if (error) console.error(`Error seeding service ${s.name}:`, error.message);
  }
  console.log("Seeded services.");

  console.log("Database seeding completed successfully!");
}

seed().catch(err => console.error("Exception in seeding:", err));
