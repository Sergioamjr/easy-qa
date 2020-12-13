import React from "react";
import Main from "./";

export default {
  title: "Main",
  component: Main,
};

export const Default = () => {
  return (
    <Main>
      <p>Olá nova página</p>
      <img
        src="https://i0.wp.com/noticiasetecnologia.com/wp-content/uploads/2019/06/Keanu-Reeves.jpg"
        alt="Keanu reavers"
      />
    </Main>
  );
};
