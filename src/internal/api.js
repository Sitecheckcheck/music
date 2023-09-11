// export async function getPlaylist() {
//   const response = await fetch('https://painassasin.online/catalog/track/all/');

//   if (!response.ok) {
//     throw new Error('Ошибка сервера');
//   }

//   const data = await response.json();
//   return data;
// }

export async function getPlaylist() {
  const data = [
    {
      id: 1,
      name: 'Guilt',
      author: 'Nero',
      release_date: '2005-06-11',
      genre: 'Техно',
      duration_in_seconds: 284,
      album: 'Welcome Reality',
      logo: null,
      track_file:
        '/music/Asa Taura - Fractal.mp3',
      stared_user: [],
    },
    {
      id: 2,
      name: 'Elektro',
      author: 'Dynoro, Outwork, Mr. Gee',
      release_date: '2010-06-11',
      genre: 'Инди',
      duration_in_seconds: 352,
      album: 'Elektro',
      logo: null,
      track_file:
        '/music/Sinitana - Closer to Dolphins.mp3',
      stared_user: [],
    },
    {
      id: 3,
      name: 'I’m Fire',
      author: 'Ali Bakgor',
      release_date: '2015-06-11',
      genre: 'Техно',
      duration_in_seconds: 234,
      album: 'I’m Fire',
      logo: null,
      track_file:
        '/music/Desired Bit - Just Be Quiet (Original Mix).mp3',
      stared_user: [],
    },
  ];
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

// export async function authUser(login, password) {
//   const response = await fetch('https://painassasin.online/user/login/', {
//     method: 'POST',
//     body: JSON.stringify({
//       email: `${login}`,
//       password: `${password}`,
//     }),
//     headers: {
//       'content-type': 'application/json',
//     },
//   });

//   if (!response.ok && !response.status === '400') {
//     throw new Error('Сервер сломался');
//   }

//   const data = await response.json();
//   return data;
// }

export async function authUser(login, password) {
  const user = { username: login, password, id: '1' };
  return user;
}

// export async function getToken(login, password) {
//   const response = await fetch('https://painassasin.online/user/token/', {
//     method: 'POST',
//     body: JSON.stringify({
//       email: `${login}`,
//       password: `${password}`,
//     }),
//     headers: {
//       'content-type': 'application/json',
//     },
//   });

//   if (!response.ok && !response.status === '400') {
//     throw new Error('Сервер сломался');
//   }

//   const data = await response.json();
//   return data;
// }

export async function getToken(login, password) {
  const token = { login, password, refresh: '1234' };
  return token;
}
