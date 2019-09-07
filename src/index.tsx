/**
 * @class ExampleComponent
 */

import * as React from "react";
import _get from "lodash.get";
import { RouteComponentProps } from "react-router";
import { Store, defaultState } from "./types";
import closeIcon from "./assets/close.svg";
import arrowUp from "./assets/rounded-up.svg";
import arrowDown from "./assets/rounded-down.svg";
import {
  GetFromLocalStorage,
  SetFromLocalStorage
} from "./services/localstorage";

import styles from "./styles.css";
export interface Props extends RouteComponentProps {}

class ExampleComponent extends React.Component<Props, Store> {
  constructor(props: Props) {
    super(props);
    this.state = defaultState;
  }
  componentDidMount() {
    const stateFromLocalStorage = GetFromLocalStorage();
    this.setState({
      ...this.state,
      ...stateFromLocalStorage
    });
  }

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
      console.warn("Select only images.");
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
    const value = _get(event, "target.value", "");
    const valueToInt = parseInt(value, 10);
    this.setState({
      opacity: valueToInt / 100
    });
  };

  updateTranslateXHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = _get(event, "target.value", "");
    this.setState({
      translateX: parseInt(value, 10)
    });
  };

  updateTranslateYHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = _get(event, "target.value", "");
    this.setState({
      translateY: parseInt(value, 10)
    });
  };

  updateScaleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = _get(event, "target.value", "");
    this.setState({
      scale: parseInt(value, 10) / 100
    });
  };

  render() {
    const {
      fileName,
      image,
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
          className={styles.image_background}
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
            <p>Abrir</p>
          </button>
          <div className={styles.d_flex}>
            <label id="file-upload-label" className={styles.btn}>
              {fileName ? fileName : "Selecionar Layout"}
              <input
                id="file-upload"
                type="file"
                onChange={this.updateFileHandler}
              />
            </label>
            {!!fileName && (
              <button
                onClick={this.resetStoreHandler}
                className={`${styles.btn} ${styles.btn_danger} btn-danger`}
                style={{ backgroundImage: `url(${closeIcon})` }}
              >
                Remover
              </button>
            )}
          </div>
          {fileName && (
            <div className={`${styles.m_bottom_15} input-controll-box`}>
              <div>
                <label className={styles.input_box_title}>Opacidade</label>
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

              <div>
                <label className={styles.input_box_title}>Horizontal</label>
                <input
                  disabled={!fileName}
                  type="range"
                  min="-200"
                  max="200"
                  id="updateTranslateXHandler"
                  value={translateX}
                  onChange={this.updateTranslateXHandler}
                />
              </div>
              <div>
                <label className={styles.input_box_title}>Vertical</label>
                <input
                  disabled={!fileName}
                  type="range"
                  min="-200"
                  max="200"
                  id="updateTranslateYHandler"
                  value={translateY}
                  onChange={this.updateTranslateYHandler}
                />
              </div>
              <div>
                <label className={styles.input_box_title}>Escala</label>
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
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ExampleComponent;
