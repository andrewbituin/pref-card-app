import React from "react";
import { Link } from 'react-router-dom';

export default function CardById(props) {
  const {
    id,
    dominantHand,
    dressings,
    equipment,
    gloveSize,
    gloveType,
    instrumentation,
    medications,
    position,
    procedure,
    skinPrep,
    supplies,
    surgeon,
    sutureAndUsage
  } = props[0];
  const fullCard = (
    <div id={id}>
      <h1>Your PrefCard</h1>
      <h2>Surgeon: {surgeon} </h2>
      <h3>Procedure: {procedure} </h3>
      <section>
        <p>Position: {position} </p>
        <p>Glove Size: {gloveSize} </p>
        <p>Glove Type: {gloveType} </p>
        <p>Domninant Hand: {dominantHand} </p>
      </section>
      <section>
        <p>Equipment: {equipment} </p>
        <p>Supplies: {supplies} </p>
        <p>Instrumentation: {instrumentation} </p>
        <p>Suture and Usage: {sutureAndUsage} </p>
        <p>Dressings: {dressings} </p>
        <p>Skin Prep: {skinPrep} </p>
        <p>Medication: {medications} </p>
      </section>
    </div>
  );
  const allCardsButton = (
      <Link to="/all">
      <button type="click">All Cards</button>
      </Link>
  )
  return (
    <div>
      {allCardsButton}
      {fullCard}
    </div>
  );
}
