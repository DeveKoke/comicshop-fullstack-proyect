import React from "react";
import { shallow } from "enzyme";
import Superheroes from "./Superheroes";

describe("Superheroes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Superheroes />);
    expect(wrapper).toMatchSnapshot();
  });
});
