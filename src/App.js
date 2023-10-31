import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './action';
const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
<h1> Counter : {count}</h1>
<button onClick={()=>dispatch(increment())} >click to increment</button>
<button onClick={()=>dispatch(decrement())} >click to decrement</button>

    </div>
  
  )
}

export default App;