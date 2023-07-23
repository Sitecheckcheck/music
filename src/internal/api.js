// const token = '';

export async function getPlaylist() {
  const response = await fetch('https://painassasin.online/catalog/track/all/', {
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });

  if (!response.ok) {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}
