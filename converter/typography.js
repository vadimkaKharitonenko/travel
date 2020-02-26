/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const axios = require('axios');
const constants = require('./constants');

const {
  figmaToken,
  projectHash,
  baseUrl,
  typographyBoard,
  typographyPath,
} = constants;

axios({
  headers: {
    'X-Figma-Token': figmaToken,
  },
  method: 'get',
  url: `${baseUrl}files/${projectHash}/nodes?ids=${typographyBoard.join()}`.toString(),
}).then((res) => {
  const fontString = Object.keys(res.data.nodes).map((nodeID) => res.data.nodes[nodeID].document.children)[0]
    .filter((group) => group.name === 'font')
    .map((fontGroup) => ({
      name: `.a-${fontGroup.children[1].characters.split(' ')[0].toLowerCase()}.-level-${fontGroup.children[1].characters.split(' ')[1]}`,
      styles: [
        `font-family: ${fontGroup.children[1].style.fontPostScriptName}, sans-serif;\n`,
        `font-weight: ${fontGroup.children[1].style.fontWeight};\n`,
        `font-size: ${fontGroup.children[1].style.fontSize}px;\n`,
        `letter-spacing: ${((fontGroup.children[1].style.letterSpacing * fontGroup.children[1].style.fontSize) / 1000).toFixed(3)}px;\n`,
        `line-height: ${fontGroup.children[1].style.lineHeightPx}px;`,
      ],
    })).map((font) => `${font.name} {
      ${font.styles.map((prop) => prop).join('')}
    }\n`).join('');

  fs.writeFile(typographyPath, fontString, (err) => err && console.log(err));
  console.log('\x1b[32m', ' -- typography complete');
}).catch((err) => {
  console.log(err);
});
