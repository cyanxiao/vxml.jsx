/** @jsx JSXXML */
import { render, JSXXML } from "../src";

const xml = render(
  <test x="3">
    1 + {2} = {3}
  </test>
);

test("a is equal to 3", () => {
  expect(xml).toBe(`<?xml version="1.0"?><test x="3">1 + 2 = 3</test>`);
});
