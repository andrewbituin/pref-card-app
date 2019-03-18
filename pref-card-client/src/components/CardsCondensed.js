import React from "react";

export default function CardsCondensed(props) {
  const handleCardClick = e => {
    props.history.push(`/card/${e.target.getAttribute("id")}`);
  };
  const displayCondensedCards = () => {
      return props.store.map(card => {
          return <li key={card.id} id={card.id}>
          <h2>{card.surgeon}</h2>
          <p>{card.procedure}</p>
          <button type="click" id={card.id} onClick={handleCardClick}>Expand</button>
          </li>
      })
  }
  return <ul>{displayCondensedCards()}</ul>;
}
