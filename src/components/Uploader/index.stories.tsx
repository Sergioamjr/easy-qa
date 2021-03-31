import React from "react";
import Uploader from "./";
import { ImageType } from "./../../types";

export default {
  title: "Uploader",
  component: Uploader,
};

export const Default = () => (
  <Uploader
    setImageInfoOnImageUpload={(_e: ImageType) => {}}
    setSizeOnImageUpload={(_e: ImageType) => {}}
  />
);
