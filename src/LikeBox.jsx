import { button } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react'

export default () => {
    const [liked, setLiked] = useState(false);

    return (
        <button onClick={() =>
            setLiked(!liked)}>
            {liked ? "Liked💖" : "Like❤️"}
            </button>
  )
}