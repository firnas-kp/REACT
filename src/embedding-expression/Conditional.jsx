import React from 'react'

const Conditional = () => {
    const isLoggedIn = true;
  return (
    <div>
      <p>{isLoggedIn ? "Welcome back!" : "please sign in"}</p>
    </div>
  )
}

export default Conditional
