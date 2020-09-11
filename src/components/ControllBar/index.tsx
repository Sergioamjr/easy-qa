import React from "react";
import * as S from "./style";
import { Trash, Undo } from "~icons";
import { ControllBarProps } from "~types";

const ControllBar = ({
  onChangeOpacity,
  onControllClick,
  hasImage,
  opacity,
}: ControllBarProps): JSX.Element => {
  if (!hasImage) {
    return null;
  }
  return (
    <S.Controllers>
      <S.SmallBtn onClick={() => onControllClick("RESET_SIZE")}>
        <Undo />
      </S.SmallBtn>
      <S.Label>
        Opacidade
        <input
          onChange={onChangeOpacity}
          value={opacity * 100}
          type="range"
          min="0"
          max="100"
        />
      </S.Label>
      <S.SmallBtn onClick={() => onControllClick("RESET")}>
        <Trash />
      </S.SmallBtn>
    </S.Controllers>
  );
};

export default ControllBar;
