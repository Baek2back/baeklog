export type Dict<T = any> = Record<string, T>;

export type Booleanish = boolean | "true" | "false";

export type StringOrNumber = string | number;

export type Nil = null | undefined;

export type Nullable<T> = T | Nil;

export type ValueOf<
  ObjectType,
  ValueType extends keyof ObjectType = keyof ObjectType
> = ObjectType[ValueType];

export type First<T> = T extends [infer U, ...any[]] ? U : any;

export type Merge<T, P> = P & Omit<T, keyof P>;
