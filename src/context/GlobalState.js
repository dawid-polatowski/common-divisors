import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  divisors: {
    greatest: 1,
    divisors: []
  },
  numbers: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function updateDivisors() {
    dispatch({
      type: 'UPDATE_DIVISORS',
      payload: {}
    });
  }

  function addNumber(number) {
    dispatch({
      type: 'ADD_NUMBER',
      payload: number
    });

    updateDivisors();
  }

  function deleteNumber(id) {
    dispatch({
      type: 'DELETE_NUMBER',
      payload: id
    });

    updateDivisors();
  }

  function updateNumber(id, number) {
    dispatch({
      type: 'UPDATE_NUMBER',
      payload: {
        id,
        number
      }
    });

    updateDivisors();
  }

  return (<GlobalContext.Provider value={{
    numbers: state.numbers,
    divisors: state.divisors,
    addNumber,
    deleteNumber,
    updateNumber
  }}>{children}</GlobalContext.Provider>);
};
