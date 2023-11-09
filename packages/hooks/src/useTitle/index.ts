import { useState, useEffect, useRef } from 'react'
import useUnmount from '../useUnmount'
import isBrowser from '../utils/isBrowser'
/**
 * 1. 实现更新title
 * 2. 组件卸载后，恢复之前的title
 */

export interface Options {
    restoreOnUnmount?: boolean
}
function useTitle(title: string, options?: Options) {
    const titleRef = useRef(isBrowser ? document.title : '')
    useEffect(() => {
        document.title = title
    }, [title])

    useUnmount(() => {
        if (options?.restoreOnUnmount) {
            document.title = titleRef.current
        }
    })
}

export default useTitle