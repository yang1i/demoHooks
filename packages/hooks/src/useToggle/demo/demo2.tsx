/**
 * title: useToggle 自定义值的切换
 * desc: 当actions中的值没有初始化时，接受两个参数
 * */ 

import React from 'react';
import { useToggle } from 'myHooks';

export default () => {
    const [state, { toggle, setLeft, setRight }] = useToggle('显示', '隐藏');
    return (
        <div>
            <p>当前 state 的值为: {`${state}`}</p>
            <p>
                <button type="button" onClick={toggle}>toggle 切换</button>
                <button type="button" onClick={setLeft}>setLeft 切换</button>
                <button type="button" onClick={setRight}>setRight 切换</button>
            </p>
        </div>
    )
}

