/** @jsx JSXXML */

import { JSXXML } from "../../core";
import type { JSXNode } from "../../core";
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
