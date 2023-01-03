const axios = require('axios');

async function getRecommandation() {
    var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=e7adc7afaa75e1597d6a121e930e59ee&language=fr-FR&page=1&region=FR',
        headers: {}
    };
    const result = await axios(config);
    return result.data.results;
}

module.exports = {
    getRecommandation,
};