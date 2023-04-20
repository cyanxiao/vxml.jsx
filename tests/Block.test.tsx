/** @jsx JSXXML */
import { Block, JSXXML, render } from "../src";

const options = {
  createOptions: { headless: true },
};

const block = render(<Block>Hello Block</Block>, options);

test("<Block />", () => {
  expect(block).toBe(`<block>Hello Block</block>`);
});
