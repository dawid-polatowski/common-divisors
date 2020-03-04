import React from 'react';
import LegendPanel from './LegendPanel';

export default function Header() {
  return (
    <header id="main-header">
      <div id="branding">
        <p>Common <span>Divisors</span></p>
      </div>
      <LegendPanel></LegendPanel>
    </header>
  )
}
