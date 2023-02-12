import { LoadingManager } from "three";

export const loadingManager = new LoadingManager();

loadingManager.onStart = () => {
  console.time("Loading time");
};

loadingManager.onLoad = () => {
  console.timeEnd("Loading time");
};
