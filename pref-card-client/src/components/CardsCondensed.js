import React from 'react';

export default function CardsCondensed(props){
    console.log(props.store[0])
    return(
        <div>
            <h2>Surgeon: {props.store[0].surgeon}</h2>
            <h3>Procedure: {props.store[0].procedure}</h3>
        </div>
    )
}