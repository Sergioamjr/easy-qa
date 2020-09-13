import React, { useState } from "react";
import Box from "./";
import { Size, Position } from "./../../types";

export default {
  title: "Box",
  component: Box,
};

export const Primary = () => {
  const [position, setPosition] = useState<Position>({ x: 10, y: 20 });
  const [size, setSize] = useState<Size>({ width: 200, height: 200 });
  const onDragStop = (e, { x, y }) => {
    setPosition({ x, y });
  };
  const onResize = (e, direction, ref) => {
    setSize({ width: ref.style.width, height: ref.style.height });
  };
  return (
    <Box
      opacity={1}
      onResize={onResize}
      onDragStop={onDragStop}
      size={size}
      position={position}
    />
  );
};
