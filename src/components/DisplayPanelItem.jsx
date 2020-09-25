import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import DisplayPanelNumber from './DisplayPanelNumber';

export default function DisplayPanelItem({ number }) {
  const { divisors } = useContext(GlobalContext);

  const getLegendType = (greatest, common, id, value) => {
    if (greatest === value) {
      return '3';
    }
    else if (common) {
      return '2';
    }
    else if (id) {
      return '1';
    }
    else {
      return '0';
    }
  }

  const getId = (divisor) => {
    return divisor.ids.filter(id => id === number.id).length > 0 ? number.id : null;
  }

  return (
    <div className="display-panel-item">
      <div className="display-panel-numbers animate__animated animate__fadeIn">
        {divisors.numbers.map(divisor => (<DisplayPanelNumber key={divisor.value.toString()} number={divisor.value} type={getLegendType(divisors.greatest, divisor.common, getId(divisor), divisor.value)}></DisplayPanelNumber>))}
      </div>
    </div>
  )
}
