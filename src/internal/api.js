export async function getPlaylistId(id) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}`,
  );

  if (!response.ok) {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}

export async function registerUser(login, password) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: `${login}`,
        password: `${password}`,
        username: `${login}`,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  );

  if (!response.ok && !response.status === '400') {
    throw new Error('Сервер сломался');
  }

  const data = await response.json();
  return data;
}

export async function authUser(login, password) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/login/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: `${login}`,
        password: `${password}`,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  );

  if (!response.ok && !response.status === '400') {
    throw new Error('Сервер сломался');
  }

  const data = await response.json();
  return data;
}

export async function getToken(login, password) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: `${login}`,
        password: `${password}`,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  );

  if (!response.ok && !response.status === '400') {
    throw new Error('Сервер сломался');
  }

  const data = await response.json();
  return data;
}

export async function refreshingToken(refresh) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/refresh/',
    {
      method: 'POST',
      body: JSON.stringify({
        refresh: `${refresh}`,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  );

  if (!response.ok && !response.status === '400') {
    throw new Error('Сервер сломался');
  }

  const data = await response.json();

  return data;
}

export async function addFavorite(id, accessToken) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
    },
  );

  if (!response.ok) {
    if(response.status === 401) {
      const refteshToken = localStorage.getItem('refresh');
      const token = await refreshingToken(refteshToken)

      localStorage.setItem('access', token.access);
      // window.location.reload();
    } else {
      throw new Error('Ошибка сервера');
    }  
  }

  const data = await response.json();

  return data;
}

export async function deleteFavorite(id, accessToken) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
    },
  );

  if (!response.ok) {
    if(response.status === 401) {
      const refteshToken = localStorage.getItem('refresh');
      const token = await refreshingToken(refteshToken)

      localStorage.setItem('access', token.access);
      // window.location.reload();
    } else {
      throw new Error('Ошибка сервера');
    }  
  }

  const data = await response.json();

  return data;
}