import React from 'react'

const CallingFunction = () => {
  function getGreeting(name) {
    return `hello ${name}`;
  }
  function Greeting(){
    return <h2>{getGreeting("firnas")}</h2>
  }
  return (
    <div>
      <Greeting/>
    </div>
  )
}

export default CallingFunction
