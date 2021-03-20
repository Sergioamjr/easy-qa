import React from "react";
import * as S from "./style";
import { Trash, Undo } from "./../../icons";
import { ControllBarProps } from "./../../types";

const ControllBar = ({
  onChangeOpacity,
  onControllClick,
  opacity,
}: ControllBarProps): JSX.Element => {
  return (
    <S.Controllers data-testid="unguessing-ui-controller">
      <S.SmallBtn
        data-testid="controller-reset"
        onClick={() => onControllClick("RESET_SIZE")}
      >
        <Undo />
      </S.SmallBtn>
      <S.Label>
        Opacity
        <input
          data-testid="controller-opacity"
          onChange={onChangeOpacity}
          value={opacity * 100}
          type="range"
          min="0"
          max="100"
        />
      </S.Label>
      <S.SmallBtn
        danger
        data-testid="controller-remove"
        onClick={() => onControllClick("RESET")}
      >
        <Trash />
      </S.SmallBtn>
    </S.Controllers>
  );
};

export default ControllBar;
