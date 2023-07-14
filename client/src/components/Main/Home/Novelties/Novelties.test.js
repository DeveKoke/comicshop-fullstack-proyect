import React from "react";
import { shallow } from "enzyme";
import Novelties from "./Novelties";

describe("Novelties", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Novelties />);
    expect(wrapper).toMatchSnapshot();
  });
});
