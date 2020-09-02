import React from "react";
import * as S from "./style";

const Uploader = () => {
  return (
    <S.Uploader>
      <S.Input type="file" />
      Escolha a imagem
    </S.Uploader>
  );
};

export default Uploader;
