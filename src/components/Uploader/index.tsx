import React from "react";
import * as S from "./style";
import { UploaderProps } from "./../../types";

const Uploader = ({ onUploadImage }: UploaderProps): JSX.Element => {
  const updateFileHandlerr = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    if (!event) return null;
    const file = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = () => {
      const image = typeof reader.result === "string" ? reader.result : "";

      onUploadImage({
        fileName: file.name,
        image,
        width: 100,
        height: 100,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <S.Uploader data-testid="unguessing-ui-uploader">
      <S.Input
        data-testid="uploader-input"
        onChange={updateFileHandlerr}
        type="file"
      />
      Escolha a imagem
    </S.Uploader>
  );
};

export default Uploader;
