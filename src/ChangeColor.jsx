import React,{ useState } from "react";

const ChangeColor = () => {

    const [color, setcolor] = useState("");

    const changeColor = () => {
        setcolor("green");
    }

    return (
        <div>
            <button onClick={changeColor}>ChangeColor</button>
        </div>
    )
}
export default ChangeColor;