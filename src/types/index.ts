import { DraggableData, RndResizeCallback } from "react-rnd";

export type Size = { width: number; height: number };
export type Position = { x: number; y: number };
export type DraggableEventHandler = (
  e: any,
  data: DraggableData
) => void | false;

export type BoxProps = {
  opacity: number;
  size: Partial<Size>;
  position: Position;
  onDragStop: DraggableEventHandler;
  onResize: RndResizeCallback;
  image?: string;
};

export type ImageInfo = {
  fileName: string;
  image: string;
};

export type ImageType = ImageInfo & Size;

export type ControllBarProps = {
  onChangeOpacity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  opacity: number;
  onControllClick: (e: string) => void;
};

export type UploaderProps = {
  setSizeOnImageUpload: (e: Size) => void;
  setImageInfoOnImageUpload: (e: ImageInfo) => void;
};

export type StateType = {
  opacity: number;
  position: Position;
  size: Size;
  image: Partial<ImageType>;
};

export type UnguessingUITypes = { image: Partial<ImageType> } & Pick<
  BoxProps,
  "opacity" | "size" | "position"
>;
