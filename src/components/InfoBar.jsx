import React from 'react';
import InfoBarItem from './InfoBarItem';

export default function InfoBar() {
  return (
    <div id="info-bar">
      <InfoBarItem itemId="0" itemTitle="Not Divisor"></InfoBarItem>
      <InfoBarItem itemId="1" itemTitle="Divisor"></InfoBarItem>
      <InfoBarItem itemId="2" itemTitle="Common Divisor"></InfoBarItem>
      <InfoBarItem itemId="3" itemTitle="Greatest Common Divisor"></InfoBarItem>
    </div>
  )
}
