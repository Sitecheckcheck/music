export async function getPlaylist() {
  const response = await fetch(
    'https://painassasin.online/catalog/track/all/',
  );

  if (!response.ok) {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}

export async function registerUser(login, password) {
  const response = await fetch('https://painassasin.online/user/signup/', {
    method: 'POST',
    body: JSON.stringify({
      email: `${login}`,
      password: `${password}`,
      username: `${login}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Сервер сломался');
  }

  const data = await response.json();
  return data;
}

export async function authUser(login, password) {
  const response = await fetch('https://painassasin.online/user/login/', {
    method: 'POST',
    body: JSON.stringify({
      email: `${login}`,
      password: `${password}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Сервер сломался');
  }

  const data = await response.json();
  return data;
}
