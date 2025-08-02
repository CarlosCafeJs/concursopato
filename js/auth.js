// auth.js
// Script para autenticação OAuth2 com a Hotmart

const HOTMART_AUTH_URL = 'https://api-sec-vlc.hotmart.com/security/oauth/authorize';
const HOTMART_TOKEN_URL = 'https://api-sec-vlc.hotmart.com/security/oauth/token';

// Substitua com os dados do seu app criado no Hotmart Developers
const CLIENT_ID = '12c2c339-12d7-4436-beac-1041058e14e8';
const CLIENT_SECRET = '1a0233c3-e228-4e99-be4e-65f7eae8b2be';
const REDIRECT_URI = 'https://concursopato.vercel.app/';
const SCOPE = 'all'; // Ajuste conforme necessário

function iniciarAutenticacaoHotmart() {
  const authUrl = `${HOTMART_AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=${SCOPE}`;
  window.location.href = authUrl;
}

async function obterTokenHotmart(code) {
  const body = new URLSearchParams();
  body.append('grant_type', 'authorization_code');
  body.append('code', code);
  body.append('client_id', CLIENT_ID);
  body.append('client_secret', CLIENT_SECRET);
  body.append('redirect_uri', REDIRECT_URI);

  try {
    const response = await fetch(HOTMART_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const tokenData = await response.json();
    console.log('Token de acesso Hotmart:', tokenData);
    localStorage.setItem('hotmart_access_token', tokenData.access_token);
    // Armazene também o refresh_token se retornado: localStorage.setItem('hotmart_refresh_token', tokenData.refresh_token);

    // Aqui você pode redirecionar o usuário ou continuar o fluxo
    alert('Autenticado com sucesso via Hotmart!');
  } catch (error) {
    console.error('Erro ao obter token da Hotmart:', error);
  }
}

// Detecta se veio com code na URL após autenticação
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code) {
    obterTokenHotmart(code);
    // Opcional: Limpe o code da URL para segurança: history.replaceState({}, '', window.location.pathname);
  }
});