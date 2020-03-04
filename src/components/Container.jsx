import React, { useEffect } from 'react';
import ControlPanel from './ControlPanel';
import ManagePamel from './ManagePanel';
import DisplayPanel from './DisplayPanel';

export default function Container() {
  return (
    <main id="main-panel">
      <ControlPanel></ControlPanel>
      <div id="side-panel">
        <ManagePamel></ManagePamel>
        <DisplayPanel></DisplayPanel>
      </div>
    </main>
  )
}
