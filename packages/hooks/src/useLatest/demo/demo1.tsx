import React, { useState, useEffect } from 'react'
import useLatest from '..'
/**
 * desc: 返回的永远是最新值
 */
export default () => {
    const [count, setCount] = useState(0)
    const countRef = useLatest(count)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('countRef', countRef.current)
            // setCount(pre => pre + 1)
            setCount(countRef.current + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return <p>count: {count}</p>
}