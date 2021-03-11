import { useReducer } from "react";
import './Task2.css';
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function Task2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
     
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <div className={state.count > 100? 'wrapper wrapper-green' : (state.count < 5 ?'wrapper wrapper-red':'wrapper')}>
            <div className="count">{state.count}</div>
        </div>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}