import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://smecrxbzxtgkbvirphnz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZWNyeGJ6eHRna2J2aXJwaG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4OTQzODMsImV4cCI6MjAxNTQ3MDM4M30.9ZBqCcS4trfWyNNM3XcY8QZPJkDtJhhza3y3hX9UVsM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
