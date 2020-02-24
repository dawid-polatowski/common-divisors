import React, { useContext } from 'react';
import NumberControlItem from './NumberControlItem';
import { GlobalContext } from '../context/GlobalState';

export default function NumbersControl() {
  const { numbers } = useContext(GlobalContext);

  return (
    <div id="numbers-control" className="left-side">
      {numbers.map((number, index) => (<NumberControlItem key={number.id.toString()} index={index + 1} number={number}></NumberControlItem>))}
    </div>
  )
}
