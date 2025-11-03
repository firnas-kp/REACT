import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{

        const interval = setInterval(() => {
            setSeconds((s) => s + 1);
        },1000);
        //setInterval creates a timer that runs evry 1000 milliseconds(1 second)

        // cleanup  (unmount)
        return () => clearInterval(interval);

    },[]); //empty dependancy - run once on mount

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  )
}

export default Timer