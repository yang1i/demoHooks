import { useState, useEffect, useRef } from 'react'
import useUnmount from '../useUnmount'

function useThrottle<T>(value: T, waitTime: number = 1000) {
    const [state, setState] = useState<T>(value)
    const timeout = useRef<ReturnType<typeof setTimeout>>()
    const nextValue = useRef<T>()
    const isUpdating = useRef<boolean>(false)

    useEffect(() => {
        if (!timeout.current) {
            setState(value)
            const handler = () => {
                if (isUpdating.current) {
                    isUpdating.current = false
                    setState(nextValue.current)
                    timeout.current = setTimeout(handler, waitTime)
                } else {
                    timeout.current = undefined
                }
            }
            timeout.current = setTimeout(handler, waitTime)
        } else {
            nextValue.current = value
            isUpdating.current = true
        }
    }, [value])

    useUnmount(() => {
        timeout.current && clearTimeout(timeout.current)
    })
    return state
}

export default useThrottle