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

export type ImageType = {
  fileName: string;
  image: string;
  width: number;
  height: number;
};

export type ControllBarProps = {
  onChangeOpacity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasImage: boolean;
  opacity: number;
  onControllClick: (e: string) => void;
};

export type UploaderProps = {
  onUploadImage: (e: ImageType) => void;
};

export type UnguessingUITypes = ImageType &
  Pick<BoxProps, "opacity" | "size" | "position">;
