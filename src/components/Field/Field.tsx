/** @jsx JSXXML */

import { JSXXML } from "../../core";
import type { JSXNode } from "../../core";
import type { name, expr, cond, type, slot, modal } from "../../common";

interface FieldProps {
  children?: JSXNode;
  name?: name;
  expr?: expr;
  cond?: cond;
  type?: type;
  slot?: slot;
  modal?: modal;
}

const Field = (props: FieldProps): JSXNode => (
  <field name={props.name} expr={props.expr} cond={props.cond}>
    {props.children}
  </field>
);

export default Field;
