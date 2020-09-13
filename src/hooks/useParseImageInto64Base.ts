import { ChangeEvent, useState } from "react";
import { ImageType } from "./../types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useParseImageInto64Base = () => {
  const [img, setImage] = useState<Partial<ImageType>>({});
  const updateFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    try {
      if (!event) return null;
      const file = event.target.files && event.target.files[0];
      const reader: FileReader = new FileReader();
      reader.onload = () => {
        const newImg = new Image();
        newImg.src = typeof reader.result === "string" ? reader.result : "";
        newImg.onload = () => {
          setImage({
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

  return [img, updateFileHandler] as const;
};

export default useParseImageInto64Base;
