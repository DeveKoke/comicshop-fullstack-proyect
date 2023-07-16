import React from "react";
import { shallow } from "enzyme";
import ComicList from "./ComicList";

describe("ComicList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ComicList />);
    expect(wrapper).toMatchSnapshot();
  });
});
