import React, { useRef, useState } from 'react'

export default function Player() {
    var PlayerRef = useRef();
    const [Player, setPlayer] = useState("");

    function handleButtonClick() {
        setPlayer(PlayerRef.current.value)
        PlayerRef.current.value = ""
    }

    return (
        <section id='player'>
            <h2>Welcome to {Player ?? "User"}</h2>
            <p>
                <input ref={PlayerRef} type='text' />
                <button onClick={handleButtonClick}>set Name</button>
            </p>
        </section>
    )
}