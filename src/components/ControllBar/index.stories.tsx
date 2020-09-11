import React from "react";
import ControllBar from "./";

export default {
  title: "ControllBar",
  component: ControllBar,
};

export const Default = () => (
  <ControllBar
    onControllClick={() => {}}
    opacity={1}
    hasImage
    onChangeOpacity={() => {}}
  />
);
