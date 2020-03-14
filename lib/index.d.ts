declare module 'browser-image-compression' {
  interface Options {
    maxSizeMB: number;
    maxWidthOrHeight: number;
    useWebWorker: boolean;
    maxIteration: number,
    exifOrientation: number,
    progress: Function,
    fileType: string
  }

  function imageCompression (image: Blob, options: Options): Blob;

  export = imageCompression;
}
