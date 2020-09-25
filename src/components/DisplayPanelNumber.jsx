import React from 'react';

export default function DisplayPanelNumber(props) {
  return (
    <div className={`number-item-${props.type} animate__animated animate__flipInY`}>
      <p>
        {props.number.toLocaleString()}
      </p>
    </div>
  )
}
