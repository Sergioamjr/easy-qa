import React from "react";
import * as S from "./style";
import { UploaderProps } from "./../../types";

const Uploader = ({
  setImageInfoOnImageUpload,
  setSizeOnImageUpload,
}: UploaderProps): JSX.Element => {
  const getImageSize = (file) => {
    const img = new Image();
    img.src = window.URL.createObjectURL(file);
    img.onload = () => {
      setSizeOnImageUpload({
        width: img.width,
        height: img.height,
      });
    };
  };

  const parseImageIntoBase64 = (file) => {
    const reader: FileReader = new FileReader();

    reader.onload = () => {
      const image = typeof reader.result === "string" ? reader.result : "";

      setImageInfoOnImageUpload({
        fileName: file.name,
        image,
      });
    };

    reader.readAsDataURL(file);
  };

  const updateFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    if (!event) return null;
    const file = event.target.files[0];
    getImageSize(file);
    parseImageIntoBase64(file);
  };

  return (
    <S.Uploader data-testid="unguessing-ui-uploader">
      <S.Input
        data-testid="uploader-input"
        onChange={updateFileHandler}
        type="file"
      />
      Select an image
    </S.Uploader>
  );
};

export default Uploader;
