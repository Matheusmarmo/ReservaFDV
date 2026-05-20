// ============================================================
//  FDV — Configuração centralizada do Supabase
//  Substitua os valores abaixo pelos do seu projeto:
//  Painel Supabase → Project Settings → API
// ============================================================

const SUPABASE_URL      = 'https://wfniapkstveovsnbjolw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cJcJk_eDUzLjgNWVahX3jQ_C0U3Ub7r';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
