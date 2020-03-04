import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import uuid from 'uuid';

export default function ControlAddNumber() {
  const { addNumber } = useContext(GlobalContext);

  return (
    <div id="control-add-number">
      <button className="button add-btn" title="Add Number" onClick={() => addNumber({id: uuid.v4(), value: 1})}>+</button>
    </div>
  )
}
