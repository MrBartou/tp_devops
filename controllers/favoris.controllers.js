const FavorisService = require('../services/favoris.service');
const db = require("../models/favoris.models");

async function getFavorisById(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        const favoris = await FavorisService.getFavorisById(req.params.id);

        if (!favoris) {
            return res.status(404).json({ message: 'Favoris not found' });
        } else {
            return res.status(200).json(favoris);
        }
    }
}

async function addFavoris(req, res) {
    if (!req.body.idUser || !req.body.idMedia || !req.body.title || !req.body.type) {
        return res.status(400).json({ message: 'idUser, idMedia, title and type are required' });
    } else {
        const favoris = await FavorisService.addFavoris(req.body);

        if (!favoris) {
            return res.status(400).json({ message: 'Favoris not created' });
        } else {
            return res.status(201).json(favoris);
        }
    }
}

async function updateFavoris(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        const favoris = await FavorisService.updateFavoris(req.body, req.params.id);

        if (!favoris) {
            return res.status(400).json({ message: 'Favoris not updated' });
        } else {
            return res.status(200).json(favoris);
        }
    }
}

async function deleteFavoris(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
        return res.status(400).json({ message: 'Id must be an integer' });
    } else if (req.params.id < 0) {
        return res.status(400).json({ message: 'Id must be a positive integer' });
    } else {
        const favoris = await FavorisService.deleteFavoris(req.params.id);

        if (!favoris) {
            return res.status(400).json({ message: 'Favoris not deleted' });
        } else {
            return res.status(200).json(favoris);
        }
    }
}

module.exports = {
    getFavorisById,
    addFavoris,
    updateFavoris,
    deleteFavoris
};