import { createClient } from "@supabase/supabase-js";

const baseUrl = "https://lmxyjzrfsvimvhjshttl.supabase.co";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxteHlqenJmc3ZpbXZoanNodHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1NTcyOTgsImV4cCI6MjAyMDEzMzI5OH0.LQZyuVFDg8-m9xzUBliRT_oD4yA20qSYHq_jhFBvlYY";

export const supabase = createClient(baseUrl, apiKey);
