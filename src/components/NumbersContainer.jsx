import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import NumbersControl from './NumbersControl';
import NumbersShow from './NumbersShow';

export default function NumbersContainer() {
  const { numbers } = useContext(GlobalContext);

  return (
    <main id="numbers-container">
      <NumbersControl></NumbersControl>
      {numbers.length > 0 ? <div className="vertical-line"></div> : null}
      <NumbersShow></NumbersShow>
    </main>
  )
}
