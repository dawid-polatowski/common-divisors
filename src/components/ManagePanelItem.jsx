import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function ManagePanelItem({ number }) {
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
    e.preventDefault();

    if (+e.target.value < 1 || +e.target.value > 10000000) {
      setNumberValue(previousNumberValue);
    }
    else {
      setNumberValue(+e.target.value)
    }
  }

  return (
    <div className="manage-panel-item animate__animated animate__flipInX">
      <form className="manage-panel-form" onSubmit={onUpdate}>
        <input type="number" name="number" value={numberValue} onClick={e => e.target.select()} onChange={onChange} />
      </form>
      <div className="buttons-container">
        {previousNumberValue !== numberValue ? <button title="Update Number" className="button update-btn" onClick={onUpdate}>U</button> : null}
        <button title="Remove Number" className="button delete-btn" onClick={onDelete}>-</button>
      </div>
    </div>
  )
}
