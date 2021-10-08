export interface UseBooleanActions {
    set: (value: boolean) => void;
    toggle: () => void;
    true: () => void;
    false: () => void;
}
export declare const useBoolean: (initial?: boolean) => [boolean, UseBooleanActions];
