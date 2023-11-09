import React, { useState } from 'react'
import useDebounce from '..'

export default () => {
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce(value, 1000)

    return (
        <div>
            <input style={{ width: 200 }} value={value} onChange={(e) => setValue(e.target.value)} />
            <p style={{ marginTop: 20 }}>DebouncedValue: {debouncedValue}</p>
        </div>
    )
}