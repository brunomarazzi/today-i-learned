import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lavtfvqazheiwqmrusyn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhdnRmdnFhemhlaXdxbXJ1c3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NTkyNTMsImV4cCI6MjAzMDMzNTI1M30.IaNy9npc7HKvtOqQw8OEwp1a9hqvdVVNc7OrcOi6SMY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
