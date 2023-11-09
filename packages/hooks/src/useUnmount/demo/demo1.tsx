import React from 'react'
import { message } from 'antd'
import { useBoolean, useUnmount } from 'myHooks';

export default () => {
    const [state, { toggle }] = useBoolean(true)
    useUnmount(() => {
        message.info('unmount')
    })
    return (
        <div>
            <button onClick={toggle}>{state ? 'unmount' : 'mount'}</button>
            {state && <p>Hello world</p>}
        </div>
    )
}
