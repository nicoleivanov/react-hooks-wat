import React, { useReducer } from 'react';

function reducer(count, action) {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    case 'DOUBLE':
      return 2 * count;
    case 'SQUARE':
      return count * count;
    case 'HALVE':
      return count/2;
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
      <button onClick={() => dispatch({type: 'DOUBLE'})}>Double</button>
      <button onClick={() => dispatch({type: 'HALVE'})}>Halve</button>
      <button onClick={() => dispatch({type: 'SQUARE'})}>Square</button>
    </>
  );
}

export default Counter;