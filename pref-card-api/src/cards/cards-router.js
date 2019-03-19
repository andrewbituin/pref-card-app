const express = require("express");
const CardsService = require("./cards-service");
const { requireAuth } = require("../middleware/jwt-auth");
const jsonBodyParser = express.json()

const cardsRouter = express.Router();

cardsRouter
  .route("/all")
  // .all(requireAuth)
  .get((req, res, next) => {
    console.log(req);
    CardsService.getAllCards(req.app.get("db"))
      .then(cards => {
        res.json(cards);
      })
      .catch(next);
  });
cardsRouter
  .route("/:id")
  // .all(requireAuth)
  .get((req, res, next) => {
    console.log(req.params.id);
    CardsService.getCardById(req.app.get("db"), req.params.id).then(data =>
      res.json(data)
    );
  });
cardsRouter
    .route("/create-card")
    .post(requireAuth, jsonBodyParser, (req, res, next) => {
  const {
    surgeon,
    procedure,
    position,
    glove_size,
    glove_type,
    dominant_hand,
    equipment,
    supplies,
    instrumentation,
    suture_and_usage,
    dressings,
    skin_prep,
    medications,
    user_id
  } = req.body;
  const newCard = {
    surgeon,
    procedure,
    position,
    glove_size,
    glove_type,
    dominant_hand,
    equipment,
    supplies,
    instrumentation,
    suture_and_usage,
    dressings,
    skin_prep,
    medications,
    user_id
  }
  console.log(req.body)
  for (const [key, value] of Object.entries(newCard))
  if (value == null)
    return res.status(400).json({
      error: `Missing '${key}' in request body`
    })
    newCard.user_id = req.user.id

    CardsService.insertCard(
        req.app.get('db'),
        newCard
    )
        .then(card => {
            res
                .status(201)
                .json(card)
        })

});
cardsRouter
    // Best way to patch? How do I patch individual properties in the db?
    .route('/:id')
    .patch(requireAuth, jsonBodyParser, (req, res, next) => {
        const {
            id,
            surgeon,
            procedure,
            position,
            glove_size,
            glove_type,
            dominant_hand,
            equipment,
            supplies,
            instrumentation,
            suture_and_usage,
            dressings,
            skin_prep,
            medications,
            user_id
          } = req.body;
    })

module.exports = cardsRouter;
