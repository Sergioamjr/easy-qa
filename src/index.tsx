/**
 * @class UnguessingUI
 */

import * as React from "react";
import { Store, defaultState } from "./types";
import closeIcon from "./assets/close.svg";
import arrowUp from "./assets/rounded-up.svg";
import arrowDown from "./assets/rounded-down.svg";
import handDrag from "./assets/hand-drag.svg";
import hand from "./assets/hand.svg";
import {
  GetFromLocalStorage,
  SetFromLocalStorage
} from "./services/localstorage";

import styles from "./styles.css";

interface Props {}

export class UnguessingUI extends React.Component<Props, Store> {
  state = {
    ...defaultState
  };

  componentDidMount() {
    const stateFromLocalStorage = GetFromLocalStorage();
    this.setState({
      ...this.state,
      ...stateFromLocalStorage
    });
    const imageElement = document.getElementById("image");
    imageElement &&
      imageElement.addEventListener("mousedown", (event: MouseEvent) =>
        this.updateDragEnableValue(event, true)
      );
    imageElement &&
      imageElement.addEventListener("mouseup", (event: MouseEvent) =>
        this.updateDragEnableValue(event, false)
      );

    window.addEventListener("mousemove", this.updateBackgroundPositionByHand);
  }

  updateDragEnableValue = (event: MouseEvent, dragByMouse: boolean) => {
    this.setState({
      dragByMouse,
      mouseX: dragByMouse ? event.pageX : 0,
      mouseY: dragByMouse ? event.pageY : 0
    });
  };

  updateBackgroundPositionByHand = (event: MouseEvent) => {
    if (this.state.dragByMouse && this.state.enableDrag) {
      const differenceX = event.pageX - this.state.mouseX;
      const differenceY = event.pageY - this.state.mouseY;
      this.setState(({ translateX, translateY, mouseX, mouseY }) => {
        return {
          translateY: differenceY + translateY,
          translateX: differenceX + translateX,
          mouseX: mouseX + differenceX,
          mouseY: mouseY + differenceY
        };
      });
    }
  };

  componentDidUpdate(_prevProps: {}, prevState: Store) {
    if (prevState !== this.state) {
      SetFromLocalStorage(this.state);
    }
  }

  resetStoreHandler = () => {
    this.setState({
      ...defaultState,
      isOpen: true
    });
  };

  enableDragImage = () => {
    this.setState(({ enableDrag }) => {
      return {
        enableDrag: !enableDrag
      };
    });
  };

  toggleBoxStateHandler = () => {
    this.setState(({ isOpen }) => {
      return {
        isOpen: !isOpen
      };
    });
  };

  updateFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file || !file.type.includes("image")) {
      console.warn("Document type is not valid, please, select only images.");
      return false;
    }
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      var newImg = new Image();
      newImg.src = typeof reader.result === "string" ? reader.result : "";
      newImg.onload = () => {
        this.setState({
          ...defaultState,
          fileName: file.name,
          isOpen: true,
          image: typeof reader.result === "string" ? reader.result : "",
          width: newImg.width,
          height: newImg.height
        });
      };
    };
    return reader.readAsDataURL(file);
  };

  updateOpacityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const valueToInt = parseInt(value, 10);
    this.setState({
      opacity: valueToInt / 100
    });
  };

  updateScaleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({
      scale: parseInt(value, 10) / 100
    });
  };

  render() {
    const {
      fileName,
      image,
      enableDrag,
      width,
      height,
      translateX,
      translateY,
      scale,
      opacity,
      isOpen
    } = this.state;
    return (
      <div>
        <div
          id="image"
          className={`${styles.image_background} ${enableDrag &&
            styles.cursor_pointer}`}
          style={{
            width,
            height,
            opacity,
            transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
            backgroundImage: `url(${image})`
          }}
        />
        {this.props.children}
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className={`${styles.input_box} ${
            fileName ? styles.input_box_with_image : ""
          } ${isOpen ? styles.input_box_actived : ""}
          input-box
          ${fileName ? "input-box-with-image" : ""} ${
            isOpen ? "input-box-actived" : ""
          }
          `}
        >
          <button
            className={`${
              styles.input_box_change_status
            } input_box_change_status ${
              isOpen ? "input-box-change-status-actived" : ""
            }`}
            style={{
              backgroundImage: `url(${isOpen ? arrowDown : arrowUp})`
            }}
            id="toggle-btn"
            onClick={this.toggleBoxStateHandler}
          >
            {isOpen ? "Close" : "Open"} component
          </button>
          <div className={styles.d_flex}>
            <label id="file-upload-label" className={styles.btn}>
              {fileName ? `${fileName} selected` : "Select Layout"}
              <input
                id="file-upload"
                type="file"
                onChange={this.updateFileHandler}
              />
            </label>
            {!!fileName && (
              <button
                onClick={this.enableDragImage}
                className={`${styles.btn} ${
                  enableDrag ? styles.btn_primary_dark : styles.btn_primary
                }`}
                style={{
                  backgroundImage: `url(${!enableDrag ? handDrag : hand})`
                }}
              >
                Enable Drag
              </button>
            )}
            {!!fileName && (
              <button
                onClick={this.resetStoreHandler}
                className={`${styles.btn} ${styles.btn_danger} btn-danger`}
                style={{ backgroundImage: `url(${closeIcon})` }}
              >
                Remove layout
              </button>
            )}
          </div>
          {fileName && (
            <div className={`${styles.m_bottom_15} input-controll-box`}>
              <div className={styles.d_flex}>
                <div className={styles.flex1}>
                  <label className={styles.input_box_title}>Opacity</label>
                  <input
                    disabled={!fileName}
                    value={opacity * 100}
                    type="range"
                    min="0"
                    max="100"
                    id="updateOpacityHandler"
                    onChange={this.updateOpacityHandler}
                  />
                </div>
                <p className={`${styles.color_white} ${styles.value_box}`}>
                  {opacity.toFixed(2)}
                </p>
              </div>

              <div className={styles.d_flex}>
                <div className={styles.flex1}>
                  <label className={styles.input_box_title}>Scale</label>
                  <input
                    disabled={!fileName}
                    value={scale * 100}
                    type="range"
                    min="0"
                    max="200"
                    id="updateScaleHandler"
                    onChange={this.updateScaleHandler}
                  />
                </div>
                <p className={`${styles.color_white} ${styles.value_box}`}>
                  {scale.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const ConnectWithUnguessingUI = (Component: React.ReactType<Props>) => (
  props: any
) => {
  if (process.env.NODE_ENV === "production") {
    return <Component />;
  }
  return (
    <UnguessingUI>
      <Component {...props} />
    </UnguessingUI>
  );
};

export default ConnectWithUnguessingUI;
