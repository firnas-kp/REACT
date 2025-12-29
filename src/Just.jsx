import React, { useState } from "react";

const Just = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <input type="text" placeholder="endeelm type cheyy" value={name} onChange={(e) => setName(e.target.value)} />
            <p>
                {name}
            </p>
            </div>

    );
}
export default Just;