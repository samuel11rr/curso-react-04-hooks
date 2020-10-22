import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css'

export const CallbackHook = () => {

  const [counter, setCounter] = useState( 10 );
  // const increment = () => {
  //   setCounter( counter + 1 );
  // }

  const increment = useCallback( ( numero ) => {
    setCounter( c => c + numero );
  }, [ setCounter ])

  useEffect( () => {
    // code
  }, [ increment ])

  return (
    <div>
      <h1> useCallback Hook: { counter } </h1>
      <hr />

      <ShowIncrement increment={ increment }/>
    </div>
  )
}
