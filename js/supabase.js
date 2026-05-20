// ============================================================
//  FDV — Configuração centralizada do Supabase
//  Substitua os valores abaixo pelos do seu projeto:
//  Painel Supabase → Project Settings → API
// ============================================================

const SUPABASE_URL      = 'https://wfniapkstveovsnbjolw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmbmlhcGtzdHZlb3ZzbmJqb2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3MjM3MzksImV4cCI6MjA5NDI5OTczOX0.SlHGn28rQ6buW_h16HM0bnHBRuq9Ulls1S71dnLlXnc';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
