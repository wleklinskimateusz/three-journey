type OnDoubleClickProps = {
  canvas: HTMLCanvasElement;
};

export function createOnDoubleClick({
  canvas,
}: OnDoubleClickProps): () => void {
  return () =>
    document.fullscreenElement
      ? document.exitFullscreen()
      : canvas.requestFullscreen();
}
