import { useMemo, useState } from "react";

type InitialState = boolean | (() => boolean);

/**
 * # The Hook
 * ```tsx
 * export function useBoolean(initialState: InitialState = false) {
 *   const [value, setValue] = useState(initialState);
 *
 * }
 * ```
 *
 * @param initialState - {@link InitialState}
 * @returns [value, ]
 * @category Component
 */
export function useBoolean(initialState: InitialState = false) {
  const [value, setValue] = useState(initialState);

  const callbacks = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((previous) => !previous)
    }),
    []
  );

  return [value, callbacks] as const;
}
