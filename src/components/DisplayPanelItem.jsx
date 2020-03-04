import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <TransitionGroup className="display-panel-numbers">
        {divisors.numbers.map(divisor => (<CSSTransition key={divisor.value.toString()} timeout={300} classNames="fade-zoom"><DisplayPanelNumber number={divisor.value} type={getLegendType(divisors.greatest, divisor.common, getId(divisor), divisor.value)}></DisplayPanelNumber></CSSTransition>))}
      </TransitionGroup>
    </div>
  )
}
