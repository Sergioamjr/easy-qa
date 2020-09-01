import React from "react";
import { Rnd, DraggableData, RndResizeCallback } from "react-rnd";
import * as S from "./style";

type Size = { width: number; height: number };
type Position = { x: number; y: number };
type DraggableEventHandler = (e: any, data: DraggableData) => void | false;

export type BoxProps = {
  size: Size;
  position: Position;
  onDragStop: DraggableEventHandler;
  onResize: RndResizeCallback;
};

const Box = (props: BoxProps) => (
  <Rnd {...props}>
    <S.Content />
  </Rnd>
);

export default Box;
