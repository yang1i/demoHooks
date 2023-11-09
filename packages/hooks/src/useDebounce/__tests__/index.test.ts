import { renderHook, act } from "@testing-library/react";
import { sleep } from '../../utils/testingHelpers'
import useDebounce from "../";


describe('useDebounce', () => {
    it('useDebounce wait:200ms', async () => {
        let mountState = 0;
        const { result, rerender } = renderHook(() => useDebounce(mountState, 200))
        expect(result.current).toBe(0)

        mountState = 1;
        rerender()
        await act(async () => {
            await sleep(250)
        })
        expect(result.current).toBe(1)
    })
})