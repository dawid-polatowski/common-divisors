import { v4 as uuid } from 'uuid'

const getDivisors = numbers => {
  let divisors = []
  let divisorsCounter = []

  // Find all divisors

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j <= numbers[i].value; j++) {
      if (numbers[i].value % j === 0) {
        divisorsCounter.push(j)

        if (divisors.filter(divisor => divisor.value === j).length === 0) {
          divisors.push({ value: j, common: [] })
        }
      }
    }
  }

  // Find greatest and common divisors

  let greatestDivisor = 0
  let areCommon = []

  for (let i = 0; i < divisors.length; i++) {
    const divisor = divisors[i].value
    const isCommon =
      divisorsCounter.filter(c => c === divisor).length === numbers.length

    areCommon.push(isCommon)

    if (isCommon && divisor > greatestDivisor) {
      greatestDivisor = divisor
    }
  }

  // Add to common array

  for (let i = 0; i < divisors.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j].value % divisors[i].value === 0) {
        if (areCommon[i]) {
          if (divisors[i].value === greatestDivisor) {
            divisors[i].common.push({ id: numbers[j].id, type: 3 })
          } else {
            divisors[i].common.push({ id: numbers[j].id, type: 2 })
          }
        } else {
          divisors[i].common.push({ id: numbers[j].id, type: 1 })
        }
      } else {
        divisors[i].common.push({ id: numbers[j].id, type: 0 })
      }
    }
  }

  divisors = divisors.sort((a, b) => a.value - b.value)

  return divisors
}

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DIVISORS':
      return {
        ...state,
        divisors: [...getDivisors(state.numbers)],
      }
    case 'ADD_NUMBER':
      return {
        ...state,
        numbers: [{ id: uuid(), value: action.payload }, ...state.numbers],
      }
    case 'DELETE_NUMBER':
      return {
        ...state,
        numbers: state.numbers.filter(number => number.id !== action.payload),
      }
    case 'UPDATE_NUMBER':
      return {
        ...state,
        numbers: state.numbers.map(number => {
          if (number.id === action.payload.id) {
            return {
              ...number,
              value: action.payload.value,
            }
          }

          return number
        }),
      }
    default:
      return state
  }
}
