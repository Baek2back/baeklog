import { Entries } from "./types";

export function keys<T extends object>(obj: T) {
  return Object.keys(obj) as unknown as (keyof T)[];
}

export function values<T extends object>(obj: T) {
  return Object.values(obj) as unknown as T[keyof T][];
}

export function entries<T extends object>(obj: T) {
  return Object.entries(obj) as unknown as Entries<T>;
}
