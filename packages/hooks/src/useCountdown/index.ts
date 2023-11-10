import React, { useState, useEffect, useRef, useCallback } from 'react'

function useCountdown(initialCount: number): number {
    const [count, setCount] = useState(initialCount)
    const timer = useRef<number>()

    const clear = useCallback(() => {
        timer.current && window.clearTimeout(timer.current)
    }, [])

    useEffect(() => {
        if (initialCount <= 0) return
        let remain = initialCount
        function handler() {
            clear()
            timer.current = setTimeout(() => {
                if (remain > 0) {
                    remain -= 1000
                    setCount(remain)
                    handler()
                } else {
                    clear()
                }
            }, 1000);
        }
        handler()
        return () => {
            clear()
        }

    }, [initialCount])

    return count
}

export default useCountdown