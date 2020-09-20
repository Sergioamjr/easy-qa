import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Component from ".";

const createImage = ({
  name = "file.txt",
  size = 1024,
  type = "plain/txt",
  lastModified = new Date(),
}) => {
  const blob = new Blob(["a".repeat(size)], { type });

  blob.lastModifiedDate = lastModified;

  return new File([blob], name);
};

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

  it("should upload image", async () => {
    // const file = createImage({});
    // const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    // const { queryByTestId } = render(<Component />);
    // const uploader = queryByTestId(`${libKey}-uploader`);
    // userEvent.upload(uploader, { target: { files: [file] } });
    // await waitFor(() => queryByTestId(`${libKey}-box`));
  });
});
