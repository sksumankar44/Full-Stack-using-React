import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lpyserrlljjjgizcmjow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxweXNlcnJsbGpqamdpemNtam93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4OTMwMzIsImV4cCI6MjAzMDQ2OTAzMn0.QFBOoebZ4-JG20JmHlhW_lZ5nVEOeH1WEMiv4XfSzPw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
