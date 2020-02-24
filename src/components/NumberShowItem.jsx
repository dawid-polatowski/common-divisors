import React from 'react';
import NumberItem from './NumberItem';

export default function NumberShowItem({ number, divisors }) {
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
    <div className="number-show-item">
      <div className="number-show-item-header item-top"></div>
      <div className="number-show-item-content item-bottom">
        {divisors.numbers.map(divisor => (<NumberItem key={divisor.value.toString()} number={divisor.value} type={getLegendType(divisors.greatest, divisor.common, getId(divisor), divisor.value)}></NumberItem>))}
      </div>
    </div>
  )
}
