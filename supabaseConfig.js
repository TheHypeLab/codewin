import { createClient } from '@supabase/supabase-js';\n\nconst SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;\nconst SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;\n\nconst supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);\n\nexport default supabase;