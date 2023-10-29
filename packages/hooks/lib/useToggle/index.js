"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _react = require("react");
function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = (0, _tslib.__read)((0, _react.useState)(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  // actions的持久化，useMemo actions只在 第一次引用的时候进行初始化
  var actions = (0, _react.useMemo)(function () {
    var reverseValueOrigin = reverseValue ? reverseValue : !defaultValue;
    var toggle = function toggle() {
      return setState(function (s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    };
    var setLeft = function setLeft() {
      return setState(defaultValue);
    };
    var setRight = function setRight() {
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
var _default = exports["default"] = useToggle;