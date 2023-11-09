import React from 'react'
import { useTitle } from 'myHooks'

export default () => {
    useTitle('page title')
    return (
        <div>
            <p>Set title of the page</p>
        </div>
    )
}