import React from 'react';

export default function CardsCondensed(props){
    const handleCardClick = (e) => {
        console.log(e.target)
        props.props.history.push(`/card/${e.target.getAttribute("id")}`)
    }
    return(
        <li id={props.store[0].id}>
            <h2>Surgeon: {props.store[0].surgeon}</h2>
            <h3>Procedure: {props.store[0].procedure}</h3>
            <button id={props.store[0].id} type="click" onClick={e => handleCardClick(e)}>Expand</button>
        </li>
    )
}