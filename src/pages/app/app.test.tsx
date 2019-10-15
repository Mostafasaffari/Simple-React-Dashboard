import React from "react";
import { shallow } from "enzyme";

import App from "./app";

describe("App Component", () => {
  it("Should render without crash", () => {
    const component = shallow(<App />);
    const wrapper = component.find("[data-test='wrapper']");
    //console.log(component.debug());
    expect(wrapper.length).toBe(1);
  });
});
