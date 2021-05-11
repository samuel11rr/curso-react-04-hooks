import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  const { user, setuser } = useContext(UserContext)
  console.log(user);

  return (
    <div>
      <h1> Login Screen </h1>
      <hr/>
      
      <button 
        className="btn btn-primary" 
        onClick={ () => setuser({
          id: 123,
          name: 'Sam',
          email: 'sam@algo.com'
        }) }
      >
        Login
      </button>
    </div>
  )
}
