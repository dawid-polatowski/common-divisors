import React, { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { GlobalContext } from '../context/GlobalState';
import ManagePanelItem from './ManagePanelItem';

export default function ManagePanel() {
  const { numbers } = useContext(GlobalContext);

  return (
    <TransitionGroup id="manage-panel">
      {numbers.map(number => (<CSSTransition key={number.id} timeout={300} classNames="fade-zoom"><ManagePanelItem number={number}></ManagePanelItem></CSSTransition>))}
    </TransitionGroup>
  )
}
