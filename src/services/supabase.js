import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://svgcwaovdaoxemgfsjci.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2Z2N3YW92ZGFveGVtZ2ZzamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3MzUwODYsImV4cCI6MjAxNjMxMTA4Nn0.rt4OdfSYnomjaPO05zPPFgkk1nNwcXuXx7M5v6f0Mt0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
