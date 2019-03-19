const CardsService = {
  getAllCards(db) {
    return db.from("prefcard_cards AS pc").select("*");
  },
  getCardById(db, id) {
    return db
      .from("prefcard_cards AS pc")
      .where("pc.id", id)
      .first();
  },
  insertCard(db, newCard) {
    return db
      .insert(newCard)
      .into("prefcard_cards")
      .returning("*")
      .then(([card]) => card)
      .then(card => CardsService.getCardById(db, card.id));
  }
};
module.exports = CardsService;
