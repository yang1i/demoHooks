import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';

const callToggle = (hook: any) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};

describe('useToggle', () => {
  it('针对基础功能的使用', async () => {
    const hook = renderHook(() => useToggle()); // 表达它是一个react hook
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('针对手动切换toggle模拟', async () => {
    const hook = renderHook(() => useToggle('Hello', 'Byebye'));
    expect(hook.result.current[0]).toBe('Hello');
    callToggle(hook);
    expect(hook.result.current[0]).toBe('Byebye');
    callToggle(hook);
    expect(hook.result.current[0]).toBe('Hello');
  });
});