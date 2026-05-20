// ============================================================
//  FDV — Autenticação e controle de perfis
// ============================================================

// Retorna a sessão ativa ou null
async function getSession() {
  const { data: { session } } = await db.auth.getSession();
  return session;
}

// Retorna o perfil do usuário logado
async function getUserPerfil(userId) {
  const { data, error } = await db
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) return null;
  return data;
}

// Protege a página: redireciona para login se não houver sessão
// perfisPermitidos: array com os perfis que podem acessar, ex: ['admin']
async function protegerPagina(perfisPermitidos = []) {
  const session = await getSession();
  if (!session) {
    window.location.href = 'index.html';
    return null;
  }

  const perfil = await getUserPerfil(session.user.id);
  if (!perfil || !perfil.ativo) {
    await db.auth.signOut();
    window.location.href = 'index.html';
    return null;
  }

  if (perfisPermitidos.length > 0 && !perfisPermitidos.includes(perfil.perfil)) {
    window.location.href = 'reservas.html';
    return null;
  }

  return perfil;
}

// Faz logout e redireciona para login
async function logout() {
  await db.auth.signOut();
  window.location.href = 'index.html';
}
