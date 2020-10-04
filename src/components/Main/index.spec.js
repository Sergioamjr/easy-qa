import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Component from ".";
import useParseImageInto64Base from "../../hooks/useParseImageInto64Base";

afterEach(cleanup);

describe("Component", () => {
  const libKey = "unguessing-ui";
  it("should render", () => {
    const { queryByTestId } = render(<Component />);
    const element = queryByTestId("unguessing-ui-id");
    expect(element).toBeTruthy();
  });

  it("should check elements", () => {
    const { queryByTestId } = render(<Component />);
    const box = queryByTestId(`${libKey}-box`);
    const uploader = queryByTestId(`${libKey}-uploader`);
    const controller = queryByTestId(`${libKey}-controller`);
    expect(box).toBeFalsy();
    expect(controller).toBeFalsy();
    expect(uploader).toBeTruthy();
  });

  it("should upload image", () => {
    const { queryByTestId } = render(<Component />);
    const uploader = queryByTestId("uploader-input");
    fireEvent.change(
      uploader,
      {
        target: {
          files: [
            new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
          ],
        },
      },
      true
    );

    // await waitFor(() => queryByTestId(`${libKey}-box`).toBeTruthy);
  });
});
