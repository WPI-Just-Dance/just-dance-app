import React from "react";

export const Card = props => {
  return(
      <div>
          <img src={props.ref} alt={`${props.name} song card`}/>
          <h2>{props.name}</h2>
          <small>{props.artist}</small>
          <small>{props.people}</small>
          <small>{props.difficulty}</small>
          <small>{ props.origin !== 'Exclusive' ? `Just Dance ${props.origin}` : "Exclusive" }</small>
      </div>
  )
};