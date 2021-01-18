import React, { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'

// Initial state

const initialState = {
  numbers: [],
  divisors: [],
}

// Create context

export const GlobalContext = createContext(initialState)

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions

  const updateDivisors = () => {
    dispatch({
      type: 'UPDATE_DIVISORS',
      payload: {},
    })
  }

  const addNumber = value => {
    dispatch({
      type: 'ADD_NUMBER',
      payload: value,
    })

    updateDivisors()
  }

  const deleteNumber = id => {
    dispatch({
      type: 'DELETE_NUMBER',
      payload: id,
    })

    updateDivisors()
  }

  const updateNumber = number => {
    dispatch({
      type: 'UPDATE_NUMBER',
      payload: {
        id: number.id,
        value: number.value,
      },
    })

    updateDivisors()
  }

  return (
    <GlobalContext.Provider
      value={{
        numbers: state.numbers,
        divisors: state.divisors,
        addNumber,
        deleteNumber,
        updateNumber,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
