import React from 'react'
import Divisor from './Divisor'

const Legend = () => {
  return (
    <section className="legend">
      <ul>
        <li>
          <p>Common For</p>
        </li>
        <Divisor legend={true} value="Not This" type="0" />
        <Divisor legend={true} value="This" type="1" />
        <Divisor legend={true} value="All" type="2" />
        <Divisor legend={true} value="All + Greatest" type="3" />
      </ul>
    </section>
  )
}

export default Legend
