import React from "react";
import { shallow } from "enzyme";
import ComicListe from "./ComicListe";

describe("ComicListe", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ComicListe />);
    expect(wrapper).toMatchSnapshot();
  });
});
