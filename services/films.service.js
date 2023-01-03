const db = require('../models/users.models');
const axios = require('axios');

async function getFilms() {
    var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=e7adc7afaa75e1597d6a121e930e59ee&language=fr-FR',
        headers: {}
    };
    const result = await axios(config);
    return result.data.results;
}

module.exports = {
    getFilms,
};
