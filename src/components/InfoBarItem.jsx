import React from 'react';

export default function InfoBarItem(props) {
  return (
    <div className="info-bar-item">
      <div id={`info-bar-item-${props.itemId}`}></div>
      <p>{props.itemTitle}</p>
    </div>
  )
}
