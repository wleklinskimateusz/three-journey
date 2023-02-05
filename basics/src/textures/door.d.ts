export type FromEntries<T> = T extends readonly [
  infer Key extends string,
  infer Value
]
  ? {
      [K in Key]: Value;
    }
  : T;

export default global;
