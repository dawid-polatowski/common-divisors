import React from 'react';
import HeaderBar from './HeaderBar';

export default function Header() {
  return (
    <header id="main-header">
      <div id="branding">
        <p>Common <span>Divisors</span></p>
      </div>
      <HeaderBar></HeaderBar>
    </header>
  )
}
