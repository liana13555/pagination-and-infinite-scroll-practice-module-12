export const getUsers = (page, limit) => {
  const baseUrl = `https://60a6ad00b970910017eb2287.mockapi.io/users/?page=${page}&limit=${limit}`;

  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(e => console.log("oooooo"));
};
