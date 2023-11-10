import { renderHook, act, render } from "@testing-library/react";
import useUpdate from "..";

describe('useUpdate', () => {
    it('should update', () => {
        let count = 0;
        const hooks = renderHook(() => {
            const update = useUpdate()
            return {
                update,
                count,
                onChange: () => {
                    count++
                    update()
                }
            }
        })
        expect(hooks.result.current.count).toBe(0)
        act(hooks.result.current.onChange)
        expect(hooks.result.current.count).toBe(1)
    })
})