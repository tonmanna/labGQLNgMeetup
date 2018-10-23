const fetch = require('node-fetch');
exports.fetchLeagueAPI = async (req, res) => {
  var url = 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues';
  var options = {
    method: "GET",
    headers: {
      'X-Mashape-Key': 'ZqAO9XW13qmshFt97YltTFOOGDjhp1dHh00jsnD8ztb0FcWmpG',
      'Accept': 'application/json'
    }
  };
  let response = await fetch(url, options);
  let data = await response.json();
  res.setHeader('Content-Type', 'application/json');
  res.send(data.data.leagues);
}
