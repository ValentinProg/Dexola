import { useState } from "react";

export const validationWithReg = (
  e: React.ChangeEvent<HTMLInputElement>,
  reg: RegExp,
  setValue: (a: string) => void,
  setError: (b: string) => void,
  errorText: string
) => {
  setValue(e.target.value);
  if (!reg.test(String(e.target.value).toLowerCase())) {
    setError(errorText);
    if (!e.target.value) {
      setError("");
    }
  } else {
    setError("");
  }
};

export const borderStyleForError = (
  stateDirty: boolean,
  stateError: string
) => {
  return `${stateDirty && stateError && "var(--warning-rose)"}`;
};

export const useInput = (initialValue: string, errorMessage: string) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const [isError, setError] = useState(errorMessage);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };
  
  return {
    value,
    onChange,
    onBlur,
    setValue,
    isDirty,
    setDirty,
    setError,
    isError,
  };
};
