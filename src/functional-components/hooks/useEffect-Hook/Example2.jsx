import React, { useEffect } from 'react'

function Example2() {
    useEffect(() => {
        console.log("Component mounded!");
        
    }, []); //empty dependency array
  return (
    <div>
      <h2>Runs olny once when mounted!</h2>
    </div>
  )
}

export default Example2
