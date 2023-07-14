import React from "react";
import { shallow } from "enzyme";
import Generos from "./Generos";

describe("Generos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Generos />);
    expect(wrapper).toMatchSnapshot();
  });
});
