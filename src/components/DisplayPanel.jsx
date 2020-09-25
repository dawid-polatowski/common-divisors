import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import DisplayPanelItem from './DisplayPanelItem';

export default function DisplayPanel() {
  const { numbers } = useContext(GlobalContext);

  return (
    <div id="display-panel">
      {numbers.map(number => (<DisplayPanelItem key={number.id} number={number}></DisplayPanelItem>))}
    </div>
  )
}
