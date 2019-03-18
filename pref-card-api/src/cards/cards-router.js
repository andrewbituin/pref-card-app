const express = require('express')
const CardsService = require('./cards-service')

const allCardsRouter = express.Router();

allCardsRouter.route('/').get((req, res, next) =>{
    CardsService.getAllCards(req.app.get('db'))
        .then(cards => {
            res.json(cards)
        })
        .catch(next)
})

module.exports = allCardsRouter