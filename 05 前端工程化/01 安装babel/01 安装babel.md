# babel安装
* 安装依赖包
```shell
cnpm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
cnpm install --save @babel/polyfill
```
* 根目录创建文件babel.config.js
```javascript
const presets = [
         ["@babel/env",{
             targets:{
                 edge:"17",
                 firefox:"60",
                 chrome:"67",
                 safari:"11.1"
             }
         }]
     ];
     
     module.exports = {presets};
```
* 创建index.js
```javascript
console.log("ok")
```
* 运行index.js
```shell
npx babel-node index.js
```