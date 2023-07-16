import React from "react";
import { shallow } from "enzyme";
import InfoShop from "./InfoShop";

describe("InfoShop", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InfoShop />);
    expect(wrapper).toMatchSnapshot();
  });
});
