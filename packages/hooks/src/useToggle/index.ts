import { useState, useMemo } from 'react';

export interface Actions<T> {
    setLeft: () => void;
    setRight: () => void;
    toggle: () => void;
}

function useToggle<T = boolean>(): [boolean, Actions<T>];
function useToggle<T>(defaultValue: T): [T, Actions<T>];
function useToggle<T, R>(defaultValue: T, reverseValue: R): [T | R, Actions<T | R>];

function useToggle<D,R>(defaultValue: D = false as D, reverseValue?: R) {
    const [state, setState] = useState(defaultValue);
    // actions的持久化，useMemo actions只在 第一次引用的时候进行初始化
    const actions = useMemo(() => {
        const reverseValueOrigin = reverseValue ? reverseValue : !defaultValue;
        const toggle = () => setState((s) => s === defaultValue ? reverseValueOrigin : defaultValue);
        const setLeft = () => setState(defaultValue);
        const setRight = () => setState(reverseValueOrigin);

        return {
            toggle,
            setLeft,
            setRight
        }
    }, [])
    return [state, actions]
}   
export default useToggle;