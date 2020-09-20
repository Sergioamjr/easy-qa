import React from "react";
import * as S from "./style";
import { BoxProps } from "./../../types";

const Box = ({
  image,
  opacity,
  size = { width: 0, height: 0 },
  ...props
}: BoxProps): JSX.Element => {
  if (!image) {
    return null;
  }
  return (
    <S.Rnd data-testid="unguessing-ui-box" size={size} {...props}>
      <S.Content opacity={opacity} image={image} />
    </S.Rnd>
  );
};

export default Box;
