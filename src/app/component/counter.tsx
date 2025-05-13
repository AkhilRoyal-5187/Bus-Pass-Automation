"use client";

import { useState } from "react"
import React from "react";
export const Counter =() =>{
    const [count, setCount] = useState(0);

    return(
        console.log("Counter component loaded"),
        <div>
            <button onClick={() => setCount(count + 1)}>
                count : {count};
            </button>
        </div>
    )
}