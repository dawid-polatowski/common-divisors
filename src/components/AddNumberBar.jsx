import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import uuid from 'uuid';

export default function AddNumberBar() {
  const { addNumber } = useContext(GlobalContext);

  return (
    <div id="add-number-bar" className="left-side">
      <button title="Add Number" onClick={() => addNumber({id: uuid.v4(), value: 1})}>+</button>
    </div>
  )
}
