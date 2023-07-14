import React from "react";
import { shallow } from "enzyme";
import Manga from "./Manga";

describe("Manga", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Manga />);
    expect(wrapper).toMatchSnapshot();
  });
});
