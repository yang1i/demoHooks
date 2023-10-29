export interface Actions<T> {
    setLeft: () => void;
    setRight: () => void;
    toggle: () => void;
}
declare function useToggle<T = boolean>(): [boolean, Actions<T>];
declare function useToggle<T>(defaultValue: T): [T, Actions<T>];
declare function useToggle<T, R>(defaultValue: T, reverseValue: R): [T | R, Actions<T | R>];
export default useToggle;
