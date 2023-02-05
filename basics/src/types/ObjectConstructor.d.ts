export type FromEntries<T> = T extends readonly [
  infer Key extends string,
  infer Value
]
  ? {
      [K in Key]: Value;
    }
  : {
      [K: string]: any;
    };

declare global {
  interface ObjectConstructor {
    fromEntries<T>(obj: T[]): FromEntries<T>;
    keys<T>(obj: T): (keyof T)[];
  }
}
