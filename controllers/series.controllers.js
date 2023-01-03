const seriesServices = require('../services/series.service');
const client = require('../redis');

async function getSeries(req, res) {

    // Check if the key exists in the cache
    client.get('series', async (err, data) => {
        if (err) throw err;

        // If the key exists in the cache, return the data
        if (data !== null) {
            return res.status(200).json({
                success: true,
                data: JSON.parse(data),
            });
        } else {
            // If the key does not exist in the cache, fetch the data from the database
            const series = await seriesServices.getSeries();
            if (series) {
                // Store the data in the cache
                client.set('series', JSON.stringify(series));
                return res.status(200).json({
                    success: true,
                    data: series,
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'No series found',
                });
            }
        }
    });
}

module.exports = {
    getSeries,
};