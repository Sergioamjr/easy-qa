import React, { Component } from "react";

import UnGuessingUI from "unguessing-ui";

class App extends Component {
  render() {
    return <p>Teste</p>;
  }
}

const InjectProps = props => {
  return <App testProps={false} />;
};

export default UnGuessingUI(InjectProps);
