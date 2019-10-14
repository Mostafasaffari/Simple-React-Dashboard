import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import App from "./app";


describe("App Component", () => {
  let shallow: any;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("Should render without crash", () => {
    const component = shallow(<App />);
    const wrapper = component.find("[data-test='wrapper']");
    console.log(component.debug());
    expect(wrapper.length).toBe(1);
  });
});
