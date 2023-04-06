const path = require('path');
const fs = require('fs');

const pageList = [
  'product/voice-robot',
  'technology-service/technology',
  'technology-service/service',
  'partner/ecology',
  'about/about-baiying',
  'about/join',
  'about',
  'news',
];

const getTemplate = (path: string[], type) => {
  return `import React from 'react';
import OriginComponent from '${path[0]}';
import { HOST_ENUM } from '${path[1]}';
const Component = (props: any) => {
  return (
    <OriginComponent {...props} hostType={HOST_ENUM.${type}}></OriginComponent>
  );
}
export default Component;`;
};
const getSrc = (length: number) => Array.from({ length }).reduce((prev, curr) => `${prev}../`, '');
const pathName = process.argv[2];
const typeName = process.argv[3];
const pagesSrc = path.resolve(__dirname, '../pages');
const urlList = pageList.map(str => {
  const dirList = str.split('/');
  const file = dirList.pop();
  const currPath = path.join(pagesSrc, pathName, dirList.map(s => `/${s}`).join(''));
  fs.mkdirSync(currPath, { recursive: true });
  const fileName = file + '.tsx';
  const firstStr = getSrc(dirList.length + 1) + dirList.join('/') + '/' + file;
  fs.writeFileSync(
    path.join(currPath, fileName),
    getTemplate([firstStr, getSrc(dirList.length + 2) + `src/lib/utils`], typeName),
  );
  return 1;
});
console.log(pagesSrc);
