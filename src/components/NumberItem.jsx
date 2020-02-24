import React from 'react';

export default function NumberItem(props) {
  return (
    <div className={`number-item-${props.type}`}>
      <p>
        {props.number}
      </p>
    </div>
  )
}
