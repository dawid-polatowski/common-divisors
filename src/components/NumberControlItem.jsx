import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function NumberControlItem({ index, number }) {
  const [previousNumberValue, setPreviousNumberValue] = useState(1);
  const [numberValue, setNumberValue] = useState(1);
  const { deleteNumber, updateNumber } = useContext(GlobalContext);

  const onUpdate = e => {
    e.preventDefault();
    updateNumber(number.id, { value: numberValue });
    setPreviousNumberValue(numberValue);
  }

  const onDelete = e => {
    e.preventDefault();
    deleteNumber(number.id);
  }

  const onChange = e => {
    if (+e.target.value < 1 || +e.target.value > 100000000) {
      setNumberValue(previousNumberValue);
    }
    else {
      setNumberValue(+e.target.value)
    }
  }

  return (
    <div className="number-control-item">
      <div className="number-control-item-header item-top">
        <p>#{index}</p>
      </div>
      <form className="number-control-item-form item-bottom">
        <input type="number" name="number" value={numberValue} onClick={(e) => e.target.select()} onChange={onChange} />
        <div id="number-control-item-form-buttons">
          {previousNumberValue !== numberValue ? <button title="Update Number" className='update-btn' onClick={onUpdate}>U</button> : null}
          <button title="Remove Number" className="delete-btn" onClick={onDelete}>-</button>
        </div>
      </form>
    </div>
  )
}
