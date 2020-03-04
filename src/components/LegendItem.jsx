import React from 'react';

export default function LegendItem(props) {
  return (
    <div className="legend-item">
      <div id={`legend-item-${props.itemId}`}></div>
      <p>{props.itemTitle}</p>
    </div>
  )
}
