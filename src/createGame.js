const createGame = async (url) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(
      {
        name: 'Chess Game',
      },
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export default createGame;