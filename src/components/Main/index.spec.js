import React from "react";
import { render } from "@testing-library/react";
import Component from ".";

describe("Component", () => {
  it.only("should render", () => {
    const { queryByTestId } = render(<Component />);
    const element = queryByTestId("unguessing-ui-id");
    expect(element).toBeTruthy();
  });
});
