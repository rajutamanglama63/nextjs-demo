"use client";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    console.log("Counter Component");

    return <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
}