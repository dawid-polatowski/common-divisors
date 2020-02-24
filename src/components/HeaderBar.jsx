import React from 'react';
import AddNumberBar from './AddNumberBar';
import InfoBar from './InfoBar';

export default function HeaderBar() {
  return (
    <div id="header-bar">
      <AddNumberBar></AddNumberBar>
      <div className="vertical-line"></div>
      <InfoBar></InfoBar>
    </div>
  )
}
