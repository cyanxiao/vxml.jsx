# vxml.jsx

[VoiceXML](https://www.w3.org/TR/voicexml20) (VXML) is designed for creating audio dialogs that feature synthesized speech, digitized audio, recognition of spoken and DTMF key input, recording of spoken input, telephony, and mixed initiative conversations.

This experimental project aims to integrate VoiceXML with JSX.

## Installation

To use vxml.jsx, you first need to install it using Yarn:

```shell
yarn add vxml-jsx
```

You also need to have Babel installed with the `@babel/plugin-transform-react-jsx` plugin enabled. This plugin allows Babel to transform JSX syntax into regular JavaScript function calls. Here's how you can install Babel and the plugin:

```shell
yarn add -D @babel/core @babel/cli @babel/preset-env @babel/plugin-transform-react-jsx
```

```json
// .babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    ["@babel/plugin-transform-react-jsx", { "pragma": "JSXXML.createElement" }]
  ]
}
```

Once you have Babel installed, you need to add the following comment, which is a [JSX pragma](https://www.gatsbyjs.com/blog/2019-08-02-what-is-jsx-pragma/), and import `JSXXML` at the top of each file that contains JSX syntax for transpiler:

```javascript
/** @jsx JSXXML */
import { JSXXML } from "vxml-jsx";
```

This tells Babel to correctly transform XML JSX syntax into function calls.

## Usage

Once you have vxml.jsx and Babel set up, you can start using JSX syntax to create VoiceXML documents. Here's an example:

```javascript
/** @jsx JSXXML */
import { Block, JSXXML } from "vxml-jsx";
const Hello = <Block>Hello World!</Block>;
export default Hello;
```

> **Note**
> vxml.jsx is still in a very early stage.

### VXML Components

Component names should be exactly the same as the vanilla tags, except that the first letter should be capitalized. Usage is listed as follows:

- [Block](tests/Block.test.tsx)

### Composition Components

Composition components are based on VXML components to provide a common interaction flow in VoiceXML.

> **Note**
> In development.
