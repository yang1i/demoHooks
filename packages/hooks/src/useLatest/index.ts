import { useRef } from 'react'
/**
 * @param value 用useRef保存的值，可以是任意值
 * @returns 当前值的引用
 */
function useLatest<T>(value: T) {
    const ref = useRef(value)
    ref.current = value;
    return ref
}
export default useLatest