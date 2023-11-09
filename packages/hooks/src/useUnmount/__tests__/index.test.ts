import { renderHook } from "@testing-library/react";
import useUnMount from "..";

describe('useUnmount', () => {
    it('useUnmount should work', async () => {
        const fn = jest.fn();
        const hook = renderHook(() => useUnMount(fn))
        expect(fn).toBeCalledTimes(0);
        hook.rerender();
        expect(fn).toBeCalledTimes(0);
        hook.unmount()
        expect(fn).toBeCalledTimes(1)
    })
})