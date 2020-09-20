import React, { useEffect } from "react";
import * as S from "./style";
import useParseImageInto64Base from "./../../hooks/useParseImageInto64Base";
import { UploaderProps, ImageType } from "./../../types";

const Uploader = ({ onUploadImage }: UploaderProps): JSX.Element => {
  const [image, updateFileHandler] = useParseImageInto64Base();
  useEffect(() => {
    if (image.fileName && image.height && image.image && image.width) {
      onUploadImage(image as ImageType);
    }
  }, [image.fileName, image.height, image.image, image.width]);

  return (
    <S.Uploader data-testid="unguessing-ui-uploader">
      <S.Input
        data-testid="uploader-input"
        onChange={(e) => updateFileHandler(e)}
        type="file"
      />
      Escolha a imagem
    </S.Uploader>
  );
};

export default Uploader;
