import { ChangeEvent, FormEvent, useState } from "react";

import { keys } from "@/shared/utils/object";

type Validation = {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
};

type Validations<T extends object> = Partial<Record<keyof T, Validation>>;

type ErrorRecord<T> = Partial<Record<keyof T, string>>;

export const useForm = <T extends Record<keyof T, any> = object>(props: {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: () => void;
}) => {
  const [values, setValues] = useState<T>((props.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({});

  const reset = (state: T) => {
    setValues(() => state);
  };

  const handleChange =
    (key: keyof T) =>
    (
      event: ChangeEvent<
        HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement
      >
    ) => {
      const value = event.target.value;
      setValues({
        ...values,
        [key]: value
      });
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validations = props?.validations;
    if (validations) {
      let valid = true;
      const newErrors: ErrorRecord<T> = {};

      for (const key of keys(validations)) {
        const value = values[key];

        const validation = validations[key];

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation.required.message;
        }

        const pattern = validation?.pattern;

        if (pattern?.value && !pattern.value.test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }

      setErrors({});
    }
    if (props?.onSubmit) {
      props.onSubmit?.();
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    reset
  };
};
