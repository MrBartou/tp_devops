const db = require('../models/favoris.models');

async function getFavorisById(idUser) {
    return db.findAll({ where: { idUser } });
}

function addFavoris(favoris) {
    return db.create(favoris);
}

function updateFavoris(favoris, id) {
    return db.update(favoris, { where: { id } });
}

function deleteFavoris(idUser, idMedia) {
    return db.destroy({ where: { idUser, idMedia } });
}

module.exports = {
    getFavorisById,
    addFavoris,
    updateFavoris,
    deleteFavoris
};