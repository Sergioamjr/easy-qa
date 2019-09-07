import React, { Component } from "react";

import ExampleComponent from "easyup";

class App extends Component {
  render() {
    return <p>Componente</p>;
  }
}

const InjectProps = props => {
  return <App testProps={false} />;
};

export default ExampleComponent(InjectProps);
