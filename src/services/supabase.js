import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tdzggviulrvfnltfrpbu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkemdndml1bHJ2Zm5sdGZycGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MDgxNTgsImV4cCI6MjAxNDA4NDE1OH0.TYxNl4WWXnc_6BDvvyWZF2_7W7z12GI_Scgez1ZOqps";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
