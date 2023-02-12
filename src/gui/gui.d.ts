import { attributes } from "./const";
export { attributes } from "./const";
import { Vector3, Mesh } from "three";

type StringKeys<T extends Record<string, any>> = Extract<keyof T, string>;

type VectorKeys = StringKeys<Vector3>;

// create a helper type for union of types that connects with values of type number

type Values<T> = T[keyof T];

export type NumberValue<T extends Record<string, any>> = Values<{
  [Key in StringKeys<T>]: T[Key] extends number ? Key : never;
}>;

export type MinMax = {
  min: number;
  max: number;
  step: number;
};

export type AttributesProps = {
  [key in typeof attributes[number]]: MinMax;
};

export type AddObjectGuiProps<T> = {
  mesh: Mesh;
  name: string;
} & Partial<Record<"position" | "scale" | "rotation", MinMax>> & {
    callbacks?: Record<T, () => void>;
  };
