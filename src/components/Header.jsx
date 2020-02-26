import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import HeaderBar from './HeaderBar';

export default function Header() {
  const { numbers } = useContext(GlobalContext);

  return (
    <header id="main-header">
      <div id="branding">
        <p>Common <span>Divisors</span></p>
      </div>
      <HeaderBar></HeaderBar>
      {numbers.length === 0 ? <div id="header-horizontal-line"></div> : null}
    </header>
  )
}
