import React from "react";
import { shallow } from "enzyme";
import Trolley from "./Trolley";

describe("Trolley", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Trolley />);
    expect(wrapper).toMatchSnapshot();
  });
});
