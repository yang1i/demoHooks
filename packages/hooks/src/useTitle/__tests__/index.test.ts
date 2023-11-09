import { renderHook, act } from "@testing-library/react";
import useTitle from "..";

describe('useTitle', () => {
    it('useTitle Base Usage', () => {
        const hook = renderHook((props) => useTitle(props), {
            initialProps: '自定义标题'
        })

        expect(document.title).toBe('自定义标题')
        act(() => {
            hook.rerender('新的自定义标题')
        })
        expect(document.title).toBe('新的自定义标题')
    })
    it('useTitle Advanced Usage', () => {
        document.title = '原有页面标题'
        const hook = renderHook((props) => useTitle(props, { restoreOnUnmount: true }), {
            initialProps: '新的自定义标题'
        })
        expect(document.title).toBe('新的自定义标题')
        act(() => {
            hook.unmount()
        })
        expect(document.title).toBe('原有页面标题')
    })
})