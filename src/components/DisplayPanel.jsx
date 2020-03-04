import React, { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { GlobalContext } from '../context/GlobalState';
import DisplayPanelItem from './DisplayPanelItem';

export default function DisplayPanel() {
  const { numbers } = useContext(GlobalContext);

  return (   
    <TransitionGroup id="display-panel">
      {numbers.map(number => (<CSSTransition key={number.id} timeout={300} classNames="slide-up"><DisplayPanelItem number={number}></DisplayPanelItem></CSSTransition>))}
    </TransitionGroup>
  )
}
