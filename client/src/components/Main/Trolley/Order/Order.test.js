import React from "react";
import { shallow } from "enzyme";
import Order from "./Order";

describe("Order", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Order />);
    expect(wrapper).toMatchSnapshot();
  });
});
