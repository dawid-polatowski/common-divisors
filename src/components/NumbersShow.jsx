import React, { useContext } from 'react';
import NumberShowItem from './NumberShowItem';
import { GlobalContext } from '../context/GlobalState';

export default function NumbersShow() {
  const { numbers, divisors } = useContext(GlobalContext);

  return (
    <div id="numbers-show">
      {numbers.map(number => (<NumberShowItem key={number.id.toString()} divisors={divisors} number={number}></NumberShowItem>))}
    </div>
  )
}
