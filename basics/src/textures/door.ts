import { Textures } from "./Texture";
import type { FromEntries } from "./door.d";
import { textureLoader } from "./textureLoader";
// "color" | "alpha" | "height" | "normal" | "ambientOcclusion"
const textureFilenames = [
  "color",
  "alpha",
  "height",
  "normal",
  "ambientOcclusion",
] as const;
export type TextureFilenames = typeof textureFilenames[number];
declare global {
  interface ObjectConstructor {
    fromEntries<T>(obj: T[]): FromEntries<T>;
  }
}
// color: textureLoader.load("/textures/door/color.jpg"),
export const door = Object.fromEntries(
  textureFilenames.map(
    (filename) =>
      [filename, textureLoader.load(`/textures/door/${filename}.jpg`)] as const
  )
);
