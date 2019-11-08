import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import { createMemoryHistory } from "history";

describe("App Component", () => {
  it("Should render without crash", () => {
    const history = createMemoryHistory();
    const component = shallow(
      <App
        match={{
          isExact: true,
          path: "/dashboard",
          url: "/dashboard",
          params: {}
        }}
        history={history}
        location={history.location}
      />
    );
    const wrapper = component.find("h1");
    //console.log(component.debug());
    expect(wrapper.length).toBe(1);
  });
});
