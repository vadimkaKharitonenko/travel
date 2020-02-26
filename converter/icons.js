/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const axios = require('axios');
const https = require('https');
const constants = require('./constants');

const {
  figmaToken,
  projectHash,
  baseUrl,
  iconBoard,
  iconPath,
} = constants;

function delay() {
  return new Promise(resolve => setTimeout(resolve, 300));
}

async function delayedRequest(id, file) {
  https.get(id, (response) => {
    response.pipe(file);
  });
  await delay();
}

function downloadIcons(iconsInfo) {
  axios({
    headers: {
      'X-Figma-Token': figmaToken,
    },
    method: 'get',
    url: `${baseUrl}images/${projectHash}?ids=${iconsInfo.reduce((acc, iconInfo) => [...acc, iconInfo.id], []).join()}&format=svg`,
  }).then(async (res) => {
    if (!fs.existsSync(iconPath)) fs.mkdirSync(iconPath);

    const promises = Object.keys(res.data.images).map(async (iconId, i) => {
      const file = fs.createWriteStream(`${iconPath}/${iconsInfo[i].name}.svg`);
      return delayedRequest(res.data.images[iconId], file);
    });

    await Promise.all(promises);
    console.log('\x1b[32m', ' -- icons complete');
  }).catch((err) => {
    console.log(err);
  });
}

axios({
  headers: {
    'X-Figma-Token': figmaToken,
  },
  method: 'get',
  url: `${baseUrl}files/${projectHash}/nodes?ids=${iconBoard.join()}`.toString(),
}).then((res) => {
  downloadIcons(Object.keys(res.data.nodes)
    .map((nodeID) => res.data.nodes[nodeID].document.children)[0]
    .filter((group) => group.name === 'icons')
    .reduce((acc, iconGroup) => [...acc, iconGroup.children], [])[0]
    .reduce((acc, icon) => [...acc, {
      id: icon.id,
      name: icon.name,
    }], []));
}).catch((err) => {
  console.log(err);
});
