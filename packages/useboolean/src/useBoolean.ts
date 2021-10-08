import { useState, useRef } from "react";

export interface UseBooleanActions {
  set: (value: boolean) => void;
  toggle: () => void;
  true: () => void;
  false: () => void;
}

export const useBoolean = (initial = false): [boolean, UseBooleanActions] => {
  const [value, setValue] = useState<boolean>(initial);

  const updateValue = useRef({
    set: (value: boolean) => setValue(Boolean(value)),
    toggle: () => setValue((value) => !value),
    true: () => setValue(true),
    false: () => setValue(false),
  });

  return [value, updateValue.current];
};
