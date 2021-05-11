import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const {user, setuser} = useContext(UserContext);
  const handleClick = () => {
    setuser({});
  }

  return (
    <div>
      <h1> About Screen </h1>
      <hr/>
      
      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>

      <button 
        className="btn btn-outline-danger"
        onClick={ handleClick }
      >
        Logout
      </button>
    </div>
  )
}
