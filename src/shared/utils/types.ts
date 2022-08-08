export type Dict<T = any> = Record<string, T>;

export type Falsy = false | "" | 0 | -0 | 0n | -0n | null | undefined | void;

export type Nullish = null | undefined;

export type Nullable<T> = T | Nullish;

export type ValueOf<
  ObjectType,
  ValueType extends keyof ObjectType = keyof ObjectType
> = ObjectType[ValueType];

export type Head<T extends unknown[]> = T[0];

export type Tail<T extends unknown[]> = T extends [any, ...infer U] ? U : [];

export type Last<T extends unknown[]> = T extends [...any, infer U] ? U : never;

export type Merge<T, P> = P & Omit<T, keyof P>;

export type Cast<T1, T2> = T1 extends T2 ? T1 : T2;

export type Entries<T extends object> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
