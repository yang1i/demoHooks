/**
 * title: useBoolean 基础用法
 * desc: 切换 boolean，可以接收默认值
 * */

import React from 'react'
import { useBoolean } from 'myHooks'

export default () => {
    const [state, { toggle, setTrue, setFalse }] = useBoolean(true);

    return (
        <div>
            <p>Effect: {JSON.stringify(state)}</p>
            <p>
                <button onClick={toggle}>Toggle</button>
            </p>
            <p>
                <button onClick={setTrue}>setTrue</button>
            </p>
            <p>
                <button onClick={setFalse}>setFlase</button>
            </p>
        </div>
    )
}