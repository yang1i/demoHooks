import { __read } from "tslib";
import { useState, useMemo } from 'react';
function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read(useState(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  // actions的持久化，useMemo actions只在 第一次引用的时候进行初始化
  var actions = useMemo(function () {
    var reverseValueOrigin = reverseValue ? reverseValue : !defaultValue;
    var toggle = function () {
      return setState(function (s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    };
    var setLeft = function () {
      return setState(defaultValue);
    };
    var setRight = function () {
      return setState(reverseValueOrigin);
    };
    return {
      toggle: toggle,
      setLeft: setLeft,
      setRight: setRight
    };
  }, []);
  return [state, actions];
}
export default useToggle;