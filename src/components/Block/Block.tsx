/** @jsx JSXXML */

import { JSXXML } from "jsx-xml";

interface BlockProps {
  children: string;
}

const Block = (props: BlockProps) => <block>{props.children}</block>;

export default Block;
