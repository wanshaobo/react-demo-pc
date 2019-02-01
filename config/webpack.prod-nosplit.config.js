/*
类库不拆分打包
webpack --config config/webpack.prod-nosplit.config.js
用于上线用的配置，不用启动服务，制作本地静态打包，不独立类库代码
没有jquery个文件容量163kb
有jquery个文件容量248kb
*/
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: "production",//production-生产环境-代码一行-默认 development-开发环境-开发时代码格式
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].[chunkhash:8].bundle.js',//当文件已经有更新时，其hash值必然改变，此时文件名变了，自然不存在此文件的缓存，于是浏览器会去加载最新的文件。
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