/*
开发环境
npm run dev
webpack-dev-server --config ./config/webpack.dev-dynamic-split.config.js
动态代码分离
*/
var path = require('path');
var webpack = require('webpack');
module.exports = {
	mode: "development",//production-生产环境-代码一行-默认 development-开发环境-开发时代码格式
	entry: {
		index:'./src/index.js', //以package.json文件为基础目录进行查找文件
	},
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'bundle.js',
		chunkFilename: '[name].bundle.js',
		pathinfo: false,//输出文件不再携带路径信息
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						// babelrc: false,//不采用.babelrc的配置
						// presets: ["@babel/preset-env", "@babel/preset-react"],
					}
				}
			},
			{
				test: /\.css$/,
				// use: ['style-loader', 'css-loader']
				// use: ['style-loader', 'postcss-loader']
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: 'file-loader',
				exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/, /\.css$/]
			},
			{
				test: /\.(woff|svg|eot|woff2|tff)$/,
				use: 'url-loader',
				exclude: /node_modules/
			}
		]
	},
	// devtool: "#inline-eval-cheap-source-map",// 任何地方都可以打断点
	// devtool: "source-map",//原始源代码 独立map文件 用于生产环境 某些代码无法打断点
	// devtool: "eval-source-map",//原始源代码 map文件合并在bundle包中 不能用于生产环境
	plugins: [
		new webpack.BannerPlugin('wanshaobo copyright reserved (Packaging Time: ' + new Date().toLocaleString() + ')')//压缩包头部添加注释
	],
	performance:{//性能提示
		hints: false//false | "warning" | "error"
	},
	//配置devServer，必须用npm命令启动
	//自动集成了html-webpack-plugin
	//生成的'bundle.js'在虚拟内存中
	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		compress: true,
		port: 9000,
		inline: true,//默认值true，实时重载的脚本被插入到你的包(bundle)中
		index: 'index.html',//可以不用配，默认是这个，但这个文件必须在dist目录下
		open: true,//自动打开浏览器加载/dist/index.html
	},
	// watch: true,
	watchOptions:{
		poll: 1000, //监测修改的时间(ms) 指定毫秒为单位进行轮询 等同于 watch: true,
		aggregateTimeout: 500, //防止重复按键，500毫米内算按键一次
		ignored: /node_modules/,
	}
};
