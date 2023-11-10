import React, { useState, useEffect } from 'react'

function useDebounce<T>(value: T, waitTime: number) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounced(value)
        }, waitTime);

        return () => clearTimeout(timer)
    }, [value, waitTime])

    return debounced
}

export default useDebounce