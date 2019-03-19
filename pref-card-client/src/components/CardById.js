import React from "react";
import { Link } from "react-router-dom";

export default function CardById(props) {
  const findById = () => {
    const id = parseInt(props.match.url.split("/").slice(2));
    const cardById = props.store.find(card => card.id === id);
    console.log(cardById)
    return generateCard(cardById);
  };
  const generateCard = (card) => (
    <div id={card.id}>
      <h1>Your PrefCard</h1>
      <h2>Surgeon: {card.surgeon} </h2>
      <h3>Procedure: {card.procedure} </h3>
      <section>
        <p>Position: {card.position} </p>
        <p>Glove Size: {card.glove_size} </p>
        <p>Glove Type: {card.glove_type} </p>
        <p>Domninant Hand: {card.dominant_hand} </p>
      </section>
      <section>
        <p>Equipment: {card.equipment} </p>
        <p>Supplies: {card.supplies} </p>
        <p>Instrumentation: {card.instrumentation} </p>
        <p>Suture and Usage: {card.suture_and_usage} </p>
        <p>Dressings: {card.dressings} </p>
        <p>Skin Prep: {card.skin_prep} </p>
        <p>Medication: {card.medications} </p>
      </section>
    </div>
  );

  const allCardsButton = (
    <Link to="/all">
      <button type="click">All Cards</button>
    </Link>
  );
  return (
    <div>
      {allCardsButton}
      {findById()}
    </div>
  );
}
