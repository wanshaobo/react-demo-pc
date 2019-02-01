webpack 命令 Module build failed (from ./node_modules/babel-loader/lib/index.js) 错误问题解决方案
控制台输入  npm install @babel/core @babel/preset-env 命令

本机访问地址，以为配appser服务器
http://test.iqiyi.com/react-demo-pc/index.html#/

webpack配置devServer后，用webpack-dev-server --config webpack.config.js启动，而且必须配置在npm的sripts中，直接在cmd模式中使用webpack-dev-server无法启动项目，直接在bash中执行webpack-dev-server走的是系统环境变量
还需要安装，npm i -D webpack-cli
npm run * 走的是本项目的node环境，node会在执行目录寻找node_modules目录，找到webpack-dev-server
服务启动后，会自动访问服务器所在目录的index.html

如果webpack输出文件配置了动态的hash值，不能使用本地静态html文件引入js，只能使用html-webpack-plugin动态引入
npm install --save-dev html-webpack-plugin
