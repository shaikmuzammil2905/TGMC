import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qteihhbixhnjlhemgpcl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0ZWloaGJpeGhuamxoZW1ncGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2NTg5OTQsImV4cCI6MjEwMjIzNDk5NH0.MDlrf0OaIs-AvmupoC6vzR3m4DkPjO225qPLUxiPymw';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Checking connection...");
try {
  const { data, error } = await supabase.from('products').select('*').limit(1);
  if (error) {
    console.log("Connection check result (error details):", error.message, error.code);
  } else {
    console.log("Success! Table 'products' exists. Data:", data);
  }
} catch (e) {
  console.log("Exception thrown:", e.message);
}
