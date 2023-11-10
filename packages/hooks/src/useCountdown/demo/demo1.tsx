import React from 'react'
import useCountdown from '..'

export default () => {
    const count = useCountdown(6000)
    return (
        <p>倒计时: {count / 1000}</p>
    )
}