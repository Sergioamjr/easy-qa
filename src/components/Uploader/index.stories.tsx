import React from "react";
import Uploader from "./";
import { ImageType } from "./../../types";

export default {
  title: "Uploader",
  component: Uploader,
};

export const Default = () => <Uploader onUploadImage={(e: ImageType) => {}} />;
