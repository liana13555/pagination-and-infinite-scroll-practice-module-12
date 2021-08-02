export const getUsers = (page, limit) => {
  const baseUrl = `https://60a6ad00b970910017eb2287.mockapi.io/users/?page=${page}&limit=${limit}`;

  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json" // headers - объект, кот.хранит опред. кол-во данных для взаимодействия с бэкендом
    }
  })
    .then(response => response.json()) // получает данные и превращает в json, (распарсили данные)
    .then(data => data)                // получает распарсинные данные и возвращает их
    .catch(e => console.log("oooooo"));
};
