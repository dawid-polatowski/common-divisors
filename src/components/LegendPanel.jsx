import React, { useState } from 'react';
import LegendItem from './LegendItem';

export default function LegendPanel() {
  const [items] = useState(['Not Divisor', 'Divisor', 'Common Divisor', 'Greatest Common Divisor']);

  return (
    <div id="legend-panel">
      {items.map((item, index) => (<LegendItem key={index} itemTitle={item} itemId={index}></LegendItem>))}
    </div>
  )
}
