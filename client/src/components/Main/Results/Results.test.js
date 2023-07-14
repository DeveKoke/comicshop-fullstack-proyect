import React from "react";
import { shallow } from "enzyme";
import Results from "./Results";

describe("Results", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Results />);
    expect(wrapper).toMatchSnapshot();
  });
});
