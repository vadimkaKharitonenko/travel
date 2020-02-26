/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const axios = require('axios');
const constants = require('./constants');

const {
  figmaToken,
  projectHash,
  baseUrl,
  colorBoard,
  colorPath,
} = constants;

axios({
  headers: {
    'X-Figma-Token': figmaToken,
  },
  method: 'get',
  url: `${baseUrl}files/${projectHash}/nodes?ids=${colorBoard.join()}`.toString(),
}).then((res) => {
  const colorString = `:root {
    ${Object.keys(res.data.nodes).map((nodeID) => res.data.nodes[nodeID].document.children
    .filter((group) => group.name === 'colors_group')[0].children
    .map((colorContent) => colorContent.children
      .filter((_, index) => index === 2)
      .map((color) => ({
        name: color.name.split('@')[1],
        value: `rgba(${color.fills[0].color.r}, ${color.fills[0].color.g}, ${color.fills[0].color.b}, ${color.fills[0].color.a})`,
      }))))[0]
    .map((colorObj) => `--${colorObj[0].name}: ${colorObj[0].value};\n`).join('')}
}`;

  fs.writeFile(colorPath, colorString, (err) => err && console.log(err));
  console.log('\x1b[32m', ' -- colors complete');
}).catch((err) => {
  console.log(err);
});
