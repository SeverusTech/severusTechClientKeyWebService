import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mobgvyyfwsgwzbyvxgoc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vYmd2eXlmd3Nnd3pieXZ4Z29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUxMzE3MTUsImV4cCI6MjAwMDcwNzcxNX0.09JnjVN0OFKNn31DfjsBq4YfdVp6MuFo9xtHgPQYjMA';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
