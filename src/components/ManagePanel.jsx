import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ManagePanelItem from './ManagePanelItem';

export default function ManagePanel() {
  const { numbers } = useContext(GlobalContext);

  return (
    <div id="manage-panel">
      {numbers.map(number => (<ManagePanelItem key={number.id} number={number}></ManagePanelItem>))}
    </div>
  )
}
