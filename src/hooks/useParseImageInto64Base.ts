import React from "react";
import { ImageType } from "~types";

const useParseImageInto64Base = (
  event: React.ChangeEvent<HTMLInputElement>,
  fn: (e: ImageType) => void
): void => {
  try {
    if (!event) return null;
    const file = event.target.files && event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      const newImg = new Image();
      newImg.src = typeof reader.result === "string" ? reader.result : "";
      newImg.onload = () => {
        fn({
          fileName: file.name,
          image: typeof reader.result === "string" ? reader.result : "",
          width: newImg.width,
          height: newImg.height,
        });
      };
    };
    reader.readAsDataURL(file);
  } catch (err) {
    console.log("err", err);
  }
};

export default useParseImageInto64Base;
