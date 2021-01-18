import React, { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Divisor from './Divisor'

const Number = ({ number }) => {
  const [inputNumber, setInputNumber] = useState(number.value)
  const previousInputNumber = useRef(number.value)
  const { divisors, updateNumber, deleteNumber } = useContext(GlobalContext)

  const onUpdate = e => {
    e.preventDefault()

    if (inputNumber > 0 && inputNumber < 100000000) {
      previousInputNumber.current = inputNumber
      updateNumber({ id: number.id, value: inputNumber })
    }
  }

  const onDelete = e => {
    e.preventDefault()

    deleteNumber(number.id)
  }

  const onInputChange = e => {
    if (+e.target.value < 1 || +e.target.value >= 100000000) {
      setInputNumber(previousInputNumber.current)
    } else {
      setInputNumber(+e.target.value)
    }
  }

  return (
    <div className="number animate__animated animate__fadeIn">
      <div className="top">
        <div className="form-container">
          <form>
            <button
              className="btn-update"
              type="submit"
              onClick={e => onUpdate(e)}
              disabled={inputNumber === previousInputNumber.current}
            ></button>
            <input
              className="number-input"
              type="number"
              name="number"
              value={inputNumber}
              onChange={e => onInputChange(e)}
              onClick={e => e.target.select()}
            />
            <button className="btn-delete" onClick={e => onDelete(e)}></button>
          </form>
        </div>
      </div>
      <div className="content">
        <ul>
          {divisors.map(divisor => (
            <Divisor
              key={divisor.value}
              value={divisor.value}
              type={
                divisor.common.filter(common => number.id === common.id)[0].type
              }
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Number
