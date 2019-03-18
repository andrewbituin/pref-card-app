const CardsService = {
    getAllCards(db){
        return db
            .from('prefcard_cards AS pc')
            .select('*')
    }
}
module.exports = CardsService