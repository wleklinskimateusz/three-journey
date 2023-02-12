import { Texture } from "three";
export type Textures<T extends string = string> = Record<T, Texture>;
