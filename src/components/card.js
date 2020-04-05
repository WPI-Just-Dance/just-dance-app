import React from "react";

export const Card = props => {
  return(
      <div className={'card'}>
          <img src={props.src} alt={`${props.name} song card`}/>
          <p className={'title'}>{props.name}</p>
          <p>{props.artist}</p>
          <p>{props.people}</p>
          <p>{props.difficulty}</p>
          <p>{ props.origin !== 'Exclusive' ? `Just Dance ${props.origin}` : "Exclusive" }</p>
      </div>
  )
};