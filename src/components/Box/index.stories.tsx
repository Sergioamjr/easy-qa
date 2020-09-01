import React from "react";
import Box from "./";

export default {
  title: "Box",
  component: Box,
};

export const Primary = () => {
  const onDragStop = () => {};
  const onResize = () => {};
  return (
    <Box
      onResize={onResize}
      onDragStop={onDragStop}
      size={{ width: 200, height: 200 }}
      position={{ x: 10, y: 20 }}
    />
  );
};
