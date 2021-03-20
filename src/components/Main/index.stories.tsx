import React from "react";
import Main from "./";

export default {
  title: "Main",
  component: Main,
};

export const Default = () => {
  return (
    <Main>
      <p>Try to take a print screen and compare with this text :)</p>
    </Main>
  );
};

export const NotUsingLocalStorage = () => {
  return (
    <Main saveOnLocalStorage={false}>
      <p>Not using localstorage.</p>
    </Main>
  );
};
