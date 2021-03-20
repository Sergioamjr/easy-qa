import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  act,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Component from ".";

afterEach(cleanup);

const imageUploadObject = {
  target: {
    files: [new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" })],
  },
};

const defineProperty = (name, value) => {
  Object.defineProperty(window, name, {
    value,
    writable: true,
    configurable: true,
  });
};

describe("Component", () => {
  beforeEach(() => {
    defineProperty("localStorage", {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    });

    defineProperty("location", {
      reload: jest.fn(() => null),
    });

    defineProperty("URL", {
      createObjectURL: jest.fn(() => null),
    });
  });

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
      fireEvent.click(screen.queryByTestId("controller-remove"));
    });
  });

  it("should remove an uploaded image", async () => {
    act(() => {
      render(<Component />);
    });
    const uploader = screen.queryByTestId("uploader-input");
    fireEvent.change(uploader, imageUploadObject);

    await waitFor(() => {
      fireEvent.click(screen.queryByTestId("controller-remove"));
      expect(screen.queryByTestId(`${lib}-box`)).toBeFalsy();
      expect(screen.queryByTestId(`${lib}-controller`)).toBeFalsy();
      expect(screen.queryByTestId(`${lib}-uploader`)).toBeTruthy();
    });
  });

  it("should upload image and change its opacity", async () => {
    act(() => {
      render(<Component />);
    });
    const uploader = screen.queryByTestId("uploader-input");
    fireEvent.change(uploader, imageUploadObject);

    await waitFor(() => {
      const input = screen.queryByTestId("controller-opacity");
      fireEvent.change(input, { target: { value: "70" } });
      const imageBox = screen.getByTestId("unguessing-ui-image");
      expect(imageBox).toHaveAttribute("data-opac", "opacity-0.7");
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(2);
    });
  });

  it("should update localstorage", async () => {
    act(() => {
      render(<Component />);
    });
    const uploader = screen.queryByTestId("uploader-input");
    fireEvent.change(uploader, imageUploadObject);

    await waitFor(() => {
      expect(window.localStorage.setItem).toHaveBeenCalled();
      const input = screen.queryByTestId("controller-opacity");
      fireEvent.change(input, { target: { value: "80" } });
      const imageBox = screen.getByTestId("unguessing-ui-image");
      expect(imageBox).toHaveAttribute("data-opac", "opacity-0.8");
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(3);
    });
  });

  it("should get from localstorage on reload", () => {
    act(() => {
      render(<Component />);
    });
    window.location.reload(true);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });
});
