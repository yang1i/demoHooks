import React, { useState } from 'react'
import useThrottle from "..";

export default () => {
    const [value, setValue] = useState<string>('')
    const throttleValue = useThrottle(value, 500)
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} style={{ width: 280 }} />
            <p style={{ marginTop: 20 }}>throttleValue: {throttleValue}</p>
        </div>
    )
}