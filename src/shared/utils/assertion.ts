import { Dict, Falsy, Nullish } from "./types";

export const __DEV__ = process.env.NODE_ENV !== "production";

export const isUndefined = (value: unknown): value is undefined =>
  value === undefined;

export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> =>
  value !== undefined;

export const isNull = (value: unknown): value is null => value === null;

export const isNotNull = <T>(value: T): value is Exclude<T, null> =>
  value !== null;

export const isNullish = (value: unknown): value is Nullish =>
  isNull(value) || isUndefined(value);

export const isNotNullish = <T>(value: T): value is NonNullable<T> =>
  !isNullish(value);

export const isArray = <T>(value: unknown): value is Array<T> => {
  return Array.isArray(value);
};

export const isEmptyArray = (value: unknown) => {
  return isArray(value) && value.length === 0;
};

export const isObject = (value: unknown): value is Dict => {
  const type = typeof value;

  return (
    value !== null &&
    value !== undefined &&
    (type === "object" || type === "function") &&
    !isArray(value)
  );
};

export const isEmptyObject = (value: unknown) => {
  return isObject(value) && Object.keys(value).length === 0;
};

export const isEmpty = (value: unknown) => {
  if (isArray(value)) return isEmptyArray(value);
  if (isObject(value)) return isEmptyObject(value);
  if (value == null || value === "") return true;
  return false;
};

export const isFalsy = (value: unknown): value is Falsy => !value;

export const isTruthy = <T>(value: T | Falsy): value is T => !!value;
