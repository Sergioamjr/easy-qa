import React from "react";
import { ExampleComponent } from ".";
import { mount } from "enzyme";

describe("ExampleComponent", () => {
  it("is truthy", () => {
    expect(ExampleComponent).toBeTruthy();
  });

  it("should render ExampleComponent component", () => {
    const wrapper = mount(<ExampleComponent />);
    expect(wrapper).toHaveLength(1);
  });

  it("should children component", () => {
    const Children = () => <p>Children</p>;
    const wrapper = mount(
      <ExampleComponent>
        <Children />
      </ExampleComponent>
    );
    expect(wrapper.find("Children")).toHaveLength(1);
  });

  it("should open/close component", () => {
    const wrapper = mount(<ExampleComponent />);
    expect(wrapper.find(".input_box_change_status")).toHaveLength(1);
    expect(wrapper.find(".input-box-actived")).toHaveLength(0);
    wrapper.find("#toggle-btn").simulate("click");
    expect(wrapper.find(".input-box-actived")).toHaveLength(1);
  });

  it("should hid/show input box", () => {
    const wrapper = mount(<ExampleComponent />);
    expect(wrapper.find(".input-controll-box")).toHaveLength(0);
    wrapper.setState({ fileName: "file.jpg" });
    expect(wrapper.find(".input-controll-box")).toHaveLength(1);
  });

  it("should show the file name", () => {
    const wrapper = mount(<ExampleComponent />);
    wrapper.setState({ fileName: "file.jpg" });
    expect(wrapper.find("#file-upload-label").text()).toBe("file.jpg selected");
  });

  it("should upload file", () => {
    const wrapper = mount(<ExampleComponent />);
    const instance = wrapper.instance() as ExampleComponent;
    const spy = jest.spyOn(instance, "updateFileHandler");
    wrapper.instance().forceUpdate();
    const file = new Blob([], { type: "image/png" });
    wrapper
      .find("#file-upload")
      .simulate("change", { target: { files: [file] } });
    expect(spy).toHaveBeenCalled();
  });

  it("should return false when upload a non image file", () => {
    const wrapper = mount(<ExampleComponent />);
    const instance = wrapper.instance() as ExampleComponent;
    const spy = jest.spyOn(instance, "updateFileHandler");
    wrapper.instance().forceUpdate();
    const file = new Blob([], { type: "blabla/doc" });
    wrapper
      .find("#file-upload")
      .simulate("change", { target: { files: [file] } });
    expect(spy).toHaveBeenCalled();
    expect(
      instance.updateFileHandler({
        target: { files: [file] }
      })
    ).toBeFalsy();
  });

  it("should change updateTranslateXHandler state", () => {
    const wrapper = mount(<ExampleComponent />);
    wrapper.setState({ fileName: "file.jpg" });
    const instance = wrapper.instance() as ExampleComponent;
    const spy = jest.spyOn(instance, "updateTranslateXHandler");
    wrapper.instance().forceUpdate();
    wrapper.find("#updateTranslateXHandler").simulate("change", {
      target: { value: "10" }
    });
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state("translateX")).toBe(10);
  });
  it("should change updateTranslateYHandler state", () => {
    const wrapper = mount(<ExampleComponent />);
    wrapper.setState({ fileName: "file.jpg" });
    const instance = wrapper.instance() as ExampleComponent;
    const spy = jest.spyOn(instance, "updateTranslateYHandler");
    wrapper.instance().forceUpdate();
    wrapper.find("#updateTranslateYHandler").simulate("change", {
      target: { value: "10" }
    });
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state("translateY")).toBe(10);
  });

  it("should change opacity state", () => {
    const wrapper = mount(<ExampleComponent />);
    wrapper.setState({ fileName: "file.jpg" });
    const instance = wrapper.instance() as ExampleComponent;
    const spy = jest.spyOn(instance, "updateOpacityHandler");
    wrapper.instance().forceUpdate();
    wrapper.find("#updateOpacityHandler").simulate("change", {
      target: { value: "10" }
    });
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state("opacity")).toBe(10 / 100);
  });

  it("should change scale state", () => {
    const wrapper = mount(<ExampleComponent />);
    wrapper.setState({ fileName: "file.jpg" });
    const instance = wrapper.instance() as ExampleComponent;
    const spy = jest.spyOn(instance, "updateScaleHandler");
    wrapper.instance().forceUpdate();
    wrapper.find("#updateScaleHandler").simulate("change", {
      target: { value: "10" }
    });
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state("scale")).toBe(10 / 100);
  });

  it("should reset state", () => {
    const wrapper = mount(<ExampleComponent />);
    wrapper.setState({ fileName: "file.jpg" });
    const instance = wrapper.instance() as ExampleComponent;
    const spy = jest.spyOn(instance, "resetStoreHandler");
    wrapper.instance().forceUpdate();
    wrapper.find(".btn-danger").simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});
