import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counter/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
   
      <div>
        <button
        className='waves-effect waves-light btn-small'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Artır
        </button>
       
        <button
         className='waves-effect waves-light btn-small'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Azalt
        </button>
        <span> {count} </span>
      </div>
   
  )
}