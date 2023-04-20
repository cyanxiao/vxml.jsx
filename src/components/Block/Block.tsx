/** @jsx JSXXML */

import { JSXXML } from "jsx-xml";
import type { JSXNode } from "jsx-xml";
import type { name, expr, cond } from "../../common";

interface BlockProps {
  children?: JSXNode;
  name?: name;
  expr?: expr;
  cond?: cond;
}

const Block = (props: BlockProps): JSXNode => (
  <block name={props.name} expr={props.expr} cond={props.cond}>
    {props.children}
  </block>
);

export default Block;
