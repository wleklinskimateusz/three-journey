import { NearestFilter } from "three";
import { textureLoader } from "./textureLoader";
const textureFilenames = ["3", "5"] as const;
export type TextureFilenames = typeof textureFilenames[number];

export const gradients = textureFilenames.map((filename) =>
  textureLoader.load(`textures/gradients/${filename}.jpg`)
);
gradients.forEach((texture) => {
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.generateMipmaps = false;
});
