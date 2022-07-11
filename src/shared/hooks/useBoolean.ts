import { useMemo, useState } from "react";

type InitialState = boolean | (() => boolean);

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
