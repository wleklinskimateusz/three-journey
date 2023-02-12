import {
  GLBufferAttribute,
  BufferAttribute,
  InterleavedBufferAttribute,
} from "three";

export function isNotGlBufferAttribute<
  T extends GLBufferAttribute | BufferAttribute | InterleavedBufferAttribute
>(attribute: T): attribute is Exclude<T, GLBufferAttribute> {
  return (attribute as { array: unknown }).array !== undefined;
}
