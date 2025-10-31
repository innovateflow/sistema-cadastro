import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  const supabaseUrl = config.public.supabaseUrl as string
  const supabaseKey = config.public.supabaseKey as string
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key are required. Please check your environment variables.')
  }
  
  const supabase = createClient(supabaseUrl, supabaseKey)
  
  return {
    provide: {
      supabase: supabase as SupabaseClient
    }
  }
})