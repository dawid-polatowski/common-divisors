import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Number from './Number'

const Content = () => {
  const { numbers } = useContext(GlobalContext)

  return (
    <main>
      <div className="container">
        {numbers.map(number => (
          <Number key={number.id} number={number} />
        ))}
      </div>
    </main>
  )
}

export default Content
