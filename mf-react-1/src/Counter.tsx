import React from "react"
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    
    return (
        <div className="block w-48 text-center">
            <p className="text-xl font-bold text-red-500">{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count by 1</button>
        </div>
    )
}
