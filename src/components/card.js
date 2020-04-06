import React from "react";

export const Card = props => {
  return(
      <div className={'card'}>
          <div className={'title'}><p>{props.name}</p></div>
          <img src={props.src} alt={`${props.name} song card`}/>
          <div className={`difficulty ${props.difficulty}`}><p>{props.difficulty}</p></div>
          <p>{props.artist}</p>
          <p>{props.people}</p>
          <p>{ props.origin !== 'Exclusive' ? `Just Dance ${props.origin}` : "Exclusive" }</p>
      </div>
  )
};