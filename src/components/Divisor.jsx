import React from 'react'

const Divisor = ({ legend, value, type }) => {
  return (
    <li
      className={`${
        legend ? '' : 'animate__animated animate__flipInY '
      }divisor-${type}`}
    >
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="divisor">
        <p>{value.toLocaleString()}</p>
      </div>
    </li>
  )
}

export default Divisor
