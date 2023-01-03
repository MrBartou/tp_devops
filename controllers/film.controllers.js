const filmsServices = require('../services/films.service');
const client = require('../redis');

async function getFilms(req, res) {

  // Check if the key exists in the cache
  client.get('films', async (err, data) => {
    if (err) throw err;

    // If the key exists in the cache, return the data
    if (data !== null) {
      return res.status(200).json({
        success: true,
        data: JSON.parse(data),
      });
    } else {
      // If the key does not exist in the cache, fetch the data from the database
      const films = await filmsServices.getFilms();
      if (films) {
        // Store the data in the cache
        client.set('films', JSON.stringify(films));
        return res.status(200).json({
          success: true,
          data: films,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: 'No films found',
        });
      }
    }
  });
}

module.exports = {
  getFilms,
};