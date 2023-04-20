/** @jsx JSXXML */
import { Block, JSXXML, render } from "../src";

const block = render(<Block>Hello Block</Block>);

test("<Block />", () => {
  expect(block).toBe(`<?xml version="1.0"?><block>Hello Block</block>`);
});
