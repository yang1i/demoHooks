import React from 'react'
import { useUpdate } from 'myHooks'

export default () => {
    const update = useUpdate()
    return (
        <>
            <p>更新时间: {Date.now()}</p>
            <button onClick={update}>更新</button>
        </>
    )
}