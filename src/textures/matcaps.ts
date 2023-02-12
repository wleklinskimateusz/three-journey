import { getUrl } from "../utils/getUrl";
import { textureLoader } from "./textureLoader";
const textureFilenames = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;
export type TextureFilenames = typeof textureFilenames[number];

export const matcaps = textureFilenames.map((filename) =>
  textureLoader.load(getUrl(`/textures/matcaps/${filename}.png`))
);
