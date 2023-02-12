import { NearestFilter } from "three";
import { getUrl } from "../utils/getUrl";
import { textureLoader } from "./textureLoader";
const textureFilenames = ["3", "5"] as const;
export type TextureFilenames = typeof textureFilenames[number];

export const gradients = textureFilenames.map((filename) =>
  textureLoader.load(getUrl(`/textures/gradients/${filename}.jpg`))
);
gradients.forEach((texture) => {
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.generateMipmaps = false;
});
