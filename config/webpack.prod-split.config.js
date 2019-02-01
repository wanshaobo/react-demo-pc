/*
生产环境配置方案
类库拆分打包
webpack --config config/webpack.prod-split.config.js
没有jquery
3个文件184KB
app 35KB
app~vendor 关联文件 137KB
vendor 14KB
TODO 是否只需要生成一次vendor和app-vendor，引入一次缓存后，以后只更新app
后端静态html只引入一次vendor和app-vendor，每次只更新业务代码app
*/
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: "production",//production-生产环境-代码一行-默认 development-开发环境-开发时代码格式
	entry: {
		app:'./src/index.js', // 将 第三方依赖 单独打包
		vendor: [
			'react',
			'react-dom',
			// 'react-redux',
			// 'react-router',
			'react-router-dom',
			// 'react-router-redux',
			// 'redux',
			// './public/common-module'
		],
		// jquery:["jquery"]
	},
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].[chunkhash:8].bundle.js',//当文件没有发生改变chunkhash不变
		chunkFilename: '[name].[chunkhash].js',//非入口(non-entry) chunk 文件(关联文件)的名称
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
						presets: ['@babel/preset-env']
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
	plugins: [
		new HtmlWebpackPlugin({//https://github.com/jantimon/html-webpack-plugin#options
			template: 'index.html',
		}),//产生一个包含以下内容的文件 dist/index.html：
		new webpack.BannerPlugin('wanshaobo copyright reserved (Packaging Time: ' + new Date().toLocaleString() + ')')//压缩包头部添加注释
	],
	performance:{//性能提示
		hints: false//'error'生产环境推荐使用error
	},
	optimization:{
		splitChunks: {
			chunks: 'all',//提取公共模块
			minChunks: Infinity,//提取所有entry共同依赖的模块
		},
		minimize: true,//UglifyJsPlugin 压缩代码 default in production mode
	}
};
//webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
//webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead.

/*
打包策略如下：
第三方库如vue、jquery、bootstrap打包为一个文件
公共组件如弹窗、菜单等打包为一个文件
工具类、项目通用基类打包为一个文件
各个功能模块打包出自己的入口文件
各功能模块作用一个SPA，子页面进行异步加载
*/

//业务代码 类库代码 公共代码 分离
//react react-dom jquery 它们很少变化，并且到处被复用，应该被提取出来，并且得到长时间的缓存。