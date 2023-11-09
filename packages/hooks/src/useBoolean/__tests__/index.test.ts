import { renderHook, act } from "@testing-library/react";
import useBoolean from "../index";

describe('useToggle', () => {
    it('test on base', async () => {
        const hook = renderHook(() => useBoolean())
        expect(hook.result.current[0]).toBeFalsy()
    })
    it('test on set', async () => {
        const { result } = renderHook(() => useBoolean())
        expect(result.current[0]).toBeFalsy()
        act(() => {
            result.current[1].set(true)
        })
        expect(result.current[0]).toBe(true)
    })
})
