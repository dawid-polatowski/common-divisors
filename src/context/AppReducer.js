const getCommonDivisors = (nums) => {
  let numbers = [];
  let allDivisors = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i].value; j++) {
      if (nums[i].value % j === 0) {
        if (allDivisors.indexOf(j) < 0) allDivisors.push(j);
      }
    }
  }

  allDivisors = allDivisors.sort((a, b) => { return a - b });

  let greatestCommonDivisor = 1;

  allDivisors.forEach((value) => {
    let ids = nums.map((number) => number.value % value === 0 ? number.id : null);
    let commonCount = 0;

    ids.forEach((id) => {
      if (id != null) commonCount++;
    });

    let isCommon = commonCount === ids.length;

    if (isCommon) {
      greatestCommonDivisor = value;
    }

    numbers.push({
      value,
      ids,
      common: isCommon
    });
  });

  return { greatest: greatestCommonDivisor, numbers };
}

export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_DIVISORS':
      return {
        ...state,
        divisors: getCommonDivisors(state.numbers)
      }
    case 'ADD_NUMBER':
      return {
        ...state,
        numbers: [action.payload, ...state.numbers],
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
              value: action.payload.number.value
            }
          }

          return number;
        }),
      }
    default:
      return state;
  }
};
