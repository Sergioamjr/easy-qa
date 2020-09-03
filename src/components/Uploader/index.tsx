import React from "react";
import * as S from "./style";
import useParseImageInto64Base from "~hooks/useParseImageInto64Base";
import { UploaderProps } from "~types";

const Uploader = ({ onUploadImage }: UploaderProps): JSX.Element => {
  const updateFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    useParseImageInto64Base(event, (e) => {
      onUploadImage(e);
    });
  };

  return (
    <S.Uploader>
      <S.Input onChange={updateFileHandler} type="file" />
      Escolha a imagem
    </S.Uploader>
  );
};

export default Uploader;
