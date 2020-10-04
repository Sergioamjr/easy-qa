import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  act,
  screen,
  waitFor,
} from "@testing-library/react";
import Component from ".";

afterEach(cleanup);

const imageUploadObject = {
  target: {
    files: [new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" })],
  },
};

describe("Component", () => {
  const lib = "unguessing-ui";
  it("should render", () => {
    const { queryByTestId } = render(<Component />);
    const element = queryByTestId("unguessing-ui-id");
    expect(element).toBeTruthy();
  });

  it("should check elements", () => {
    const { queryByTestId } = render(<Component />);
    const box = queryByTestId(`${lib}-box`);
    const uploader = queryByTestId(`${lib}-uploader`);
    const controller = queryByTestId(`${lib}-controller`);
    expect(box).toBeFalsy();
    expect(controller).toBeFalsy();
    expect(uploader).toBeTruthy();
  });

  it("should upload image", async () => {
    act(() => {
      render(<Component />);
    });
    const uploader = screen.queryByTestId("uploader-input");
    fireEvent.change(uploader, imageUploadObject);

    await waitFor(() => {
      expect(screen.queryByTestId(`${lib}-box`)).toBeTruthy();
      expect(screen.queryByTestId(`${lib}-controller`)).toBeTruthy();
      expect(screen.queryByTestId(`${lib}-uploader`)).toBeFalsy();
    });
  });
});
