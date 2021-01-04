import React from "react";
import renderer from "react-test-renderer";
import Show from "./show";
it("renders no item", () => {
  const tree = renderer.create(<Show />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders 1 item", () => {
  const tree = renderer.create(<Show items={["a"]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
