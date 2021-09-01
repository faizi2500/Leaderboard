const sendScores = async(name, score, gameUrl) => {
  const data = await fetch(gameUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name, 
      score, 
    }),
  });
  console.log(data.json());
};

export default sendScores;