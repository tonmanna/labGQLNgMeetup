const fetch = require('node-fetch');
var options = {
    method: 'GET',
    headers: {
        'X-Mashape-Key': 'ZqAO9XW13qmshFt97YltTFOOGDjhp1dHh00jsnD8ztb0FcWmpG',
        Accept: 'application/json'
    }
};
exports.getLeagues = async () => {
    var url = 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues';
    let response = await fetch(url, options);
    let data = await response.json();
    return data.data.leagues;
};

exports.getSeasonAvailable = async league_slug => {
    var url = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${league_slug}/seasons`;
    let response = await fetch(url, options);
    let data = await response.json();
    return data.data.seasons;
};

exports.getLeageTopScore = async (league_slug, season_slug) => {
    var url = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${league_slug}/seasons/${season_slug}/topscorers`;
    let response = await fetch(url, options);
    let data = await response.json();
    return data.data.topscorers;
};
