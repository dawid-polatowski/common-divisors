import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Legend from './Legend'

const Header = () => {
  const [inputAdd, setInputAdd] = useState('')
  const { addNumber } = useContext(GlobalContext)

  const onAdd = e => {
    e.preventDefault()

    if (+inputAdd > 0 && +inputAdd < 100000000) {
      addNumber(+inputAdd)
      setInputAdd('')
    }
  }

  const onInputChange = e => {
    if (
      (+e.target.value < 1 || +e.target.value >= 100000000) &&
      e.target.value !== ''
    ) {
      setInputAdd('')
    } else {
      setInputAdd(+e.target.value)
    }
  }

  return (
    <header>
      <div className="menu">
        <div className="container-fluid">
          <div className="logo-app"></div>
          <div className="form-container">
            <form>
              <input
                className="number-input"
                type="number"
                name="number"
                value={inputAdd}
                onChange={e => onInputChange(e)}
                onClick={e => e.target.select()}
                placeholder="Add Number"
              />
              <button
                className="btn-add"
                type="submit"
                onClick={e => onAdd(e)}
              ></button>
            </form>
          </div>
        </div>
      </div>
      <Legend />
    </header>
  )
}

export default Header
