declare global {
  interface ObjectConstructor {
    fromEntries<K, T>(obj: (readonly [K, T])[]): Record<K, T>;
    keys<T>(obj: T): (keyof T)[];
    values<T>(obj: T): T[keyof T][];
  }
}
export default global;
