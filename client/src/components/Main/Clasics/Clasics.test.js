import React from "react";
import { shallow } from "enzyme";
import Clasics from "./Clasics";

describe("Clasics", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Clasics />);
    expect(wrapper).toMatchSnapshot();
  });
});
