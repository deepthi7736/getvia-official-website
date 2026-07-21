import { createClient } from "@supabase/supabase-js";

// These come from Vercel → Project Settings → Environment Variables,
// NOT from a committed file. Vite injects them at build time.
// Both are safe to expose in the browser — the anon/publishable key is
// designed for client-side use, and your data is protected separately
// by the Row Level Security policies in sql/schema.sql.
const SUPABASE_URL = "https://your-project-ref.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_-hO-aknr8Jv9NSDhfTOvvQ_6mEcACtm";

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY " +
      "in Vercel → Project Settings → Environment Variables, then redeploy."
  );
}

export const supabase = createClient(
  supabaseUrl ?? "",
  supabaseAnonKey ?? ""
);
